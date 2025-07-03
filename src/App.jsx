import Header from './components/Header.jsx'
import { IconA } from './components/icon.jsx'
import Image from './components/Image.jsx'
import Checkbox from './components/Checkbox.jsx'

function App() {

  const todoList = [
    {
      text: 'coding react' , 
      isChecked: false
    } , 
    {
      text: 'doing document react' , 
      isChecked: true
    } ,
    {
      text: 'test react' ,
      isChecked: false
    }
  ]

  

  return (
    <>
      <Header />
      {
        todoList.map((todo , index) => {
          return (
            <Checkbox
              key={index}
              text={todo.text}
              isChecked={todo.isChecked}
            />
          )
        })
      }
      <div>
        Hello World!
      </div>
      <IconA />
      <Image imageUrl='https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
    </>
  )
}

export default App
