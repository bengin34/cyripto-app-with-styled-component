import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ center }) => center || " center"};
  align-items: center;
  p {
    margin-left: 1rem;
    text-transform: uppercase;
  }
`;

export default Flex;
