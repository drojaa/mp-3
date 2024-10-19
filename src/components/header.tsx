import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: #791e49;
`
const HeaderName = styled.h1 `
    font-family: 'Allegro', serif;
    font-size: calc(7px + 3vw);
    color: white;
     @media screen and (min-width: 751px) {
      padding-left: 0%;
}
      @media screen and (max-width: 750px) {
        max-width: max-content;
        margin:auto;

}
`

const HeaderDesc = styled.p`
    font-family: serif;
    font-size: calc(4px + 1vw);
    color: white;
    @media screen and (min-width: 751px) {
    padding-left: 0%;
}
     @media screen and (max-width: 750px) {
        max-width: max-content;
        margin:auto;

}
`

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderName>Derinell Rojas</HeaderName>
            <HeaderDesc>My Digital Resume</HeaderDesc>
        </HeaderContainer>

    
    )
}