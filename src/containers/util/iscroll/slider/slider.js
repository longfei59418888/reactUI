import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import {getTranslateInfo, getVendorPrefix} from '../../../../utils/extend'

class AppComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const boxScroll = this.boxScroll
        const Prefix = getVendorPrefix()
        boxScroll.style[`${Prefix}Transform`] = `translate(0px,-60px)`
        let moveIng = false
        boxScroll.addEventListener('touchstart', (se) => {
            let se_y = se.touches[0].pageY
            const move = (me) => {
                console.log(1)
                const me_y = me.touches[0].pageY
                const move_y = me_y - se_y
                const {x, y} = getTranslateInfo(boxScroll.style[`${Prefix}Transform`])
                if (move_y >= 0 && boxScroll.scrollTop == 0) {
                    moveIng = true
                    const target_y = y + move_y
                    boxScroll.style[`${Prefix}Transform`] = `translate(0px,${target_y}px)`
                } else {
                    console.log(y)
                    if(y>-60) {
                        me.preventDefault()
                    }

                }
                se_y = me_y
            }
            const end = () => {
                boxScroll.removeEventListener('touchmove', move)
                boxScroll.removeEventListener('touchend', end)
            }

            boxScroll.addEventListener('touchmove', move,true)
            boxScroll.addEventListener('touchend', end)

        })
        boxScroll.addEventListener('scroll', (e) => {
            if(moveIng) {
                e.stopPropagation()
                e.preventDefault()
                return
            }
            const boxScroll = e.target
            console.log(2)
        })
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
