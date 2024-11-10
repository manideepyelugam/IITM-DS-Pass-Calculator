import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Gpa from "./Gpa"
import Passed from "./Passed"

function App() {
  

  return (
    <div className="bg-black h-screen flex items-center flex-col justify-center">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pass" element={<Passed/>}/>
          <Route path="/gpa" element={<Gpa/>}/>
      </Routes>
    </div>
  )
}

export default App
