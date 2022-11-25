import { makeStyles } from "tss-react/mui"
import greenFire from 'assets/images/svg/ant-design_fire-filled.svg'

const useStyles = makeStyles() ((theme) =>{
    return{
        mainContainer :{
            margin :"1rem 1.6rem",
          // maxWidth :"45rem",
          width : "85%",
          [theme.breakpoints.up('sm')]:{
            margin :"1rem auto",
          },
          [theme.breakpoints.up('md')]:{
            margin :"1rem 1.6rem",
          }
        },
        greenFire :{
            color : theme.palette.myColor.green, fontWeight : "600", border : "1.7px solid #04B90B",width : "max-content",paddingRight : "6px",borderRadius : ".3rem",
                  "&::before" :{
                    content : `url(${greenFire})`,
                    display : "inline-block",
                    margin : "0 3px",
                    transform : "translateY(4px)",
                  },
                fontSize : "1rem",fontFamily : "Poppins",transform:"scale(.9) translateX(-.2rem)"
        },
        headerAndFire :{
            display:"flex",
            flexDirection :"column",
            [theme.breakpoints.up('sm')]:{
              flexDirection :"row",
              gap :"1rem",
              alignItems :"center"
            }

        },
        price :{
            fontFamily :"Alice",
            color :theme.palette.myColor.green,
            fontSize :"2rem",
            margin :".3rem 0",
            fontWeight:"500"
        },
        link:{
          textDecoration:"none",
          color:theme.palette.neutrals.grey,
          fontSize :".95rem",
          ":hover" :{
            color :theme.palette.myColor.green,
          }
        },
        subTitle:{
          color : theme.palette.neutrals.black,
          fontFamily :"Poppins",
          margin:"1rem 0 .4rem 0",
          textTransform:"capitalize"
        },
        paragraf:{
          color : theme.palette.neutrals.grey,
          fontFamily :"Poppins",
          margin:".2rem 0",
          textAlign:"justify"
        },
        grid :{
          color : theme.palette.neutrals.grey,
          fontFamily :"Poppins",
          listStyleType :"disc",
          "& .MuiListItem-root":{
            display :"list-item",
            padding :0,
            fontSize :".85rem",
            "::marker":{
              fontSize :".7rem"
            }
          }
        },
  
    }
})

export default useStyles