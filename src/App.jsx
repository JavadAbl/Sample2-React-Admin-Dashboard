import { CssBaseline } from "@mui/material";
import { CustomThemeProvider } from "./Context/ThemeContext";
import Index from "./Views/Index/Index";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <CssBaseline />
        <Index />
      </CustomThemeProvider>
    </>
  );
}

export default App;
