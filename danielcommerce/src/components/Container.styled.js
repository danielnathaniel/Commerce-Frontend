import styled, { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
// what is ThemeProvider css?
const GlobalProductStyle = createGlobalStyle`
 body{
    display: flex;
   justify-content: center;
   //  align-content: center;
    background-color: #e6ffff;
 }
 // opacity is a nice tool if pictures have dead space - png would be better
 h4, img, h5, button{
    opacity: 0.7;
    width:  50%;
    margin-left: 20%;
 }
//  https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
// https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
// https://webplatform.github.io/docs/tutorials/css_animations/
//https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
 h1{
   //  background-color:  #3366cc;
      font-weight: 600;
      font-size: 420%;
      line-height:80%;
      text-align: center;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-size: 80%;
      animation: Daniel 10s linear infinite;
      background-image: linear-gradient( 50deg, green 5%, yellow 20%, blue 30%, green 50%, purple 80%, pink 100% );
 }
 // use z index to hide and remove items if needed
    @keyframes Daniel {
      10%,95%{
            background-position: 300% 50%;
      }

      70%{
            background-position: 20% 300%;
      }
   }
 div{
//   margin: 5%;
 }


`;
export default GlobalProductStyle;
