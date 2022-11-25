import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette:{
        neutrals : {
            black : "#141416",
            grey : "#777E90",
            youngGrey : "#B1B5C3",
            veryYoungGrey : "#E6E8EC",
            darkBlue :"#23262F",
            white : "#ffffff",
        },
        // mode :"dark",
        background :{
            default : "#F9F9FF",

        },

        myColor : {
            green : "#04B90B",
            greenTrans : "#D3F9D5",
            redJambu : "#EA8484",
            redJambuTrans : "#FCF1F1",
            oldBlue : "#106AAB",
            oldBlueTrans : "#F1F7FC",
            darkBlue : "#3304B9",
            darkBlueTrans : "#F2EFFD",
            pink : "#F25178",
            pinkTrans : "#FCE5E9",
            purple : "#8D31E9",
            purpleTrans : "#F6EEFD",
            oldOrange : "#DA9F0A",
            oldOrangeTrans : "#FCF6D8",
            darkCyan : "#26ACA0",
            darkCyanTrans : "#EDFCFB",
        },
        secondary : {
            main : "#04B90B",
            light : "#D3F9D5",
            contrastText : "#ffffff"
        }
    },
    typography :{
        fontFamily : ["Alice", "serif", "Poppins", "sans-serif"].join(),
    },
    breakpoints :{
        values :{
            'xs' : 410,
            'sm' : 750,
            "md" : 900,
            "xsMenu" : 0,
            "smMenu" : 460,
            "mdMenu": 1020,
            "mobile" : 375,
            "smBlog" :500
        },
        
    },
    components :{
        MuiSelect :{
            styleOverrides :{
                outlined : {
                    "&.MuiOutlinedInput-root.Mui-focused":{
                        "&":{
                            border :"1.6px solid #04B90B",
                            backgroundColor : "greem"
                        }
                    }
            }
        },
    },
        MuiTextField :{
            styleOverrides:{
                root :{
                    "& .MuiOutlinedInput-root.Mui-focused":{
                        "&  fieldset":{
                            border :"1.6px solid #04B90B"
                        }
                    },
                    "& .MuiOutlinedInput-root:hover":{
                        "& > fieldset":{
                            border :"1.6px solid #04B90B"
                        }
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-input:not(:placeholder-shown):invalid":{
                        color :"#F25178",
                        "& ~ fieldset":{
                            border :`1.6px solid #F25178`
                        }
                    },
                    "& fieldset" :{
                        borderRadius : ".5rem"
                    },
        
                }
            }
        },
        MuiOutlinedInput:{
            styleOverrides:{
                input:{
                    "&::placeholder":{
                        fontFamily :"Poppins",
                        fontSize :".8rem",
                        color :"#777E90",
                    },

                    fontSize :".96rem",
           
                }
            }
        },
        MuiTab :{
            styleOverrides :{
                root :{
                    "&.Mui-selected" :{
                        backgroundColor :"#04B90B",
                        color :"white",
                        transition :"all .8s ease",
                        borderRadius :".4rem",
                    },
                },
         
            }
        }

    }

})
export default theme;