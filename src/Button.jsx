import {Component} from "react";

class Button extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        if(!this.props.onClick) return
        this.props.onClick()
    }
    render() {
        return (
            <button
                className="bg-gray-100 p-2 px-4 rounded-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:bg-gray-100 focus:ring-opacity-50"
                onClick={this.handleClick}>{this.props.children}</button>
        )
    }
}

export default Button
