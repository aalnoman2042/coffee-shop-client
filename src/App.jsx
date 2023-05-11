
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffeecard from './components/Coffeecard'
import { useState } from 'react'

function App() {
  const loadedCoffes = useLoaderData()

  const [ coffees , setCoffees] = useState(loadedCoffes)

  return (
    <>
    
     <div className='m-20'>
     <h1 className='my-20 text-6xl text-center text-purple-600'>hot hot col coffee:{coffees.length}</h1>
     <div className='grid gap-4 md:grid-cols-2'>
     {
        coffees.map(coffee => <Coffeecard 
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></Coffeecard>)
      }
     </div>
     </div>
    </>
  )
}

export default App
