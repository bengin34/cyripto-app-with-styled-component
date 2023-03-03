import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalStyles } from "../components/styled/Globalstyles";
import Heading from "../components/styled/Heading.styled";
import Icon from "../components/styled/Icon.styled";
import Info from "../components/styled/Info.styled";
import Flex from "../components/styled/Flex.styled";
import DOMPurify from "dompurify";
import Content from "../components/styled/Content.styled";
import Grid from "../components/styled/Grid.styled";
import Stats from "../components/styled/Stats.styled";
import TableWrapper from "../components/styled/TableWrapper.styled";

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
      <Content header={"1000px"}>
        <Flex center={"space-around"}>
          <h1>{coin.name}</h1>
        </Flex>

        <Content>
          <Icon rank={"purple"}>Rank # {coin.market_cap_rank}</Icon>

          <Info>
            <Flex space>
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>{" "}
            </Flex>

            {coin.market_data?.current_price ? (
              <h1>Current Price: ${coin.market_data.current_price.usd} </h1>
            ) : null}
          </Info>
        </Content>

        <Content>
          <TableWrapper>
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
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1h_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_24h_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_7d_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_14d_in_currency
                          .usd.toFixed(1)
                      }%{" "}
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_30d_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {
                        coin.market_data.price_change_percentage_1y_in_currency
                          .usd.toFixed(1)
                      }%
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </TableWrapper>
        </Content>

        <Content>
          <Grid>
            {" "}
            <h4>24 Hour Low</h4>
            {coin.market_data?.low_24h ? (
              <p> ${coin.market_data.low_24h.usd.toLocaleString()}</p>
            ) : null}
          </Grid>

          <Grid>
            {" "}
            <h4>24 Hour High</h4>
            {coin.market_data?.high_24h ? (
              <p>${coin.market_data.high_24h.usd.toLocaleString()} </p>
            ) : null}
          </Grid>

          <Grid>
            {" "}
            <h4>Market Cap</h4>
            {coin.market_data?.market_cap ? (
              <p>${coin.market_data.market_cap.usd.toLocaleString()} </p>
            ) : null}
          </Grid>

          <Grid>
            {" "}
            <h4>Circulating Supply</h4>
            {coin.market_data ? (
              <p>${coin.market_data.circulating_supply.toLocaleString()} </p>
            ) : null}
          </Grid>
        </Content>

        <Content>
          <h3>About</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : null
              ),
            }}
          ></p>
        </Content>
      </Content>
    </>
  );
};

export default Coin;
