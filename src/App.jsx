import './App.css'
import Button from "./Button.jsx";


const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
]

const listItem = products.map(product => {
    <li key={product.id} style={{color: product.isFruit ?'green':'blue'}}>
        { product.title}
    </li>
})

function App(){
    return (
        <>
            <Button type="test" onClick={() => console.log('click done.')}>I'm a button</Button>
            <li>{listItem}</li>
        </>
    )
}

export default App
