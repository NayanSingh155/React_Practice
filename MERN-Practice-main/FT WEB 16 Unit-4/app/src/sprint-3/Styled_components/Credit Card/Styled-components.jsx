import styled from "styled-components"

const Input1 = styled.input`
background:none;
color:brown;
border:none;
border-bottom:1px solid black;
margin-top:15px;
margin-bottom:15px;
width:250px;
outline:none;

`
const Input2 = styled.input`
background:none;
color:brown;
border:none;
border-bottom:1px solid black;
margin-top:15px;
margin-bottom:15px;
width:70px;
outline:none;

`
const Form =styled.form`
text-align:left;
`
const Div =styled.div`
width:30%;
margin:auto;

`
const Div1 =styled.div`
display:flex;
justify-content:space-between;


`
const Div2 =styled.div`
display:flex;
justify-content:space-between;
width:60%;
color:white;
margin-left:50px;

`
const P =styled.p`
text-align:center;
`
const Btn = styled.input`
background:red;
text-align:center;
color:white;
cursor:pointer;
margin:auto;
margin-left:120px;
width:100px;
padding-top:5px;
padding-bottom:5px;
box-sizing:border-box;
`

const Card=styled.div`
background: #7b4397;  
background: -webkit-linear-gradient(to right, #dc2430, #7b4397);  
background: linear-gradient(to right, #dc2430, #7b4397); 
height:250px;
width:40%;
margin-top:100px;
border-radius:20px;
box-sizing:border-box;

`
const Span =styled.h3`
color:white;

margin-left:280px;
font-size:30px;
font-style:italic;
margin-top:10px;
`
const P1=styled.p`
margin-left:-250px;
margin-top:20px;
color:white;
font-size:20px;
`
const Img=styled.img`
height:20px;
width:30px;
margin-left:-300px;
`
export {Input1,Form,Div,Div1,Span,Input2,P,P1,Div2,Btn,Img,Card}