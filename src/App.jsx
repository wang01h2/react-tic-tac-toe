import './App.css'
import Button from "./components/Button.jsx";
import {Check} from "./components/Check.jsx";


const products = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3},
]

const listItem = products.map(product => {
  return <li key={product.id} style={{color: product.isFruit ? 'green' : 'blue'}}>
    {product.title}</li>
})

function App() {
  return (
    <>
      {/*<h1 className="text-5xl">Hello 👋</h1>*/}
      <Check></Check>
      <Button className={'awesome-button'} type="" onClick={() => console.log('click done.')}>I'm a button</Button>
      <Button className={'test'} type="" onClick={() => console.log('click done.')}>
        <div>小老弟怎么肥事？</div>
      </Button>
      <Button className={'awesome-button'} type="danger" onClick={() => console.log('click done.')}>I'm danger</Button>
      <Button className={'awesome-button'} type="warning" onClick={() => console.log('click done.')}>I'm
        warning</Button>
      <ul className={'hello-react'}>{listItem}</ul>
    </>
  )
}

export default App
