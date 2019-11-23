import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import {getVendorPrefix} from '../../../utils/extend'

const Prefix = getVendorPrefix()

function getTranslateInfo(dom, type) {
    const t = dom.style[`${Prefix}Transform`]
    const reg = /translate([X|Y])?\((.+)?\)/
    const rst = reg.exec(t)
    let x = 0, y = 0;
    if (rst) {
        if (rst[1] === 'X') x = parseFloat(rst[2])
        if (rst[1] === 'Y') y = parseFloat(rst[2])
        if (!rst[1]) {
            const xy = rst[2].split(',')
            x = parseFloat(xy[0])
            y = parseFloat(xy[1])
        }
    }
    if (!type) return {x, y}
    else if (type === 1) return x
    else return y

}

class AppComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            children: null,
            index: props.index || 0,
            boxWidth: 0,
            loop: props.loop,
        }
    }


    componentDidMount() {
        const {props, initEvent, state} = this
        const {children} = props;
        this.initData(children, true)
        initEvent()

    }

    componentWillReceiveProps(nextProps) {
        const {children} = nextProps;
        this.initData(children)
    }

    initData = (children, type) => {
        const {box, state, props} = this
        const {bounceIndex = 2} = props
        let {loop, index} = state;
        const {offsetWidth} = box
        let nextChildren = React.Children.map(children, item => {
            let style = item.props.style || {}
            style = {...style, ...{width: offsetWidth}}
            item.props = {...item.props, ...{style}}
            return item
        });
        if (nextChildren.length < bounceIndex) loop = false
        this.itemLength = (loop ? 3 : 1) * nextChildren.length
        index = loop ? this.itemLength / 3 + index : index
        this.setState({
            loop,
            index,
            children: React.createElement('div', {
                className: 'xl_common_swiper_slide_box',
                ref: (t) => {
                    this.sildeBox = t;
                },
                style: loop ? {
                    width: this.itemLength * offsetWidth,
                    transform: `translate(-${index * offsetWidth}px, 0px)`,
                    WebkitTransform: `translate(-${index * offsetWidth}px, 0px)`,
                } : {
                    width: this.itemLength * offsetWidth,
                    transform: `translate(-${index * offsetWidth}px, 0px)`,
                    WebkitTransform: `translate(-${index * offsetWidth}px, 0px)`,
                },
            }, loop ? [nextChildren, nextChildren, nextChildren] : [nextChildren])
        })
        if (this.sildeBox && !loop) this.moveTo(0)
        if (loop) {
            if (this.loopFun) clearInterval(this.loopFun)
            this.loopFun = setInterval(() => {
                if (this.TOUCH_ING) return
                this.moveTo(this.state.index + 1)
            }, 4000)
        }
    }
    initEvent = () => {
        const {box, props, moveTo} = this
        const {bounce = 120, changeIndex} = props;
        const boxWidth = box.offsetWidth
        this.TOUCH_ING = false
        box.addEventListener('touchstart', (startEvent) => {
            const {sildeBox, itemLength, box} = this
            if (this.TOUCH_ING) clearTimeout(this.TOUCH_ING)
            this.TOUCH_ING = true
            const {offsetWidth} = sildeBox
            const wrapperWidth = boxWidth - offsetWidth
            const start = startEvent.touches[0]
            let startPageY = start.pageY
            let startX = start.pageX
            let startPageX = start.pageX
            this.MOVE_X = false
            const move = (moveEvent) => {
                const move = moveEvent.touches[0]
                const movePageY = move.pageY
                const movePageX = move.pageX
                let moveX = movePageX - startPageX
                let moveY = movePageY - startPageY
                if (Math.abs(moveX) > Math.abs(moveY) || this.MOVE_X) {
                    this.MOVE_X = true
                    let x = getTranslateInfo(sildeBox).x
                    if (x < wrapperWidth) {
                        let v = 1 - (wrapperWidth - x) / bounce
                        moveX = v * v * moveX
                    } else if (x > 0) {
                        let v = 1 - x / bounce
                        moveX = v * v * moveX
                    }
                    x = x + moveX
                    sildeBox.style[`${Prefix}TransitionDuration`] = `0s`
                    sildeBox.style[`${Prefix}Transform`] = `translate(${x}px,0px)`
                    moveEvent.stopPropagation()
                    moveEvent.cancelable && moveEvent.preventDefault()
                }
                startPageY = movePageY
                startPageX = movePageX
            }
            const end = () => {
                box.removeEventListener('touchmove', move, true)
                box.removeEventListener('touchend', end)
                let {index} = this.state
                if (Math.abs((startPageX - startX) / boxWidth) > .33) {
                    if (startPageX - startX < 0) index++
                    else index--
                }
                index < 0 && (index = 0)
                index >= itemLength && (index = itemLength - 1)
                this.TOUCH_ING = setTimeout(() => {
                    this.TOUCH_ING = null
                }, 2000)
                changeIndex(index)
                moveTo(index)
            }
            box.addEventListener('touchmove', move, true)
            box.addEventListener('touchend', end)
        })
    }
    moveTo = (index, type) => {
        const {sildeBox, box, itemLength, state} = this
        const {loop} = state
        const boxWidth = box.offsetWidth
        if (loop) {
            setTimeout(() => {
                sildeBox.style[`${Prefix}TransitionDuration`] = `0s`
                if (index === 0) {
                    index = itemLength / 3
                } else if (index === itemLength * 2 / 3) {
                    index = itemLength / 3
                }
                this.setState({
                    index
                })
                sildeBox.style[`${Prefix}Transform`] = `translate(${-index * boxWidth}px,0)`;
            }, 250)
        }
        this.setState({
            index
        })
        sildeBox.style[`${Prefix}Transition`] = `all .2s`;
        if (type) sildeBox.style[`${Prefix}TransitionDuration`] = `0s`
        sildeBox.style[`${Prefix}Transform`] = `translate(${-index * boxWidth}px,0)`;
    }


    render() {
        const {children} = this.state
        return (
            <div ref={(box) => {
                this.box = box
            }} className={'xl_common_swiper_box'}>
                {children}
            </div>
        )
    }
}

export default AppComponent
