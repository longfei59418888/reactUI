import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import {getVendorPrefix} from '../../../../utils/extend'
import Swiper from '../../../util/swiper'

const Prefix = getVendorPrefix()
const rAF = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };


class AppComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.marginTop = 60
        this.bounceHeight = 60
    }

    componentDidMount() {
        const boxScroll = this.boxScroll
        const {bounceHeight} = this
        const {scroll} = this.props
        const windowHeight = window.innerHeight
        boxScroll.addEventListener('touchstart', (startEvent) => {
            const start = startEvent.touches[0]
            const startTime = new Date().getTime()
            let startPageY = start.pageY
            let startPageX = start.pageX
            this.boxScroller = boxScroll
            this.wrapperHeight = windowHeight - boxScroll.offsetHeight - 1
            this.id = null
            this.MOVE_Y = false
            const move = (moveEvent) => {
                const move = moveEvent.touches[0]
                const movePageY = move.pageY
                const movePageX = move.pageX
                let moveX = movePageX - startPageX
                let moveY = movePageY - startPageY
                let orientation = null
                if (Math.abs(moveX) < Math.abs(moveY) || this.MOVE_Y) {
                    this.MOVE_Y = true
                    orientation = moveY > 0 ? 'down' : 'up'
                    let {x, y} = scroll({
                        _this: this,
                        orientation,
                        moveY,
                        moveEvent,
                        windowHeight,
                        boxScroll,
                        Prefix,
                        getTranslateInfo,
                    })
                    y = y + moveY
                    if (y < this.wrapperHeight) {
                        let v = 1 - (this.wrapperHeight - y) / bounceHeight
                        moveY = v * v * moveY
                        y = this.wrapperHeight
                    } else if (y > 0) {
                        let v = 1 - (y - 0) / bounceHeight
                        moveY = v * v * moveY
                        y = 0
                    }
                    this.boxScroller.style[`${Prefix}TransitionDuration`] = `0s`
                    this.boxScroller.style[`${Prefix}Transform`] = `translate(${x}px,${y}px)`
                    moveEvent.stopPropagation()
                    moveEvent.cancelable && moveEvent.preventDefault()
                } else {
                    orientation = moveX > 0 ? 'left' : 'right'
                }
                startPageY = movePageY
                startPageX = movePageX
            }
            const end = (endEvent) => {
                const {boxScroller, wrapperHeight} = this
                boxScroll.removeEventListener('touchmove', move, false)
                boxScroll.removeEventListener('touchend', end)
                const boxScrollXY = getTranslateInfo(boxScroller)
                const quadratic = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                let {x, y} = boxScrollXY
                if (y < wrapperHeight || y > 0) {
                    boxScroller.style[`${Prefix}TransitionTimingFunction`] = quadratic
                    boxScroller.style[`${Prefix}TransitionDuration`] = `500ms`
                    y = y < wrapperHeight ? wrapperHeight : 0
                    boxScroller.style[`${Prefix}Transform`] = `translate(${x}px,${y}px)`
                    return
                }
                const time = (new Date().getTime() - startTime)
                let distance = startPageY - start.pageY
                const speed = Math.abs(distance) / time;
                let duration = speed / 0.006
                let destination = (distance < 0 ? -1 : 1) * speed * speed / 0.0012;
                let destY = destination + y
                if (destY < wrapperHeight) {
                    destY = wrapperHeight
                    duration = Math.sqrt(Math.abs(destY - y) * 0.006, 2) / 0.0012
                }
                if (destY > 0) {
                    destY = 0
                    duration = Math.sqrt(Math.abs(destY - y) * 0.006, 2) / 0.0012
                }
                boxScroller.style[`${Prefix}TransitionTimingFunction`] = quadratic
                boxScroller.style[`${Prefix}TransitionDuration`] = `${duration}ms`
                boxScroller.style[`${Prefix}Transform`] = `translate(${x}px,${destY}px)`
            }
            boxScroll.addEventListener('touchmove', move, false)
            boxScroll.addEventListener('touchend', end)
        })

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

    }

    render() {
        return (
            <div className={'xl_common_slider_box2'}>
                <div ref={(box) => {
                    this.boxScroll = box
                }} className={'xl_common_slider_action_box'}>
                    <div className={'xl_common_slider_container'}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default AppComponent
