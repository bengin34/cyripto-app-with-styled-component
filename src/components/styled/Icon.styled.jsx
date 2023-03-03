import styled from 'styled-components';

const Icon = styled.div`
font-size: 3rem;
color: ${({ rank }) => (rank || "red")};
`;

export default Icon;
