import React, { ChangeEvent, useState } from 'react'

type Props = {}

const useOnSelectImage = () => {
    const [selectedImage, setSelectedImage] = useState<string[]>([])
    const [image, setImage] = useState<File[] >([])

    const onSelectFile =  (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !== null){
          let files = e.target.files
          setImage((prev) =>  [...prev,...files])
          
          for(let i = 0; i < files.length ; i++){
            const reader = new FileReader()
            reader.readAsDataURL(files[i])
            reader.onloadend = () => {
              if(reader.result){
                setSelectedImage((prev) => [...prev,reader.result as string] )
  
                }
              }
            }
         
        }
      
      }
    return {onSelectFile,selectedImage, setSelectedImage,image, setImage}
}

export default useOnSelectImage