import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import {AppContainer} from 'react-hot-loader'
import App from './containers/index';
// import Router, {Route, Text} from './containers/test/router'
// import Slider from './containers/util/iscroll/slider/slider'
// import Slider from './containers/util/iscroll/slider/slider2'
// import Swiper from './containers/util/swiper'

// <Router>
// <div>1</div>
// <Text>
//     <div>3</div>
//     <Route path='/test2'>7</Route>
// </Text>
// <Route path='/test'>4</Route>
// <Route extra path='/switch'>
//     <div>2</div>
//     <Route path='/switch/one'>5</Route>
//     <Route path='/switch/two'>
//         <div>6</div>
//     </Route>
// </Route>
// </Router>
const test = [1, 2, 3, 4, 5, 5, 6, 6, 7, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 8, 9, 9, 9, 2, 3, 4, 5, 5, 6,
    6, 7, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 8, 9, 9, 9, 2, 3, 4, 5, 5, 6, 6, 7, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 8, 9, 9, 'end']
const renderApp = App => {
    render(
        <AppContainer>
            {/*<Slider refresh={(end) => {*/}
                {/*setTimeout(() => {*/}
                    {/*end()*/}
                {/*}, 2000)*/}
            {/*}}>*/}
                {/*<div style={{height: 100,background:'blue'}}></div>*/}
                {/**/}
                {/*<div id='test' style={{paddingBottom: 50}}>*/}
                    {/*<Swiper>*/}
                        {/*<div style={{height: 50, background: '#3B7ED1'}}></div>*/}
                        {/*<div style={{height: 50, background: 'red'}}>2</div>*/}
                        {/*<div style={{height: 50, background: 'yellow'}}>3</div>*/}
                    {/*</Swiper>*/}
                    {/*{test.map((item, key) => {*/}
                        {/*return <p onClick={() => {*/}
                            {/*console.log(1)*/}
                        {/*}} key={key}>aa{item}</p>*/}
                    {/*})}*/}
                {/*</div>*/}

            {/*</Slider>*/}
            <Router>
                <Provider store={store}>
                    <App/>
                </Provider>
            </Router>
        </AppContainer>,
        document.getElementById("app")
    );
};

renderApp(App);

if (module.hot) {
    // debugger;
    module.hot.accept(() => renderApp(App));
}
