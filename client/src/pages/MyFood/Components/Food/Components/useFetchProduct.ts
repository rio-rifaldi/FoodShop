import { useLazyQuery } from '@apollo/client'
import { ListProduct } from 'pages/MyFood/Utils/Graphql'
import { listProductI } from 'pages/MyFood/Utils/Interfaces'
import React, { useCallback, useEffect } from 'react'


function useFetchProduct() {

    const [List,{data,loading}] = useLazyQuery<listProductI>(ListProduct,{
        initialFetchPolicy : "cache-and-network"
      })
    
      const fetch = useCallback(async () => {
        await List()
      },[loading])
      
      useEffect(() => {
          fetch()
    
      }, [])
  return {List,data,loading,fetch}
}

export default useFetchProduct