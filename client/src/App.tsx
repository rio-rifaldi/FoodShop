import { gql, useQuery } from '@apollo/client'
import { StateValueContext } from 'Common/ContextApi'
import { userI } from 'pages/ProfileCreator/Utils/Interfaces'
import { useContext, useEffect } from 'react'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import RouteSetUp from 'SetUp/Route/RouteSetUp'
import { isLogined, shopCart } from 'SetUp/StateManagement/Store'
type Props = {}

const query = gql`
  query getUser{
    getUser {
        product {
          _id
          name
        }
        shopCart {
          amount
        }
      }
}

`

function App({}: Props) {
  const {data,loading,called} = useQuery<userI>(query,{
    pollInterval : 180000
  })
  const amount = data?.getUser && data?.getUser.shopCart.map((el) => el.amount )
  const cartCount = amount && amount.reduce((acc,curr) => acc + curr ,0)
  console.log(cartCount)
  const setLogin = useSetRecoilState(isLogined)
  const setCart = useSetRecoilState(shopCart)

  useEffect(() => {
    if(data){
      console.count("render")
      setLogin(true )
      setCart(cartCount as number)
      console.log('render if')
    }
    console.log('render useEffect ')

  
  }, [cartCount])
 
  return (

    
      < RouteSetUp />

  )
}

export default App