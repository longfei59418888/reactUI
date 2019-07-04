import React from 'react';
import IScroll from '../iscroll-probe.js'; // 该文件被修改


class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    let refreshStateDefault = {
      init: <p>下拉刷新...</p>,
      canLoading: <p>松手刷新...</p>,
      loading: <p>正在刷新...</p>,
      end: <p>刷新完成...</p>,
    };
    let loadMoreStateDefault = {
      init: <p>加载更多...</p>,
      loading: <p>正在加载...</p>,
      end: <p>加载完毕..</p>,
    };
    const {
      onRefresh = false,
      onLoadMore = false,
      refreshHeight = 60,
      refreshState = {},
      loadMoreState = {},
    } = this.props;
    refreshStateDefault = Object.assign(refreshStateDefault, refreshState);
    loadMoreStateDefault = Object.assign(loadMoreStateDefault, loadMoreState);
    this.state = {
      refreshCom: refreshStateDefault.init,
      loadMoreCom: loadMoreStateDefault.init,
    };
    this.onRefresh = onRefresh;
    this.refreshHeight = refreshHeight;
    this.refreshState = refreshStateDefault;
    this.loadMoreState = loadMoreStateDefault;
    this.onLoadMore = onLoadMore;
    this.canRefresh = false; // 是否可以再次刷新
    this.isRefreshIng = false; // 是否在刷新中
    this.canLoadMore = false; // 是否可以再次加载
    this.loadMoreIng = false; // 是否在加载中
    this.loadEnd = false; // 是否加载完毕
    this.doRefresh = false; //
    this.style = {
      container: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
      },
      boxScroll: {
        position: 'absolute',
        top: this.onRefresh ? -refreshHeight : 0,
        width: '100%',
        overflow: 'hidden',
        bottom: 0,
      },
      refresh: {
        height: refreshHeight,
        display: this.onRefresh ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
      },
      loadMore: {
        height: refreshHeight,
        display: this.onLoadMore ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
      },
    };
  }

  componentDidMount() {
    const _this = this;
    const {
      box, boxScroll, onRefresh, refreshHeight, 
    } = this;
    const { init, onScroll = null } = this.props;

    // 设置最小高度，保证页面永远可以滚动
    box.style['min-height'] = `${boxScroll.offsetHeight + 1}px`;

    this.iScrollInstance = new IScroll(boxScroll, {
      probeType: 3,
      mouseWheel: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: false,
      hasRefresh: onRefresh,
      refreshHeight,
      preventDefault: false,
    });

    const { iScrollInstance } = this;

    // 滚动中
    iScrollInstance.on('scroll', () => {
      const {
        isRefreshIng, loadMoreIng, onRefresh, canRefresh, refreshState, onLoadMore, loadEnd, canLoadMore,
      } = this;
      // 正在加载或刷新直接返回
      if (onScroll) onScroll(iScrollInstance);
      if (isRefreshIng || loadMoreIng) return;
      // 刷新
      if (onRefresh) {
        if (iScrollInstance.y > refreshHeight && !canRefresh) {
          if (!canRefresh) {
            this.setState({
              refreshCom: refreshState.canLoading,
            });
          }
          this.canRefresh = true; // 可以刷新
        }
        if (iScrollInstance.y < refreshHeight - 1 && canRefresh) {
          if (canRefresh) {
            this.setState({
              refreshCom: refreshState.init,
            });
          }
          this.canRefresh = false; // 不刷新
        }
      }
      // 加载更多
      if (onLoadMore && !loadEnd) {
        if (iScrollInstance.y < iScrollInstance.maxScrollY + 80 && !canLoadMore) this.canLoadMore = true; // 可以加载
        if (iScrollInstance.y > iScrollInstance.maxScrollY + 80 && canLoadMore) this.canLoadMore = false; // 不加载
      }
    });

    // 滚动结束
    iScrollInstance.on('scrollStartEnd', () => {
      const {
        isRefreshIng, loadMoreIng, onRefresh, canRefresh, refreshState, onLoadMore, loadEnd, canLoadMore,
        refreshEnd, loadMoreEnd,
      } = this;
      // 正在加载或者刷新时候直接返回
      if (isRefreshIng || loadMoreIng) return;
      // 是否可以刷新
      if (canRefresh) {
        this.setState({
          refreshCom: refreshState.loading,
        });
        this.isRefreshIng = true;
        setTimeout(() => {
          onRefresh(this, (type) => {
            refreshEnd(type);
          });
        }, 50);
      }
      // 加载更多
      if (canLoadMore && !loadEnd) {
        this.loadMoreIng = true;
        setTimeout(() => {
          onLoadMore(_this, (type) => {
            loadMoreEnd(type);
          });
        }, 50);
      }
    });

    // 当前小于整页
    if (init && (init.x + init.y) !== 0) {
      iScrollInstance.scrollTo(init.x, init.y, 0);
      // 初次进来,数据没有填充满整个页面，会去请求数据 (加载更多)
    } else if (iScrollInstance.maxScrollY === -1) {
      setTimeout(() => {
        _this.init();
      }, 50);
    }
  }

  shouldComponentUpdate(np) {
    // 组件改变刷新
    const { children } = this.props;
    if (np.children !== children) this.doRefresh = true;
    return true;
  }

  componentDidUpdate() {
    const { doRefresh, refresh } = this;
    if (doRefresh) refresh();
    this.doRefresh = false;
  }

  componentWillUnmount() {
    const { iScrollInstance } = this;
    const { leaveBefor } = this.props;
    if (iScrollInstance.maxScrollY === -1) return;
    if (leaveBefor) leaveBefor(iScrollInstance);
  }

  // 加载更多完成
  loadMoreEnd(type) {
    this.canLoadMore = false;
    setTimeout(() => {
      if (type) this.setEnd();
      this.iScrollInstance.refresh();
      this.loadMoreIng = false;
    }, 50);
  }

  // 加载完毕
  setEnd() {
    const { loadMoreState } = this;
    this.setState({
      loadMoreCom: loadMoreState.end,
    });
    this.loadEnd = true;
  }

  // 刷新iscroll
  refresh() {
    setTimeout(() => { this.iScrollInstance.refresh(); }, 50);
  }

  // 下拉刷新结束函数
  refreshEnd = (type) => { // type true:加载完毕
    const { refreshState, iScrollInstance, loadMoreState } = this;
    this.setState({
      refreshCom: refreshState.end,
    });
    iScrollInstance.refreshEnd();
    this.canRefresh = false;
    setTimeout(() => {
      this.setState({
        loadMoreCom: loadMoreState.loading,
        refreshCom: refreshState.init,
      });
      this.loadEnd = false;
      if (type) this.setEnd();
      iScrollInstance.refresh();
      this.isRefreshIng = false;
    }, 50);
  }

  init() {
    const {
      loadEnd, onLoadMore, loadMoreEnd,
    } = this;

    if (!loadEnd && onLoadMore) {
      this.loadMoreIng = true;
      setTimeout(() => {
        onLoadMore(this, (type) => {
          loadMoreEnd(type);
        });
      }, 50);
    }
  }

  render() {
    const {
      container, boxScroll, refresh, loadMore,
    } = this.style;
    const { children } = this.props;
    const { refreshCom, loadMoreCom } = this.state;
    return (
      <div style={container}>
        <div ref={(r) => { this.boxScroll = r; }} style={boxScroll}>
          <div ref={(r) => { this.box = r; }}>
            <div ref={(r) => { this.refresh = r; }} style={refresh}>{refreshCom}</div>
            {children}
            <div ref={(r) => { this.loadMore = r; }} style={loadMore}>{loadMoreCom}</div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
