import { connect as connects} from "react-redux";
import actions from "../actions/userInfo";
import {bindActionCreators} from "redux";

/*
* 设置默认属性
* defaultProps  Object  传入默认属性
* */
export function defaultProps(defaultProps) {
    return function (target) {
        target.defaultProps = defaultProps
    }
}
/*
* 组件的延时加载
* promise   Promise Promise对象
* 传入promise对象，当promise中执行resole时候组件加载完成
* */
export function loading(promise) {
    return function (target) {
        let render = target.prototype.render;
        let componentWillMount = target.prototype.componentWillMount;
        target.prototype.componentWillMount = function () {
            this.setState({
                loading:true
            })
            if(promise) promise(this.props,this.state).then(()=>{
                this.setState({
                    loading:false
                })
            })
            if(componentWillMount) componentWillMount.apply(this)
        }
        target.prototype.render = function () {
            if(this.state.loading) return(<div>loading</div>)
            return render.apply(this)
        }
        return target
    }
}


/*
* 是否登陆
* 检查是否登陆，通过传入的数据
* */
export function login() {
    return function (target) {
        let render = target.prototype.render;
        target.prototype.render = function () {
            if(!this.props.userInfo || !this.props.userInfo.isLogin){
                return (<div>no login</div>)
            }
            return render.apply(this)
        }
        let componentWillMount = target.prototype.componentWillMount;
        target.prototype.componentWillMount = function () {
            if(componentWillMount) componentWillMount.apply(this)
        }
    }
}

/*
* redux的connect方法和组件连接
* reduces   Array   state对象上的属性名称数组，用于绑定state数据到组件上
* actions   Object  redux的actions
* */
export function connect(reduces,actions) {
    return function (target) {
        return connects(state=>{
            let stateProps;
            reduces.forEach((item)=>{
                stateProps={
                    [item]:state[item]
                }
            })
            return stateProps
        },dispatch=>{
            return bindActionCreators(actions,dispatch)
        })(target)
    }
}

/*
* 将class上面的方法thie指向对象本身
* */
export function autobind(targer,name,descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function () {
        return oldValue.apply(this, arguments);
    }
    return descriptor
}


/*
* 设置title
* title String  标题名称
* */
export function setTitle(title) {
    return target=>{
        let componentWillMount = target.prototype.componentWillMount;
        target.prototype.componentWillMount = function () {
            _setTitle(title)
            if(componentWillMount) componentWillMount.apply(this)
        }
    }
}
// 设置文档的标题 html标题
function _setTitle(title) {
    document.title = title;
    let iframe = document.createElement('iframe');
    iframe.src = '../favicon.ico';
    iframe.style.display = 'none';
    // 重新加载一个iframe就会重新刷新 document.title
    iframe.onload = function() {
        setTimeout(function(){
            iframe.remove();
        }, 0)
    }
    document.body.appendChild(iframe);
}






