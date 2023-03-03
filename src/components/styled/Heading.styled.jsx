import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center ;
  background-color: #26272b;
  box-shadow: 0 0 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
 font-weight: ${({weight}) => (weight || 700 )} ;
 &:hover  {
    transform: scale(1.04);
    transition: .3s ease-in-out;
    cursor: pointer;
  }

`;

export default Heading;
