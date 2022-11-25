import { gql, useQuery } from '@apollo/client'
import { StateValueContext } from 'Common/ContextApi'
import { useContext, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import RouteSetUp from 'SetUp/Route/RouteSetUp'
type Props = {}

const query = gql`
     query hello{
      Hello
    }
`

function App({}: Props) {
  const {dispatch} = useContext(StateValueContext)
  const {data,loading,called} = useQuery(query,{
    pollInterval : 180000
  })
  useEffect(() => {
    if(data){
      console.count("render")
      dispatch({type:"IS_LOGINED",payload:true})
    }
 
  
  }, [loading])
 
  return (
    <RecoilRoot>
    
      < RouteSetUp />
    </RecoilRoot>
  )
}

export default App