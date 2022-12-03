import { makeStyles } from "tss-react/mui"
import arrow from 'assets/images/svg/Arrow 2.svg'

const useStyles = makeStyles() ((theme) =>{
    return{
        container:{
            display:"flex",justifyContent:"space-between",mt:1,alignItems:"center"
        },
        arrow :{
                "&::after" : {
                content : `url('${arrow}')`,
                display :"inline-block",
                fontSize : "clamp(0.07rem, 0.0596rem + 0.0462vw, 0.1rem)",
                verticalAlign :"middle",
                margin :"0 .5rem"
            },
            color :"myColor.green",
            fontSize :"clamp(0.7rem, 0.6481rem + 0.2308vw, 0.85rem)"
    
        }
    }
})

export let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight:false,
    variableWidth:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3   
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };



export default useStyles