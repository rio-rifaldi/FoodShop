import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
       mainText :{
          fontSize :"clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)", fontFamily:"Alice",textAlign:"center",color:"#23262F",maxWidth:"24rem",margin :"0 1rem",textTransform:"capitalize",wordSpacing :".2rem",
          [theme.breakpoints.up('smBlog')]:{
             margin :"0 auto"
          }
       },
       markText :{
          fontSize :"clamp(2rem, 1.8171rem + 0.7805vw, 2.5rem)", fontFamily:"Alice",color: theme.palette.myColor.green,backgroundColor:'transparent'
       },
       cardContainer:{
          flexDirection :"row",
          justifyContent :"center",
          flexWrap :"wrap",
          alignItems :"center",
          gap:"5rem",
          [theme.breakpoints.up('md')]:{
             transform :"scale(.9)"
          }
       },
       card :{
          maxWidth :"19rem",textAlign:"center",
          transform:"scale(.9)",
          [theme.breakpoints.up('smBlog')]:{
             transform :"unset"
          }
       },
       cardShadow :{
          maxWidth :"21rem",textAlign:"center",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",padding:"2.3rem .8rem",borderRadius:".5rem",
          transform:"scale(.9)",
          [theme.breakpoints.up('smBlog')]:{
             transform :"unset"
          }
       },
       image:{
          borderRadius:"10rem", width:"5rem",height:"5rem",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",display:"flex",justifyContent:"center",alignItems:"center",margin :"0 auto"
       },
       cardHeader:{
          fontFamily:"Alice", color :"#23262F",fontSize:"1.4rem"
       },
       cardPara:{
          fontFamily:"Poppins",color :"myColor.grey",fontSize:".93rem"
       }
    }  
 
 })

 export default useStyles