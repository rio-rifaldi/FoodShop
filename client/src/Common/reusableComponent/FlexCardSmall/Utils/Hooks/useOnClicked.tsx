import React, { useEffect, useState } from 'react'

type Props = {}

const useOnClicked = (ref : React.RefObject<HTMLDivElement>) => {
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        if(isClicked){
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
      }, [isClicked])
  return {isClicked,setIsClicked}
}

export default useOnClicked