import styled from "styled-components";

const MainContainer = styled.main`
// border: 2px solid orange;
background-color: ghostwhite;
height: 100vh;
margin: auto;
@media screen and (min-width: 751px) {
        max-width: 70%; 
        margin: auto;
        height: 100vh; 
       
}
@media screen and (max-width: 750px) {
    max-width: 100%;
}
`

const MainHeader = styled.h2 `
    color: brown;
    max-width: max-content;
    margin: auto;
    padding: 3%;
`
const SubHeader = styled.h3`
    color: brown;
`

const DottedSeperator = styled.hr`
    border: dotted #791e49;
`


export default function Education(){
    return(
        <MainContainer>
        <MainHeader>Education</MainHeader>
        <SubHeader>Academic Institutions:</SubHeader>
        <h4>B.A in Computer Science | <em>Boston University MA,</em></h4>
        <p > <em>May 2025</em> </p>
    <br></br><br></br>
    <h4>Highschool Diploma | <em>KIPP Academy Lynn Collegiate  MA,</em></h4>
        <p > <em>May 2021</em> </p>
 
    <DottedSeperator></DottedSeperator>
    <br></br>
    <SubHeader>Relevant Coursework:</SubHeader>
   
      <ul>
            <li>Linear Algebra</li>
            <li>Data Structures</li>
            <li>Analysis of Algorithms</li>
            <li>Computer Systems</li>
            <li>Intro to Software Engineering</li>
            <li>Intro to Databases</li>
        </ul>
        <DottedSeperator></DottedSeperator>
        <br></br>
         <SubHeader>Skills:</SubHeader>
          <ul>
        
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>React</li>
                <li>MySQL</li>
                <li>MERN STACK</li>
                <li>Python</li>
                <li>Java</li>
                
    
            </ul>
        </MainContainer>
    )
}