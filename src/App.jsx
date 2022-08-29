import './App.css'
import Button from "./Button.jsx";

function App(){
    return (
        <>
            <Button type="test" onClick={() => console.log('click done.')}>I'm a button</Button>
        </>
    )
}

export default App
