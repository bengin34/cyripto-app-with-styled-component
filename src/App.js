import {  Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios"
import Header from "./components/Header";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import { GlobalStyles } from "./components/styled/Globalstyles";
import { ThemeProvider } from "styled-components";

const styles = {
  colors: {
    primary: "#444",
    secondary: "#666",
  },

 
}







const App = () => {
const [coins, setCoins] = useState([])

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

useEffect(() => {
  axios.get(BASE_URL).then((response)=>{
    setCoins(response.data)
    console.log(response.data)
  }).catch((error) => {
    console.log(error)
  })

  return () => {
   
  }
}, [])


  return (
    <ThemeProvider theme={styles}>
    <GlobalStyles/>
    <Header />
    <Routes>
      <Route path="/" element={   <Coins coins={coins} />} />
      <Route path="/coin" element={   <Coin />} > 
      <Route path=":coinId" element={   <Coin />} />
      </Route>
    </Routes>
  
    </ThemeProvider>
  )
};

export default App;
