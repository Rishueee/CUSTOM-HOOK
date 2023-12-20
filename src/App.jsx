import React from 'react'
import Application from './LocalStorage'
const App = () => {
  const [data,setstore]=Application('Content')
  return (
    <div>
      <input type="text" value={data} onChange={(e)=>setstore(e.target.value)}/>
    </div>
  )
}

export default App