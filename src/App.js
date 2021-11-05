import React from 'react'
import "./app.css"
import FormInput from './component/Form Inputs/Input'

const App = () => {
  return (
    <div className="App">
     <form>
       <FormInput placeholder="Username"/>
       <FormInput placeholder="Email"/>
       <FormInput placeholder="Full Name"/>
       <FormInput placeholder="Address"/>
       <button>Submit</button>
     </form>
    </div>
  )
}

export default App

