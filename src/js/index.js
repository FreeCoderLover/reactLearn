import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import Clock from './Clock.js';
import Props from './Props.js';
import Event from './Event';
import Condition from './Condition';
import List from './List';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import styles from '../scss/style.scss';

console.log('sssssss',styles)
console.log('sssssss++++',styles['error-message'])
const history = createBrowserHistory();

console.log('history++++++', history);

const BasicExample = () => (
    <Router>
        {/* 只能有一个子孩子 */}
        <div>
            <ul className={styles.wrap}>
                <li><NavLink to="/" exact activeClassName={styles.on}>Home</NavLink></li>
                <li><NavLink to={{
                    pathname: '/Clock',
                    search:'',
                    hash:'',
                    state:''
                }} replace={true} activeClassName={styles.on} activeStyle={{'fontSize':'30px'}}>Clock</NavLink></li>
                <li><NavLink activeClassName={styles.on} to="/Props">Props</NavLink></li>
                <li><NavLink activeClassName={styles.on} to="/Condition">Condition</NavLink></li>
                <li><NavLink activeClassName={styles.on} to="/Event">Event</NavLink></li>
                <li><NavLink activeClassName={styles.on} to="/List">List</NavLink></li>
                <li><NavLink activeClassName={styles.on} to="/login">login</NavLink></li>
                <li><NavLink activeClassName={styles.on} to="/user">user</NavLink></li>
            </ul>
            <hr/>
            <Route exact={true} path="/" component={App}></Route>
            <Route exact={false} path="/Clock" render={(props) => <Clock {...props}/>} />
            <Route path="/Props" component={Props}/>
            <Route path="/Condition" component={Condition}/>
            <Route path="/Event" component={Event}/>
            <Route path="/List" component={List}/>
            <Route strict path="/login" render={() => <p>render 当路径匹配时渲染UI，与component不同的是，它只调用render()方法去渲染组件，不会去重新创建元素，所以速度更快，只适用于行内渲染。</p>} />
            <Route path="/user" children={() => <h1>children 与render类似，唯一的区别是不管路径是否匹配都会渲染，所以它最适合用于做转场动画</h1>}/>
        </div>
    </Router>
)

render( 
    <div>
        <BasicExample/>
        {/* <App></App>
        <Clock date={new Date()}></Clock>
        <Props name={"REACT HELLO!"}></Props>
        <Event></Event>
        <Condition isIn={false} isShow={true}></Condition>
        <List></List> */}
    </div>,
    document.getElementById('app')
)
