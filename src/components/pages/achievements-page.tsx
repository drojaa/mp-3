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
export default function Achievements(){
    return(
        <MainContainer>
        <MainHeader>Achievements</MainHeader>
                <SubHeader>Awarded "Best Project from a Group of Entry-Levels" at Rewriting The Code's 2024 Hackathon, Black Wings Hack</SubHeader>
                    <p>We created a web app, Pegasus Connects, that connects students with volunteer tutors, offering free or low-cost educational resources to underserved communities by matching them based on subject needs, location, or time availability. The platform includes features like scheduling, feedback systems, video chat, and an admin dashboard, with tutors having the option to volunteer or receive stipends, furthering its social impact.</p>
                    <DottedSeperator></DottedSeperator><br></br><SubHeader>Recipient of Academic Scholarship to Boston University</SubHeader>
                    <p> Awarded for exceptional academic performance and demonstrated potential for future success. This scholarship recognizes high achievement and a commitment to educational excellence</p>
                    <DottedSeperator></DottedSeperator><br></br><SubHeader>Recipient of Clinton G Mills/Bank of America Scholarship</SubHeader>
                    <p>Awarded for academic excellence and leadership potential. This scholarship recognizes students who demonstrate outstanding achievement and a commitment to community service.</p>
                    <DottedSeperator></DottedSeperator><br></br><SubHeader>2020 AP Scholars Award</SubHeader>
                        <p>Earned by passing 4 AP exams, recognizing high academic achievement and excellence in college-level coursework. This award highlights dedication to rigorous study and scholastic success.</p>
        </MainContainer>       
    )
    
}