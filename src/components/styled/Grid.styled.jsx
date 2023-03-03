import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  justify-content:space-between;
  text-align:center;
  grid-gap: 1.2rem;
  margin-top:10px;
  border-bottom: 3px solid #808080;
`;

export default Grid;
