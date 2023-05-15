import React from 'react'
import logo from "../images/logon.png"
import {Box, Button,ChakraBaseProvider,Link as Chakralink} from "@chakra-ui/react"
import AOS from "aos"
import "aos/dist/aos.css"
import styled from 'styled-components';
import { useEffect } from 'react'
const Home = () => {

useEffect(()=>{

  AOS.init({duration:2000})

},[])

  const OpenPDF = () => {
    const url = `https://drive.google.com/file/d/1ST2186aPLk5Gh2i9Ixke3N3-qxrqHOdy/view?usp=sharing`
    window.open(url, '_blank');

  }
  return (
    <DIV id="home"  >
<div  className='home' >
  
    <div data-aos="fade-right">
        <h1>I AM,</h1>
        <h1  data-aos="fade-right" id="user-detail-name">PANKAJ VASHISHT</h1>
        <h3 id="user-detail-intro"  >A Passionate Full Stack Developer</h3>
        <div id="" className='social'>
            <div  >
                <img src="github.png" />
            </div>
            <div>
                <img src="linkc.png" />
            </div>
         
               <Box w="30%"><Button onClick={OpenPDF} id="resume-button-2" bg='black' fontSize={"lg"} className="nav-link resume-2" color="white" w="100%"><Chakralink id="resume-link-2" isExternal href = 'Resume.pdf' download="Resume.pdf">Resume</Chakralink></Button></Box>
            
        </div>


    </div>
    <div className='borderimg' data-aos="fade-left" >
      <img  src={logo}/> 
      </div>
     
</div>
    </DIV>
  )
}


const DIV=styled.div`

.home{
  display:flex;
  width:100%;
  margin:auto;
margin-top:15%;
justify-content:space-between;
gap:10%;
padding-bottom:10%

}
.home :nth-child(1)>h1{
font-size:3.2rem;
font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:700
}
.home :nth-child(1)>h3{
font-size:2.5rem;
color:black;

font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:700
}

.social{
  display:flex;
  margin-top:8%;
 justify-content:space-evenly;
  align-items:center;
  width:80%;
  margin:auto;
}

.social> :nth-child(1){
  border-radius:50%;
  width:15%
}
.social> :nth-child(2){
  padding:2%;
  width:15%;
  border-radius:50%
}
/* .social>:nth-child(3){
  background-color:black;
  color:white;
  font-weight:700;
 height:7vh;
width:30%;
align-content:center

} */

.social>div img{
 width:100%;
margin:auto
}
.social >:nth-child(3)>div> h1{

font-size:1.5rem;
margin:auto;
}

.borderimg{
  border-radius:23% 77% 69% 31% / 39% 24% 76% 61%   ;
  height:50vh;
  background-color:black
}
.borderimg>img{
margin:auto;
height:50vh

}
@media screen and (min-width: 950px) and (max-width:1050px){
  .home :nth-child(1)>h1{
    font-size:3rem;
  }
  .home :nth-child(1)>h1{
    font-size:2.5rem;
  }
}
@media screen and (min-width: 836px) and (max-width:1050px){
  .home :nth-child(1)>h1{
    font-size:2.6rem;
  }
  .home :nth-child(1)>h1{
    font-size:2.2rem;
  }
}
@media screen and (min-width: 1051px) and (max-width:1200px){
  .home :nth-child(1)>h1{
    font-size:3.3rem;
  }
  .home :nth-child(1)>h1{
    font-size:2.5rem;
  }
}
@media screen and (max-width:836px){
  .home{
    display:flex;
    flex-direction:column;
    height:100vh;
  }
  .home :nth-child(1)>h1{
    font-size:2.5rem
  }
  .home :nth-child(1)>h3{
    font-size:2rem
  }

.borderimg{
  width:80%;
  margin:auto;

}
.borderimg>img{
  width:100%
}

}
`


export default Home

