import React from 'react'
import Pass from './Pass'
import { Button } from './components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='flex h-screen flex-col items-center justify-center'>

              <Link to="/gpa"><Button variant="outline" className={'mb-4'}>GPA Calculator</Button></Link>
              <Link to="/pass"><Button variant="outline">Pass Marks Calculator</Button></Link>
    </div>
    </>
  )
}

export default Home