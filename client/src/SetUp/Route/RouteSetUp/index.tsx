import { CircularProgress } from '@mui/material'
import Footer from 'Common/reusableComponent/Footer'
import Header from 'Common/reusableComponent/Header'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import("pages/Home"))
const Menu = lazy(() => import("pages/Menu"))
const Blog = lazy(() => import("pages/Blog"))
const BlogDetail = lazy(() => import("pages/BlogDetail"))
const FoodDetail = lazy(() => import("pages/FoodDetail"))
const FoodDetailCreator = lazy(() => import("pages/MyFood/Components/FoodDetailCreator"))
const Contact = lazy(() => import("pages/Contact"))
const CheckOut = lazy(() => import("pages/CheckOut"))
const Payment = lazy(() => import("pages/Payment"))
const Login = lazy(() => import("pages/Login"))
const SignIn = lazy(() => import('pages/SignIn'))
const ForgotPassword = lazy(() => import('pages/ForgotPassword'))
const AppWithNav = lazy(() => import("../Components/AppWithNav"))
const AppwithOutNav = lazy(() => import("../Components/AppwithOutNav"))
const ProfileCreator = lazy(() => import("pages/ProfileCreator"))
const UpdateProduct = lazy(() => import("pages/MyFood/Components/UpdateProduct"))
const AddProduct = lazy(() => import("pages/AddProduct"))
const Productfood = lazy(() => import("pages/MyFood"))
const Message = lazy(() => import("pages/Message/index"))


function RouteSetUp() {

    return (
        <Router>  
            < Header />
          <Suspense fallback={< CircularProgress sx={{mx:"20rem auto"}} />}>  
              <Routes>
                {/* <Route element={< AppWithNav />}>  */}
                      < Route path='*' element={< Navigate to='home' replace />} />
                      < Route path='/home' element={< Home />} />  
                      < Route path='/menu' element={< Menu />} />
                      {/* < Route path="/menu/detail" element={<FoodDetail/>} />   */}
                      < Route path='/blog' element={< Blog />} />
                      < Route path='/blog/detail' element={< BlogDetail />}/>
                      < Route path='/contact' element={< Contact />} />
                      < Route path='/checkOut' element={< CheckOut />} />
                      < Route path='/payment' element={< Payment />} />  
                      < Route path='/profile' element={< ProfileCreator />} />  
                      < Route path='myfood/AddProduct' element={< AddProduct />} />
                      < Route path='myFood' element={< Productfood />}/>
                      < Route path='myFood/detail/:productId' element={<FoodDetailCreator/>}/>
                      < Route path='myFood/update/:productId' element={<UpdateProduct/>}/>
                      < Route path='/menu/:productId' element={<FoodDetail  />}/>
                   {/* </Route> */}
                  {/* <Route element={< AppwithOutNav />}>  */}
                         < Route path='profile/message' element={<Message/>}/>
                          < Route path='/login' element={< Login />} />
                          <Route path='/register' element={< SignIn  />}/>
                          <Route path='/forgot' element={< ForgotPassword />}/>    
                  {/* </Route>   */}
              </Routes>
              < Footer />
           </Suspense>  
        </Router>
      
      );

}

export default RouteSetUp;
