import { Box } from '@mui/material'
import useFetchProductCart from 'pages/Payment/Utils/Hooks/useFetchProductCart'
import { makeStyles } from 'tss-react/mui'
import ProductInfoCard from '../ProductInfoCard'

type Props = {
    isAccepted?: boolean
}
const useStyles = makeStyles()((theme) => {
    return{
        mainContainer:{
            display:"grid",
            gap:".5rem",
            margin:"3rem .53em ",
            [theme.breakpoints.up(630)]:{
                gridTemplateColumns :"repeat(2,1fr)"
            },
            [theme.breakpoints.up(940)]:{
                gridTemplateColumns :"repeat(3,1fr)"
            }
        }
    }
})

const ProductList = ({isAccepted}: Props) => {
        const {data,loading} = useFetchProductCart()
        const products = data?.GetProductInCart
        const {classes} = useStyles()
  return (
    <Box className={classes.mainContainer}> 
            {
                products?.map((product) =>{
                    return(
                        < ProductInfoCard image={product.product.image[0].url} price={product.product.price} productCount={product.amount} productName={product.product.name} id={product.productId} key={product.productId} isAccepted={isAccepted} /> 
                    )
                } )
            }
     </Box>
  )
}

export default ProductList