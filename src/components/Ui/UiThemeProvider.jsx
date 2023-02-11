import { useMemo, useState,createContext } from "react";
import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";

//----------color scheme-----------
const greenColor='#1ee1b3'
const lightColor="#f8f7f5"
const darkColor='#08080C'
const brownColor="#3A322F"
const darkBrownBg="#2A2320"
//theme context
export const ColorModeContext = createContext({mode:"",toggleColorMode:()=>{}});

// choose mode color helper
function chooseModeColorHelper(mode,ligthColor,darkColor){
    return mode==='light'?ligthColor:darkColor
}
// create custom theme
const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: { 
        main:chooseModeColorHelper(mode,lightColor,darkColor),
        contrastText:chooseModeColorHelper(mode,darkColor,"#ffff")
      },
      secondary:{
        main:greenColor,
        contrastText: darkColor,
      },
      textColor:chooseModeColorHelper(mode,darkColor,lightColor),
      darkColor,
      lightColor,
      themeBg:chooseModeColorHelper(mode,lightColor,darkColor),
      themeGreenBg:chooseModeColorHelper(mode,greenColor,"#fff"),
      themeBrownBg:chooseModeColorHelper(mode,brownColor,darkColor),
      themeDarkBrownBg:chooseModeColorHelper(mode,darkBrownBg,darkColor),
      cutTextColor:chooseModeColorHelper(mode,"#DBD9D9",darkColor)
    },
  });



const UiThemeProvider = ({children}) => {
    const [mode,setMode] = useState('light')
    const toggleColorMode=()=>{
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    };
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={{toggleColorMode,mode}} >
        <GlobalStyles
        styles={{
            body:{
                overflowX:"hidden !important",
                width:"100vw",
                background:mode==='light'?"#fff":darkColor,
                color:chooseModeColorHelper(mode,darkColor,"#fff")
            },
            
        }}
        />
        <ThemeProvider theme={theme} >
                {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default UiThemeProvider