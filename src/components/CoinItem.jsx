import React from "react";
import Flex from "./styled/Flex.styled";
import {HideOnMobile} from "./styled/HideOnMobile.styled";
import Heading from "./styled/Heading.styled";


const CoinItem = ({ coins }) => {
  return (
    <Heading weight="100">
      <p>{coins.market_cap_rank}</p>
      <p>
      <Flex><img
          style={{ maxWidp: "30px", minHeight: "30px" }}
          src={coins.image}
          alt=""
        />
        <p>{coins.symbol.toUpperCase()}</p></Flex>
        
      </p>
      <p >${coins.current_price.toLocaleString()}</p>
      <p >
        {coins.price_change_percentage_24h.toFixed(2)}
      </p>
      <HideOnMobile >
        ${coins.total_volume.toLocaleString()}
      </HideOnMobile>
      <HideOnMobile >
        ${coins.market_cap.toLocaleString()}
      </HideOnMobile>
    </Heading>
  );
};

export default CoinItem;
