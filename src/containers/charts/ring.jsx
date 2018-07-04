import React from 'react';
import './index.scss'
import Ring from '../util/charts/ring'

export default class Main extends React.Component {

    render() {
        return (
            <div className='ring'>
                <Ring borderWidth={30} time={3000} percent={.55}/>
            </div>
        )
    }
}