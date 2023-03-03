import styled from "styled-components";

 export const HideOnMobile = styled.p`
  line-height:2;
    opacity: 0.7;
    
  @media (max-width: 768px) {
    display: none;
  }
`;


export const HideOnMobileH3 = styled.h3`
@media (max-width: 768px) {
  display: none;
}
`;
