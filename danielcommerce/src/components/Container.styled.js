import styled, { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
// what is ThemeProvider css?
const GlobalProductStyle = createGlobalStyle`
 body{
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #e6ffff;
 }
 h4, img, button{
    opacity: 0.7;
    width:  50%;
    margin-left: 20%;
 }
 h1{
    background-color:  #3366cc;
    text-align:center;

 }
 div{
//   margin: 5%;
 }


`;
export default GlobalProductStyle;
