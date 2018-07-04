import React from 'react';
import './index.scss';
import Pie from '../util/charts/pie'

export default class Main extends React.Component {

    render() {

        return (
            <div className='ring'>
                <Pie borderWidth={30} time={3000} percent={.55}/>
            </div>
        )
    }
}