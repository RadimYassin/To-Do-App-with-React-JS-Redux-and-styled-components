import styled from "styled-components";

export const Container=styled.div`
width:700px;
height:auto ;
margin:0 auto;
text-align:center;


`

export const Title=styled.h1`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin-top:50px;


`


export const Form=styled.form`
display:flex;
align-items:center;
padding:10px;



`

export const Input=styled.input`
padding:${props=>props.pd ? "10px":"8px"};
background-color:${props=>props.bg ?  "white":"red"};
border-radius:5px;
flex:1;
&:focus{
    border:none;
    outline:rosybrown solid 1px;
   
}

`


export const Button=styled.button`
padding:${props=>props.pd ? "10px":"8px"};
background-color:${props=>props.disabled?" rgba(43, 43, 227, 0.555)"  :"rgba(0, 0, 255)"};
color:white;
border-radius:5px;
width:100px;

&:hover{
    background-color:${props=>props.primary ?  "rgb(43, 43, 198)":" rgba(43, 43, 227, 0.555)"};
   
}

`


