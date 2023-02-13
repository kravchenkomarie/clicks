import {useState} from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

const texts = [
  "Нажми на меня", "Нет, на меня", "На меня, пожалуйста"
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const resetTotal = () => {
    setCount(0)
  }

  return <div className="App">
    <Counter count={count} />
    {texts.map((text, index) => {
      return <Button onClick={incrementCount} text={text} key={index} />
    })}
    <Button onClick={resetTotal} text='Сброс' />
  </div>
}

export default App