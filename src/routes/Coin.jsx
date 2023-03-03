import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "../components/styled/Container.styled";
import Nav from "../components/styled/Nav.styled";
import { GlobalStyles } from "../components/styled/Globalstyles";
import Heading from "../components/styled/Heading.styled";
import Flex from "../components/styled/Flex.styled";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const URL = `https://api.coingecko.com/api/v3/coins/${params.coinId} `;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setCoin(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Heading>
          <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 ">
            {coin.name}
          </h5>
        </Heading>
        <Heading>
          <Flex className="font-normal text-gray-700 dark:text-gray-400">
            Rank # {coin.market_cap_rank}
          </Flex>
          {coin.image ? <img src={coin.image.small} alt="" /> : null}

          <p>{coin.name}</p>
          <p>{coin.symbol}</p>
          {coin.market_data?.current_price ? <h1>{coin.market_data.current_price.usd}  </h1> : null}

        </Heading>
        <table className="table">
          <thead>
            <tr>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}</p>  : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_24h_in_currency ?<p>{coin.market_data.price_change_percentage_24h_in_currency.usd}</p>  : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_7d_in_currency ?<p>{coin.market_data.price_change_percentage_7d_in_currency.usd}</p>  : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd} </p>: null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}</p>  : null}
              </td>
              <td>
                {coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}</p>  : null}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h? <p> {coin.market_data.low_24h.usd}</p> : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h? <p>{coin.market_data.high_24h.usd} </p>: null}
              </div>
            </div>
            <div className="left"></div>
            <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? <p>{coin.market_data.market_cap.usd} </p>: null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
              {coin.market_data? <p>{coin.market_data .circulating_supply} </p>: null} 
               
              </div>
              
          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>About</h3>
            {coin.description? <p>{coin.description.en}</p> : null}
            
          </div>
        </div>

      </Container>
    </>
  );
};

export default Coin;
