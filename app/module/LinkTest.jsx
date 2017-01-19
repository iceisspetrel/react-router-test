import {Link, IndexLink, browserHistory, hashHistory} from 'react-router';

export default class LinkTest extends React.Component{
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        );
    }

    routerWillLeave (nextPath) {
        return Math.random() > 0.5;
    }

    handleSubmit () {
        let name  = this.refs.name.value;
        let path  = '/page2/' + name;

        hashHistory;
        debugger;
        hashHistory.push(path);
    }

    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/page4" activeStyle={{color : 'red'}}>toPage4</Link>
                    </li>
                    <li>
                        <Link to="/page1/string" activeStyle={{color : 'blue'}}>toPage5</Link>
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName={'toHome'} activeStyle={{color : 'green'}}>返回首页</IndexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>...</Link>
                    </li>
                </ul>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="name"/>
                    <input type="submit" value="go"/>
                </form>
            </div>
        );
    }
}
