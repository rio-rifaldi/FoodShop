import React, { useEffect, useState } from 'react'

type Props = {}

const useOnPoint = (ref : React.RefObject<HTMLDivElement>) => {
    const [isPoint, setIsPoint] = useState(false)

    useEffect(() => {
        if(isPoint){
          if (ref.current){
              ref.current.style.transform = "scale(.98) "
              ref.current.style.transition = "transform .3s ease-in-out"
  
          }
          }else{
              if (ref.current){
                  ref.current.style.transform = "scale(1) "
                  ref.current.style.transition = "transform .3s ease-in-out" 
              }
          }   
      }, [isPoint])
  return {isPoint,setIsPoint}
}

export default useOnPoint