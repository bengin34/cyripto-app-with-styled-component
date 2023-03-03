import styled from "styled-components";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    & > * {
      margin: 0;
    }
  }
`;

export default Info;
