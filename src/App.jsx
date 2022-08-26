import './App.css'
import Button from "./Button.jsx";
import {Component} from "react";

class App extends Component{
    render() {
        return (
            <div>
                <Button onClick={() => console.log('click done.')}>I'm a button</Button>
            </div>
        )
    }
}

export default App
