import React from 'react'
import {polyfill} from 'react-lifecycles-compat';
export class Text extends React.Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}
export class Route extends React.Component {
    render() {
        return this.props.children
    }
}
class Router extends React.Component {
    constructor() {
        super();
        this.state = {
            children: null
        }
    }
    componentWillMount() {
        let {children} = this.props
        const {pathname} = window.location
        children = this.checkRouter(children, pathname)
        this.setState({
            children
        })
    }
    checkRouter = (childrens, pathname) => {
        function checkRouter(childrens, pathname) {
            childrens.forEach((item, index) => {
                const {props, type} = item
                if (Object.prototype.toString.call(type) == '[object Function]' && type.name == 'Route') {
                    let {extra, path, children} = props
                    console.log(item)
                    if (path !== pathname && !extra) {
                        childrens[index].props.children= null
                    } else {
                        if (new RegExp(`^${path}`).test(pathname)) {
                            let {children} = props
                            if (Object.prototype.toString.call(children) == '[object Array]') {
                                childrens[index].props.children = checkRouter(children, pathname)
                            }
                        } else {
                            childrens[index].props.children= null
                        }
                    }
                } else {
                    let {children} = props
                    if (Object.prototype.toString.call(children) == '[object Array]') {
                        childrens[index].props.children = checkRouter(children, pathname)
                    }
                }

            })
            return childrens
        }
        return checkRouter(childrens, pathname)
    }
    render() {
        const {children} = this.state
        return React.createElement('div', {}, children)
    }
}
export default Router
