import { Link } from "react-router-dom";
import styled from "styled-components"

const NavContainer = styled.nav`
  @media screen and (min-width: 751px) {
    background-color: #7e3946;
    max-width: 30%;
    height: 100vh;
    text-decoration: none;
  }
 @media screen and (max-width: 750px) {
       
        max-width: 100%;
        justify-content: space-evenly;
        background-color:#7e3946;
        padding-top: 1vw;
        padding-bottom: 1vw ;
}
`;

const UlContainer = styled.ul`
@media screen and (max-width: 750px) {

        justify-content: space-evenly;
        list-style: none;
        max-width: 100%;
        font-size: 0;
        padding-left: 0;
        padding-right: 0;
        display: block;
}
 @media screen and (min-width: 751px) {
        padding-left: 0;
        list-style: none;
        height: 100%;
        justify-content: space-between;
        text-decoration: none;
}

`

const LiContainer = styled.li`
@media screen and (max-width: 750px) {
    font-size: calc(5px + 1vw);  
    // border: 2px solid green;
    max-width: max-content;
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
    border-left: solid #791e49 2px;  
    font-size: calc(5px + 1vw); 
    justify-content: space-evenly;
    text-decoration: none;
       a {
        text-decoration: none;
        }
}
         @media screen and (min-width: 751px) {
        border-top: 5px solid  #791e49;
        display: block;
        padding: 100%;
        border-top: 5px solid  #791e49;
        padding: 20px;
        display: block;
        
         &:hover {
            background-color: palevioletred;

            a {
                color: rgb(228, 188, 208);
            }
        }   
            a {
        text-decoration: none;
        &:hover {
            text-decoration: none; 
        }
    } 
}
     
    
`
const LiContainerItems = styled.div`
@media screen and (max-width: 750px) {
    font-size: calc(5px + 1vw); 
    color: pink;
    display: block;
   
}
 @media screen and (min-width: 751px) {
    color: pink;
    display: block;
}
    
`

export default function Nav(){
    return(
        <>
        <NavContainer>
            <UlContainer>
                <LiContainer> <Link to="/"><LiContainerItems>Home</LiContainerItems></Link> </LiContainer>
                <LiContainer> <Link to="/Education"><LiContainerItems>Education</LiContainerItems></Link> </LiContainer>
                <LiContainer> <Link to="/Employment"><LiContainerItems>Employment</LiContainerItems></Link> </LiContainer>
                <LiContainer> <Link to="/Achievements"> <LiContainerItems>Achievements</LiContainerItems></Link> </LiContainer>
                <LiContainer> <Link to="/Projects"><LiContainerItems>Projects</LiContainerItems></Link></LiContainer>
                <LiContainer> <Link to="/Volunteer Work"><LiContainerItems>Volunteer Work</LiContainerItems></Link> </LiContainer>
                <LiContainer> <Link to="/References"><LiContainerItems>References</LiContainerItems></Link> </LiContainer>
            </UlContainer>
        </NavContainer>
        </>
    )
}