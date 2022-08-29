import './App.css'
import Button from "./Button.jsx";

function App(){
    return (
        <div>
            <Button onClick={() => console.log('click done.')}>I'm a button</Button>
        </div>
    )
}

export default App
