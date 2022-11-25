import * as createPalette from '@mui/material/styles/createPalette'

interface INeutrals{
    black?:string,
    grey?:string,
    youngGrey?:string,
    veryYoungGrey?:string,
    darkBlue?:string,
    white?:string,
}
interface IMyColor{
        green?:string,
        greenTrans?:string,
        redJambu?:string,
        redJambuTrans?:string,
        oldBlue?:string,
        oldBlueTrans?:string,
        darkBlue?:string,
        darkBlueTrans?:string,
        pink?:string,
        pinkTrans?:string,
        purple?:string,
        purpleTrans?:string,
        oldOrange?:string,
        oldOrangeTrans?:string,
        darkCyan?:string,
        darkCyanTrans?:string,

}


declare module '@mui/material/styles/createPalette'{

    interface PaletteOptions{
        neutrals? : INeutrals,
        myColor? : IMyColor
    }

    interface Palette{
        neutrals : INeutrals,
        myColor: IMyColor 
    }

} 