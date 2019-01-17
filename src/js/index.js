import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import Clock from './Clock.js';
import Props from './Props.js';
import Event from './Event';
import Condition from './Condition';
import List from './List';
import Styled from './styledCom';
import Detail from './Detail';
import Store from './Store';
import {
    Router, // **只能有一个子孩子**实现路由最外层的容器，一般情况下我们不再需要直接使用它，而是使用在它基础之上封装的几个适用于不同环境的组件
    Route,   // 提供了路由配置
    NavLink  // 可以访问这些路由的组件
  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import styles from '../scss/style.scss';

// console.log('Router++=----',Router)
// console.log('styles',styles)

const history = createBrowserHistory();
// console.log('history++++++',history);

const BasicExample = () => (
    <Router history={history}>
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
                <li><NavLink activeClassName={styles.on} to="/Styled">Styled</NavLink></li>
                <li><NavLink activeClassName={styles.on} to="/Store">Store</NavLink></li>
                {/* <li><NavLink activeClassName={styles.on} to="/user">user</NavLink></li> */}
            </ul>
            <hr/>
            <Route exact path="/" component={App}></Route>
            <Route exact={false} path="/Clock" render={(props) => <Clock {...props}/>} />
            <Route path="/Props" component={Props}/>
            <Route path="/Condition" component={Condition}/>
            <Route path="/Event" component={Event}/>
            <Route path="/List" component={List}/>
            <Route strict path="/login" render={() => <p>render 当路径匹配时渲染UI，与component不同的是，它只调用render()方法去渲染组件，不会去重新创建元素，所以速度更快，只适用于行内渲染。</p>} />
            <Route path="/Styled" component={Styled}/>
            <Route path="/Detail/:id" component={Detail}/>
            <Route path="/Detail" component={Detail}/>
            <Route path="/Store" component={Store}/>
            {/* <Route path="/user" children={() => <h1>children 与render类似，唯一的区别是不管路径是否匹配都会渲染，所以它最适合用于做转场动画</h1>}/> */}
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
