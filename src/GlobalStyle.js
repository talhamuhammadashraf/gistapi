import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  *{
    box-sizing: border-box;
  }
  .avatar{
    height:30px;
    widht:30px;
    border-radius:15px;
    margin-right:8px;
  }
  #container{
  }
  .gist{
    margin:auto;
    padding-top:20px;
    margin-right:20px;
    margin-left:20px;
    border-bottom:0.5px solid #383434;
    padding-bottom:30px

  }
  .octIcon{
    color:blue;
    margin-left:6px
  }
`;

export default GlobalStyles;
