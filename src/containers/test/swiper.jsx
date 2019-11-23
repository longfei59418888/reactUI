import React from 'react/umd/react.development';
import Storage, {get, set, clear, remove} from 'xl_storage/lib/index'
// import {error} from '../util/pc/toast'
import Swiper from '../../containers/util/swiper'
import Slider from '../../containers/util/iscroll/slider/slider2'
import './index2.scss'

export default class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            keyName: ['blue', 'red'],
            index: 0
        }
    }


    render() {
        const {keyName, index} = this.state
        return (
            <div className={'test-test'}>
                <Slider scroll={(options) => {
                    const {index} = this.state
                    const {_this, orientation, getTranslateInfo, boxScroll, Prefix, windowHeight} = options
                    let boxScrollXY = getTranslateInfo(boxScroll)
                    let {x, y} = boxScrollXY
                    if (_this.id == null && y < -250) {
                        _this.id = `#slide-box-${index}`
                        _this.boxScroller.style[`${Prefix}TransitionDuration`] = `0s`
                        _this.boxScroller.style[`${Prefix}Transform`] = `translate(${x}px,${-251}px)`
                        _this.boxScroller = document.querySelector(_this.id)
                        const testScrollXY = getTranslateInfo(document.querySelector(_this.id))
                        y = testScrollXY.y
                        if (y >= 0 && orientation == 'down') {
                            _this.id = null
                            _this.boxScroller.style[`${Prefix}TransitionDuration`] = `0s`
                            _this.boxScroller.style[`${Prefix}Transform`] = `translate(${x}px,0px)`
                            _this.boxScroller = boxScroll
                            _this.wrapperHeight = windowHeight - _this.boxScroller.offsetHeight
                            _this.boxScrollXY = getTranslateInfo(_this.boxScroller)
                            y = boxScrollXY.y
                        } else {
                            _this.wrapperHeight = _this.boxScroller.parentNode.offsetHeight - _this.boxScroller.offsetHeight
                            boxScrollXY = getTranslateInfo(_this.boxScroller)
                            y = boxScrollXY.y
                        }
                    } else {

                        _this.wrapperHeight = windowHeight - _this.boxScroller.offsetHeight
                        boxScrollXY = getTranslateInfo(_this.boxScroller)
                        y = boxScrollXY.y
                        if (y >= 0 && orientation == 'down' && _this.id) {
                            _this.id = null
                            _this.boxScroller.style[`${Prefix}TransitionDuration`] = `0s`
                            _this.boxScroller.style[`${Prefix}Transform`] = `translate(${x}px,0px)`
                            _this.boxScroller = boxScroll
                            _this.wrapperHeight = windowHeight - _this.boxScroller.offsetHeight
                            boxScrollXY = getTranslateInfo(_this.boxScroller)
                            y = boxScrollXY.y
                        }
                    }
                    return {x, y}
                }}>
                    <div className={'top'}></div>
                    <div className="top-bottom"></div>
                    <div className={'box'}>
                        <Swiper
                            index={this.state.index}
                            changeIndex={(index) => {
                                this.setState({
                                    index
                                })
                            }}>
                            {keyName.map((item, index) => {
                                return <div id={`slide-box-${index}`} style={{background: item}}
                                            key={item}>
                                    <div style={{height: 1600}}>{item}</div>
                                </div>
                            })}
                        </Swiper>
                    </div>
                </Slider>

            </div>
        )
    }
}

