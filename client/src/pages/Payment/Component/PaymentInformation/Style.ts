import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
      name : {
        fontSize:"1.1rem",
        fontWeight:"bold",
        textTransform:"capitalize"
      },
      address:{
        fontSize:".85rem",
      },
      paymentMethod :{
        fontSize :".86rem",
        margin:".5rem 0",
      },
      paymentIcon:{
        width:"2.5rem",
        marginLeft:".5rem",
        verticalAlign:"middle"
      },
      kurir:{
        width:"9rem",
        transform:"scaleX(-1)"
      },
      boxMainAddress:{
        [theme.breakpoints.up(600)]:{
          display:"flex",
        }
      },
      boxAddress:{
        [theme.breakpoints.up(600)]:{
          flexGrow:2
        }
      }
    }
  })
  export default useStyles