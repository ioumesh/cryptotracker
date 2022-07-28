import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Header from "./components/Header/Header";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
    color: "#ffffff",
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="coins">
              <Route path=":id" element={<Coin />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
