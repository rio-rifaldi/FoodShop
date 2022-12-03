import { ApolloQueryResult, OperationVariables, useMutation } from "@apollo/client"
import { AddImageProduct } from "pages/MyFood/Utils/Graphql"
import { ProductI } from "pages/MyFood/Utils/Interfaces"
import { useParams } from "react-router-dom"

interface Props{
    refetch : (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<ProductI>>
}
const AddImage = ({refetch} :Props) => {
    const {productId} = useParams()
    const [AddImage,{loading}] = useMutation(AddImageProduct)
  
    const onAddImage = async (e:React.ChangeEvent<HTMLInputElement>) => {
       const file = e.target.files![0]
       const result = await AddImage({
          variables : {
             productId,file
          }
       })
       
       if(result.data){
          refetch()
       }
     }
     return {onAddImage,loading}
}

export default AddImage