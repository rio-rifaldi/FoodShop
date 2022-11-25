import {makeStyles} from 'tss-react/mui'

const useStyles = makeStyles() ((theme) =>{
    return {
        container :{
          height :"45rem",overflow :"hidden",
          [theme.breakpoints.up('sm')]:{
            height :"65rem"
          },
          [theme.breakpoints.up('md')]:{
            height : "40rem"
          }
        },
    
          active :{color : "#04B90B"},
          typographyHeader :{
            fontFamily : 'Alice',fontSize : "2rem",color : "#23262F",lineHeight :"3.5rem",textAlign:"center",marginTop:"3rem",
            [theme.breakpoints.up('md')]:{
              textAlign : "left",
              fontSize : "2.7rem"
            }
          },
          typographyPara :{
            fontFamily : "Poppins",color : "#777E90",margin :"1rem auto",textAlign:"center",fontSize :"1rem",
            [theme.breakpoints.up('md')]:{
              textAlign : "left",
              fontSize : "1rem"
            }
          },
          buttonStack :{
            [theme.breakpoints.up('sm')]:{
              margin :"1.5rem 0"
            },
            [theme.breakpoints.up('md')]:{
              width : "100% ",
              gap : "2rem"
            }
          },
          textBox :{
            maxWidth :"25rem",
            margin :"0 auto",
            display:'flex',
            justifyContent : "center",
            alignItems :"center",
            flexDirection :"column",
            padding : "0 1.5rem",
            [theme.breakpoints.up('md')]:{
              margin :" 0 1rem",
              maxWidth :"35rem",
              alignItems :"flex-start"
              // width : "80%"
            }
          },
          bgImage :{
            transform : "translate(-50%,25.5vh)",position : 'relative',zIndex : -1,left :"50%",
            width : "clamp(40rem, 7.2727rem + 145.4545vw, 80rem)",display:'block',
            [theme.breakpoints.up('sm')]:{
            transform : "translate(-50%,39.5vh)"
            },
        
 
          },
          foodImage : {width : "13.5rem",transform:"translateY(6rem)",
          [theme.breakpoints.up('sm')]:{
            transform:"translateY(7.5rem)",
            width :"18rem"
          },
          [theme.breakpoints.up('md')]:{
            width :"22.5rem"
          }
        },
          sugarImage : {width :"3.5rem",
          [theme.breakpoints.up('sm')]:{
            width :"5rem"
          },
          [theme.breakpoints.up('md')]:{
            transform : "translateY(-2rem)"
          }
    
        },
          sumpitImage :{width:"10rem",
          transform:"translate(5rem,4rem)",
          [theme.breakpoints.up('sm')]:{
            width :"13rem"
          },
          [theme.breakpoints.up('md')]:{
            transform:"translate(10rem,3rem) rotate(40deg)",
            width : "15rem" 
          }
        },
          boxImage :{
            position :"relative",
            zIndex : -1,
            [theme.breakpoints.up('sm')]:{
              transform:"translateY(-6rem)"
            },
            [theme.breakpoints.up('md')]:{
              top : "-28rem",
              right :"-49rem",

            }
          },
          BoxImageFood :{
            display:'flex',
            flexDirection :"column",
            justifyContent:"center",
            alignItems :"center",
            width : "80%",
            position:"absolute",
            right :"50%",
            transform : "translate(50%)",
            

            [theme.breakpoints.up('sm')]:{
              transform : "translate(50%,10rem)"
            },
            [theme.breakpoints.up('md')]:{
              transform : "translate(11%,7rem)"
            }
          },
          boxImageFoodNested:{
            display :'flex',
            justifyContent : "space-between",
            alignItems :"flex-end",
            width : "100%",
            [theme.breakpoints.up('sm')]:{
              justifyContent :"space-around",
            },
            [theme.breakpoints.up('md')]:{
              flexDirection :"row-reverse",
              transform :" rotate(-40deg)"
            }

          },
          rateStack : {
            backgroundColor : "#F4F5F6",textAlign : "center",padding : '1rem 2.4rem',width : "max-content",borderRadius : ".3rem",
            [theme.breakpoints.up('sm')]:{
              transform: "scale(.9)"
            },
            [theme.breakpoints.up('md')]:{
              margin : "3rem 0 0 -1rem"
 
            }
          },
          typographyRateHead :{
            fontFamily : "Poppins",fontWeight : 700, color : "neutrals.grey",fontSize: "1.2rem"
          },
          typographyRatePara : {
            fontFamily : "Poppins",fontWeight : 400, color : "neutrals.grey",fontSize: ".9rem"
          }


    }
})

export default useStyles