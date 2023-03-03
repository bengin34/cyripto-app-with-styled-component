import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";
import Container from "./styled/Container.styled";
import Heading from "./styled/Heading.styled";
import {HideOnMobileH3} from "./styled/HideOnMobile.styled";

const Coins = ({ coins }) => {
  return (
    <>
      <Container>
        <Heading weight>
          <h3>Rank</h3>
          <h3>Coin</h3>
          <h3>Price</h3>
          <h3>24h</h3>
          <HideOnMobileH3>Volume</HideOnMobileH3>
          <HideOnMobileH3>Market Cap</HideOnMobileH3>
        </Heading>
      </Container>
      {coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`}>
            <CoinItem key={coins.id * Math.random()} coins={coins} />
          </Link>
        );
      })}
    </>
  );
};

export default Coins;
