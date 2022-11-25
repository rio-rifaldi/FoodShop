import * as createBreakpoints from '@mui/system/createTheme/createTheme'


interface breakpoints{
    xs? :number | string,
    sm? :number | string,
    md? :number | string,
    xsMenu? :number | string,
    smMenu? :number | string,
    mdMenu? :number | string,
    mobile? :number | string,
    smBlog? :number | string
}

declare module '@mui/system/createTheme/createBreakpoints'{
    interface BreakpointOverrides{
        lg: false;
        xs :true,
        sm :true,
        md :true,
        xl :false,
        xsMenu :true,
        smMenu :true,
        mdMenu :true,
        mobile :true,
        smBlog :true
    }
}

declare module '@mui/system/createTheme/createTheme'{
    interface Theme{
        appDrawer :{
            width: React.CSSProperties['width']
            breakpoint: createBreakpoints.BreakpointOverrides
        }
    }
    interface ThemeOptions {
        appDrawer?: {
          width?: React.CSSProperties['width'],
          breakpoint?: createBreakpoints.BreakpointOverrides
        }
      }

}


// declare module '@mui/system/createTheme/createBreakpoints'{
//     interface BreakpointsOptions{
//         values? :breakpoints,
//     }
//     interface Breakpoints{
//         value :breakpoints,
//     }
// }



