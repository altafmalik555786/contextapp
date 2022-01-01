import styled from "styled-components";

export const FlexImg = styled.div`

  button {
    float: left;
    margin: 165px 0 0 -172px;
    background-color: transparent;
    color: black;
    opacity: 0;
    font-weight: bolder;
    transition: 1s;
  }

  div img {
    width: 247px;
    height: 200px;
    float: left;
    margin: 10px;
    border-radius: 20px;
    transition: 2s;
  }

  div{
    transition: all 0.4s;
  }
  div:hover {
    opacity: 0.5;
  }
  div:hover button{
    opacity: 1;
    background-color: green;
  }
  .lg-img {
    height: 420px;
    width: 512px;
    flex-wrap: 1;
  }
  

  
 
  
 
`
