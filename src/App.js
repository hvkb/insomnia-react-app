import "./App.css";
import MainPage from "./components/MainPage";
import { MusicInfoProvider } from "./Contexts/MusicInfoContext";
import { BrowserRouter, 
   Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails/CardDetails.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "black",
    },
    primary: {
      main: "#D093C3",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,
  },
  props: {
    MuiIcon: {
      color: '#aa0011',
    }
  },
  components: {
    MuiIcon:{
      styleOverrides: {
        root: {
          primary: "#fff",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "none",
          outline: "none",
          borderRadius: "100px",
          textTransform: "lowercase",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
  },
});
function App() {
  return (
   
    <ThemeProvider theme={theme}>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MusicInfoProvider>
        <Routes>

            <Route path="/" exact element={<MainPage/>}/>
              
            <Route path="/openCard/:id" exact element={<CardDetails/>} />

        </Routes>
        </MusicInfoProvider>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
