
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
export default function Volunteer(){
    return(
        <MainContainer>
            <MainHeader>Volunteer Work and Leadership</MainHeader>
            <SubHeader>Course Grader, Boston University's Department of Computer Science</SubHeader>
                <p>Support instructors in grading homework assignments, projects, and exams, ensuring prompt and fair evaluation of all coursework</p>
                <DottedSeperator></DottedSeperator><br></br>
                <SubHeader>Treasurer, Boston University's Official Step Team (Rhythm 'n Beats)</SubHeader>
                <p>Organize budgets, track expenses, and coordinate fundraising efforts to support team operations and performative participation.</p>
                <DottedSeperator></DottedSeperator><br></br>
                <SubHeader>Mentor/Event Staff, Boston University's College of Engineering</SubHeader>
                <p>Provided technical assistance to students, encompassing support in brainstorming sessions and troubleshooting coding challenges throughout duration of Hackathon</p>
                <DottedSeperator></DottedSeperator><br></br>
                <SubHeader>Convention Facilitator, Public Interest Technology University Network</SubHeader>
                <p>Managed arrival process for 300+ attendees at the 2023 PIT-UN Convening. Checked-in and delivered event information for provosts, private sectors, and PIT-UN community participants</p>     
        </MainContainer>
    )
    
}