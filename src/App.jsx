import './App.css'
import Button from "./Button.jsx";


const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
]

const listItem = products.map(product => {
    return <li key={product.id} style={{color: product.isFruit ? 'green' : 'blue'}}>
        {product.title}</li>
})

function App(){
    return (
        <>
            <Button className={'awesome-button'} type="" onClick={() => console.log('click done.')}>I'm a button</Button>
            <Button className={'awesome-button'} type="danger" onClick={() => console.log('click done.')}>I'm danger</Button>
            <Button className={'awesome-button'} type="warning" onClick={() => console.log('click done.')}>I'm warning</Button>
            <ul className={'hello-react'}>{listItem}</ul>
        </>
    )
}

export default App
