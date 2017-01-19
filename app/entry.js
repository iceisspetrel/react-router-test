import {Router, Route, hashHistory, IndexRoute, Redirect} from 'react-router';
import Login from './module/Login.jsx';
import Page1 from './module/Page1.jsx';
import Page2 from './module/Page2.jsx';
import Page3 from './module/Page3.jsx';
import Page4 from './module/Page4.jsx';
import Page5 from './module/Page5.jsx';
import NotFound from './module/NotFound.jsx';
import LinkTest from './module/LinkTest.jsx';

{/*

var routes = (
    <Route path="/page4/*.*" component={Page4}>
        <Route path="/page5" component={Page5}></Route>
    </Route>
);

ReactDOM.render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('app')
);

*/}

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Login}>
                <IndexRoute component={Page5} />
                <Route path="p1" component={Page1}></Route>
                <Route path="p2" component={Page2}></Route>
            </Route>
            <Route path="/test" onEnter={(params, replace) => {}} onLeave={(params, replace) => {debugger;return false;}} component={LinkTest}></Route>
            <Redirect from="/pagex" to="/page4/page5"></Redirect>
            <Route path="/page1/:name" component={Page1}></Route>
            <Route path="/page2(/:name)" component={Page2}></Route>
            <Route path="/page3/(:name)abc" component={Page3}></Route>
            <Route path="/page4" component={Page4}>
                <Route path="page5" component={Page5}></Route>
            </Route>
            <Route path="/**/page" component={Page3}></Route>
            <Route path="/*" component={NotFound}></Route>
        </Router>
    ),
    document.getElementById('app')
);
