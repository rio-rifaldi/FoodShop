import { Outlet } from 'react-router-dom'
import Footer from 'Common/reusableComponent/Footer'
import Header from 'Common/reusableComponent/Header'



const AppWithNav = () => {

  return (
    <>
         < Header />
             < Outlet />
         < Footer />
    </>
  )
}

export default AppWithNav