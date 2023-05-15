import styled from "styled-components"
// import "../CSS/Project.css"
import myntra from "../images/Screenshot (251).png"
import { Button, Heading } from "@chakra-ui/react"

function Project() {


    return (
        <DIV id="projects" style={{marginTop:"10%"}}>
            <Heading color='black' fontSize={35} textAlign={"center"} marginBottom={"4%"}>Projects</Heading>
            <div className="Project_grid">
                <div class="project-card">
                    <img src="https://i.ibb.co/2WRt80k/Screenshot-216.png" alt="" />
                    <h2 class="project-title">Survey monkey clone</h2>
                    <p class="project-description">SurveyMonkey is brought to you by momentive.ai. Shape what's next with AI‑driven insights and experience management solutions built for the pace of modern business.</p>
                    <p class="project-tech-stack">Tech stack: HTML,CSS,JavaScript</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button class="project-github-link" id="BTN" bg="black" fontWeight={"600"} marginTop={"20px"}  onClick={()=>window.open("https://velvety-crisp-5d06ec.netlify.app/","_blank")}>Git Repo</Button>
                        <Button class="project-deployed-link" id="BTN" bg="black" fontWeight={"600"} marginTop={"20px"}  onClick={()=>window.open("https://github.com/Pankaj-bit361/Pankaj-bit361-valid-morning-8854/","_blank")}>Live Site</Button>
                    </div>

                </div>
                <div class="project-card" >
                    <img src={myntra} alt="" />
                    <h2 class="project-title">Myntra Clone</h2>
                    <p class="project-description">Myntra is a e-commerce India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. </p>
                    <p class="project-tech-stack">Tech stack: HTML,CSS,React,ChakraUi,Redux</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button class="project-github-link" id="BTN" bg="black" fontWeight={"600"} marginTop={"20px"}  onClick={()=>window.open("https://velvety-crisp-5d06ec.netlify.app/","_blank")}>Git Repo</Button>
                        <Button class="project-deployed-link" id="BTN" bg="black" fontWeight={"600"} marginTop={"20px"}  onClick={()=>window.open("https://velvety-crisp-5d06ec.netlify.app/","_blank")}>Live Site</Button>
                    </div>


                </div>
                <div class="project-card">
                    <img src="https://i.ibb.co/bWwjjsQ/Vastram-home.png" alt="" />
                    <h2 class="project-title">Belk clone</h2>
                    <p class="project-description">Belk.com is an online shopping platform that offers a variety of products from clothing and shoes to beauty products and home decor. Customers enjoy free shipping, easy returns, and various payment options.</p>
                    <p class="project-tech-stack">Tech stack: HTML,CSS,JavaScript,React,ChakraUi</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button class="project-github-link" id="BTN" bg="black" fontWeight={"600"} marginTop={"20px"}  onClick={()=>window.open("https://github.com/Pankaj-bit361/-vigorous-ticket-1895","_blank")} >Git Repo</Button>
                        <Button class="project-deployed-link" id="BTN" bg="#black" fontWeight={"600"} marginTop={"20px"} onClick={()=>window.open("https://velvety-crisp-5d06ec.netlify.app/","_blank")} >Live Site</Button>
                    </div>

                </div>
                <div class="project-card" >
                    <img src={myntra} alt="" />
                    <h2 class="project-title">Myntra Clone</h2>
                    <p class="project-description">Myntra is a e-commerce India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. </p>
                    <p class="project-tech-stack">Tech stack: HTML,CSS,React,ChakraUi,Redux</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button class="project-github-link" id="BTN" bg="black" fontWeight={"600"} marginTop={"20px"}  onClick={()=>window.open("https://velvety-crisp-5d06ec.netlify.app/","_blank")}>Git Repo</Button>
                        <Button class="project-deployed-link" id="BTN" bg="black" fontWeight={"600"} marginTop={"20px"}  onClick={()=>window.open("https://velvety-crisp-5d06ec.netlify.app/","_blank")}>Live Site</Button>
                    </div>


                </div>

            </div>
        </DIV>
    )

} export default Project

const DIV = styled.div`
    .Project_grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    /* grid-template-rows: 800px; */
   
    /* width: 100%; */
    /* border: 1px solid black; */
    gap: 20px 40px;
    text-align: center;
    align-items: center;
    /* padding: 0% 2%; */
    margin: 0px 4%;
    
}
h1{
    text-align:center;
}
.Project_grid > div{
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:500;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    width: 100%;
    padding: 5% 0%;
    height:600px;
    display:flex;
    flex-direction:column;
    justify-content:space-between

}
#BTN{
    background-color:black;
    padding:8px 15px; 
    font-weight:"600";
}
  



.Project_grid img{
    width: 90%;
    display: block;
    margin: auto;
}
.Project_grid button{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
    background-color: #FBC02D;
    
    /* border: 1px solid black; */
    border-radius: 5px;
    font-size: 18px;
}




@media screen  and (max-width:815px){
    .Project_grid{
        grid-template-columns: repeat(1,1fr);
        gap: 10px 20px;
    }
}
`