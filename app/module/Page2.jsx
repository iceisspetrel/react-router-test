export default class Page2 extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <span>page2</span>
                {this.props.children}
            </div>
        );
    }
}
