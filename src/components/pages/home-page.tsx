import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import resumePic from '../images/resume_pic.jpeg'

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

const ImageContainer = styled.img`
     @media screen and (min-width: 751px) {
        border: solid 2px #791e49;
        display: flex;
        margin-top:0;
        max-width: 100%;
        max-height: 100%;
        max-width: 100%;
}
        @media screen and (max-width: 750px) {
        display: block;
        max-width: 100%;
        margin: auto;
        border: solid #791e49;

}
`

const ImageParagraph = styled.div `
    @media screen and (min-width: 751px) {
        margin-top: 0 ;
        display:flex;
        align-items: flex-start;
        max-width: 100%;
        height: max-content;
        margin-left: 2%;
        margin-right: 2%; 
}
`

const ParagraphOne = styled.p `
        font-size: calc(2px + 1vw);
        font-family: serif;
    @media screen and (min-width: 751px) {
        margin-top: 0;
        padding-left: 2%;
        margin-right: 5%;
        max-width: 100%;
        height: 100%;
}
    @media screen and (max-width: 750px) {
        padding: 2%;
        max-width: 70%;
        margin: auto;
}
`

const ParagraphTwo = styled.p `
        font-size: calc(2px + 1vw);
        font-family: serif;
    @media screen and (min-width: 751px) {
        display: block;
        padding-top: 2%;
        max-width: 100%;
    }
         @media screen and (max-width: 750px) {
        padding: 2%;
        max-width: 70%;
        margin: auto;
}
`

const NavLinks = styled.div `
  a {
        color: pink;
        text-decoration: none;

        &:hover {
            text-decoration: none; 
        }
    }

`



export default function Home() {
    return (
        <MainContainer>
            <MainHeader>Home</MainHeader>
            <ImageParagraph>
            <ImageContainer src={resumePic} alt="Image of Self"></ImageContainer>
            <ParagraphOne>Hey there! I’m Derinell Rojas, a self-driven visionary in undergrad who's enthusiastic about combining creativity and logic to produce innovative solutions that are both visually captivating and functionally impactful. I’m currently pursuing a Bachelor of Arts degree in Computer Science at Boston University, complemented by a diverse foundation in sociology, art history, journalism, and marketing/advertising gained through university coursework and external opportunities. These pursuits have equipped me with a well-rounded foundation, enabling me to approach my career with a holistic perspective and create work that is socially impactful, artistically rich, and thoughtfully crafted with a strategic edge.

                
            <br></br><br></br>My career goals include becoming a Software Engineer and advancing to a Senior level. Along this journey, I plan to pursue a Master’s degree in Software Engineering/Development or potentially Digital Forensics. I aspire to become a program curator, creating a community for tech enthusiasts and providing hands-on resources to boost their confidence in self-learning and academic pursuits.

                
                </ParagraphOne>
            </ImageParagraph>   
                <ParagraphTwo>In my spare time, I’m deeply committed to volunteer work, particularly for tech-related events, as I’ve seen and experienced firsthand how programs and extracurriculars can pour a wealth of knowledge and experiential growth into people. During my early college years, I proactively sought external resources that provided mentorship, workshops, hands-on projects, and professional development opportunities across various fields. This approach allowed me to explore my interests while acquiring foundational skills and a clear sense of direction.

                <br></br><br></br>Overall, I am excited to explore and integrate my diverse interests, optimizing my resources to build a versatile and fulfilling career.

                <br></br><br></br><NavLinks>Welcome to my website to learn more about my <Link to="/Employment"><em><strong>Employment</strong></em></Link> history, <Link to="/Extracurriculars"><em><strong>Extracurriculars</strong></em></Link>, and much more!</NavLinks></ParagraphTwo>
       
        </MainContainer>
    )
}