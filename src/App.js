import { GlobalStyle } from "./styles";
import Home from "./Components/Home";
import Itemslist from "./Components/Itemslist";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "brown", // main font color
  backgroundColor: "white", // main background color
  pet: "black",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Itemslist />
    </ThemeProvider>
  );
}

export default App;
