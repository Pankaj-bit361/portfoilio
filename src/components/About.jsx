import React, { useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components"
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import logo from '../images/porto2.png'
import { Box, HStack, VStack,Flex, Image,Text } from "@chakra-ui/react";
import AOS from "aos"
import "aos/dist/aos.css"

const About = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  

  return (
    <DIV>
    <Box fluid className="about section" id="about" w={"80%"} m={"auto"}   >
     <Text fontSize="4xl" fontWeight="700">
              About <span className="yellow"> ME </span>
            </Text>
      <Box mt={"5%"}>
        <Flex gap={"10%"} id="flex">
       
          <Box md={8}  className="home-about-description" w={"100%"} mt={"4%"} data-aos="fade-right">
           
            <Text fontSize="xl" id="user-detail-intro"  className="home-about-body" textAlign="left">
              A aspiring frontend web developer who has a strong command of{" "}
              <b className="yellow">HTML</b>, <b className="yellow">CSS</b>, and{" "}
              <b className="yellow">JavaScript</b>, and is proficient in the
              MERN stack (<b className="yellow">MongoDB</b>, <b className="yellow">Express.js</b>, <b className="yellow">React.js</b>, <b className="yellow">Node.js</b>). A constant
              learner and has the ability to adapt to new technologies. Capable
              of working in teams by providing valuable support.
            </Text>
          </Box>
          <Box md={4} className="myAvtar" data-aos="fade-left" >
            
            <Image
              src={logo}
              className="home-img"
              style={{ borderRadius: "50%" }}
              alt="avatar"
            
              margin={"auto"}
            borderRadius="50%"
              w={"100%"}
              
            />
          
        </Box>
        </Flex>
        
      </Box>
    </Box>
    </DIV>
  );
};

const DIV=styled.div`
@media screen and (max-width:836px){
  #about{
    margin-top:10%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }

}

 @media screen and (max-width:500px){
  #about{
    margin-top:15%
  }
  /* #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#user-detail-intro{
  font-size:1.1rem;
} */

} 
/* @media screen and (min-width:394px) and  (max-width:499px){
  #about{
    margin-top:10%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#user-detail-intro{
  font-size:3.5vw;
}
}
@media screen and (max-width:393px){
  #about{
    margin-top:20%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#user-detail-intro{
  font-size:3.5vw;
}
}
@media screen and  (max-width:375px){
  #about{
    margin-top:30%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#user-detail-intro{
  font-size:3.5vw;
}
} */
`


export default About;
