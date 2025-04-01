import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import {CssBaseLine, ThemeProvider} from "@mui/material";
import Topbar from './global/Topbar';
function App() {
  const [count, setCount] = useState(0)

  const [theme, colorMode]= useMode();
  

 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseLine/>
        <div className="app">
          
            <main className="content">
<Topbar/>

          </main>
            </div>

      </ThemeProvider>
    
      
    </ColorModeContext.Provider>
  )
}

export default App
