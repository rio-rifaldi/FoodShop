import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        listBillBox :{
            margin :"1.5rem 1rem",
            display :"flex",
            flexDirection :"column",
            // width :"100%",
            gap :".7rem",
            [theme.breakpoints.up('sm')]:{
              margin :"1.5rem 1.7rem",
            }
          },
          listBill:{
            display:"flex",
            justifyContent :"space-between",
          },
          nameBillProduct:{
            fontSize :".8rem",
            color :theme.palette.neutrals.grey,
            fontFamily :"Poppins"
          },
          priceBillProduct :{
            fontSize :".8rem",
            color :theme.palette.neutrals.black,
            fontFamily :"Poppins",
            fontWeight:"500"
          },
          listBillTotal :{
            display :"flex",
            gap :"1rem",
            justifyContent :"space-between",
            backgroundColor:"#F4F5F6",
            borderRadius :".2rem",
            padding :".4rem"
          },
          total :{
            fontSize :".8rem",
            color :theme.palette.neutrals.grey,
            fontFamily:"Poppins",
          },
          priceTotal:{
            fontSize :".84rem",
            color :theme.palette.neutrals.black,
            fontWeight:"500",
            fontFamily:"Poppins",
          },
          summary :{
            fontFamily:"Alice",
            color :theme.palette.neutrals.black,
            fontSize:"1.3rem",
            margin :".2rem 1rem",
            [theme.breakpoints.up('sm')]:{
              margin :".2rem 1.7rem"
            }
          },
          price :{
            fontFamily:"Poppins",
            color :theme.palette.neutrals.black,
            fontSize:"1rem",
            margin :".2rem 1rem",
            marginTop:".7rem",
            [theme.breakpoints.up('sm')]:{
              margin :".2rem 1.7rem",
              marginTop:".7rem",
            }
          }
    }
})

export default useStyles