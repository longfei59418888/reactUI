import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import {getTranslateInfo, getVendorPrefix} from '../../../../utils/extend'

const Prefix = getVendorPrefix()

class AppComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        const boxScroll = this.boxScroll
        const {refresh} = this.props
        boxScroll.style[`${Prefix}Transform`] = `translate(0px,-60px)`
        let moveIng = false
        boxScroll.addEventListener('touchstart', (se) => {
            if (this.refreshIng) {
                se.preventDefault()
                return
            }
            let se_y = se.touches[0].pageY
            const move = (me) => {
                const me_y = me.touches[0].pageY
                const move_y = me_y - se_y
                const {x, y} = getTranslateInfo(boxScroll.style[`${Prefix}Transform`])
                if (move_y >= 0 && boxScroll.scrollTop == 0) {
                    moveIng = true
                    let target_y = y + move_y * ((60 - y) / 120) * (60 - y) / 120
                    boxScroll.style[`${Prefix}Transform`] = `translate(0px,${target_y}px)`
                } else {
                    let target_y = y + move_y * ((60 - y) / 120) * (60 - y) / 120
                    if (y > -60) {
                        me.preventDefault()
                        boxScroll.style[`${Prefix}Transform`] = `translate(0px,${target_y}px)`
                    }
                }
                se_y = me_y
            }
            const end = () => {
                const {x, y} = getTranslateInfo(boxScroll.style[`${Prefix}Transform`])
                if (y > 0) {
                    boxScroll.style[`${Prefix}Transform`] = `translate(0px,0px)`
                    this.refreshIng = true
                    refresh(this.refreshEnd)
                } else {
                    boxScroll.style[`${Prefix}Transform`] = `translate(0px,-60px)`
                }
                boxScroll.removeEventListener('touchmove', move, true)
                boxScroll.removeEventListener('touchend', end)
            }
            boxScroll.addEventListener('touchmove', move, true)
            boxScroll.addEventListener('touchend', end)
        })
    }
    refreshEnd = () => {
        const boxScroll = this.boxScroll
        boxScroll.style[`${Prefix}Transform`] = `translate(0px,-60px)`
        this.refreshIng = false
    }
    render() {
        return (
            <div className={'xl_common_slider_box'}>
                <div ref={(box) => {
                    this.boxScroll = box
                }} className={'xl_common_slider_action_box'}>
                    <div style={{height: 60}}></div>
                    <div className={'xl_common_slider_container'}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default AppComponent
