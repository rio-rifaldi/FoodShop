import { useMutation } from "@apollo/client";
import { Delete } from "@mui/icons-material";
import { deleteMutation, ListProduct } from "pages/MyFood/Utils/Graphql";

type Props = {
    id : string | undefined,
    onClose : () => void
}
const DeleteProduct = ({id,onClose}:Props) => {
    const [Delete,{loading}]  = useMutation(deleteMutation)
    
    const deleteProduct = () => {
        Delete({variables : {productId : id}
       ,refetchQueries:[
         {query : ListProduct},
         "ListProduct"
       ]
       }).then((result) =>{
         if (result.data) {
             console.log(result.data);
                onClose()
           }
         } )
    }
     return {loading,deleteProduct}
   
 }

 export default DeleteProduct