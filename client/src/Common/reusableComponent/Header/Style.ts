import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles() ((theme) =>{
    return{
        list : {
            color : "#777E90",
            fontFamily : "Poppins",
            display:'flex',
            gap : '2.3rem',
            alignItems : 'center',
           
            },
            logo :{
              width :"5rem",
              cursor :"pointer",
              margin :".5rem"
            },
            toolbar :{
              display:'flex',justifyContent : "space-between",alignItems :"center"
            },
            listItem :{
              fontSize :".9rem",
              color :theme.palette.neutrals.grey,
              "&:hover" : {color : "#04B90B",cursor :"pointer"},
              textDecoration : "none"
            },
            badge:{
              "& .MuiBadge-badge":{
                border : `2px solid ${theme.palette.background.paper}`,
                padding:"0 4px",
                fontWeight:"bolder"
              }
            },
            styleLink :{
              textDecoration : "none",
              color:"black "  
            }
    }

})
export default useStyles