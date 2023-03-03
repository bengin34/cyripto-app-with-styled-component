import styled from "styled-components";


const Content = styled.div`
  max-width: ${ ({header}) => (header || "600px")} ;
  margin: 1rem auto;
  padding: .7rem 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  background-color:#26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
   max-width: 360px;
  }
`;

export default Content