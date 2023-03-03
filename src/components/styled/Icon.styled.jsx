import styled from 'styled-components';

const Icon = styled.div`
font-size: ${({ rank }) => (rank ? "2rem" : "3rem")};
color: ${({ rank }) => (rank || "red")};
`;

export default Icon;
