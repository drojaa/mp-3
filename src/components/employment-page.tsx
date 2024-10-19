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

export default function Employment(){
    return(
        <MainContainer>
        <MainHeader>Employment</MainHeader>
        <SubHeader>Software Engineer Intern</SubHeader>
            <h4>Kyruus Health</h4>
            <p>Delivered a functional feature by enhancing the HUB's cross-environment translation service for tenant data in English, Spanish, and Haitian Creole, enabling movement of translation values between dev2, prd2, and uat2 environments utilizing in-house API's.</p>
            <p>The feature allowed Business Systems Analysts and the Kyruus customer support team to control translations more efficiently, facilitating incremental updates, reducing data divergence, and improving adaptability across customer-specific environments</p>
            <DottedSeperator></DottedSeperator>
            <br></br>
            <SubHeader>Software Engineer Fellow</SubHeader>
            <h4>Hack.Diversity</h4>
            <p>Developed a MERN stack web application with a team of 6, enabling physicians to perform CRUD operations on structured radiology reports for COVID-19 patient x-ray assessments</p>
            
            <p>Authored a featured Medium post, presenting a 250+ word narrative detailing a personal journey into technology</p>
            <DottedSeperator></DottedSeperator>
            <br></br>
            <SubHeader>HubSpot AI Student Intern</SubHeader>
            <h4>HubSpot</h4>
            <p>Applied AI-driven data extraction in ChatSpot (HubSpot's AI chat) to generate 150+ leads for aiming to expand prospecting clients and partners</p>
            <br></br>
            <p>Composed a Google sheet for 150+ leads, capturing company details, location, employee size, and industry type, while emphasizing key qualification factors for targeted outreach</p>
            <DottedSeperator></DottedSeperator>
        </MainContainer>
    )
}