import { createGlobalStyle } from "styled-components";




export const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}

body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #26272b;
    color:  #f4f4f4;

 }

img{
    height:40px;
    margin-right: 8px;
    width: auto;

}

p{
    line-height:2;
  
    opacity: 0.7;
}

a{
    color:  #f4f4f4;
    text-decoration:none
}

h1{
    text-align:center;
    margin:1rem;
}

h3{
    margin-right:0rem;
}
`;
