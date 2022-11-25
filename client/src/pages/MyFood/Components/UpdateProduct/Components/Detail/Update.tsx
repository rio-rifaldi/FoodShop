import { useMutation } from "@apollo/client"
import { UpdateProduct } from "pages/MyFood/Utils/Graphql"
import { FormUpdateI, ProductI } from "pages/MyFood/Utils/Interfaces"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import useFoodTaste from "./SetTaste"


 const UpdateData = () => {
    const {register,watch,reset,handleSubmit} = useForm<FormUpdateI>()
    // const [taste, setTaste] = useState<string[] >([])
    const [Update] = useMutation(UpdateProduct)
    const navigate = useNavigate()
    const {productId} = useParams()
    const {setTaste,taste} = useFoodTaste()

    // useEffect(() => {
    //   if(!loading){
    //      setTaste(data?.Product.taste as string[])
    //   }
    // }, [loading])
    const onClickTaste = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> ) =>{
        const Watch = String(watch('taste'));
        console.log(Watch)
        if(Watch !== ''){
          setTaste((prev) => [...prev ,Watch] );
          reset({taste: []})
        }
      } 
  
      const onKeyDownTaste = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{
        if(e.key !== "Enter") return
        let value = (e.target as HTMLInputElement).value 
        if(value !== ''){
          setTaste((prev) => [...prev ,value] );
          reset({taste: []})
        }
      }
      const onUpdate = handleSubmit((product,e) =>{
        e?.preventDefault()
        const productInput ={
           name : product.name,
           price : Number(product.price),
           stock : Number(product.stock),
           expired : product.expired,
           description : product.description,
           taste : taste
        }
        Update({variables:{productId,productInput  }})
           .then((result) =>{
              if(result.data){
                //  refetch()
                 navigate('/myFood')
              }  
           } )
      } )
      console.log(taste,"dari Update")
      return {register,onClickTaste,onKeyDownTaste,onUpdate,setTaste,taste}
}
export default UpdateData