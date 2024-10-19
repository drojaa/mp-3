import styled from "styled-components"
import { Link } from "react-router-dom"

const FooterText = styled.p`
    background-color: #791e49;
    padding: 0.5%;
    color: white;

    a {
        color: pink;
        text-decoration: none;

        &:hover {
            text-decoration: none; 
        }
    }
`;

const Credit = styled.div `
    display: inline;
    color: pink;
    text-decoration: none;
`
export default function Footer(){
return(
<>
<FooterText>All Rights Reserved by Derinell Rojas <Link to="/"><Credit>Credits</Credit></Link> &copy;</FooterText>
</>
)
}