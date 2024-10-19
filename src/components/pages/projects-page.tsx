import styled from "styled-components";
import { useState } from "react";

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
const BodyCalc = styled.div`  
    border: solid orangered;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    max-width: max-content;
    margin: auto;
    padding: 2%;
    background-color: white;
    justify-content: space-between;   
}
`
const First = styled.div`
    max-width: fit-content;
    margin: 1vh auto;
`
const FirstNumber = styled.input`
border: solid rgb(160, 157, 157);
    max-width:7vw ;
    max-height: 7vh;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    font-size: calc(15px + 0.5vw);
    font-family: 'Work+Sans';
    text-align: center;
    color: #d071b2;
`

const  SecondNumber = styled.input`
border: solid rgb(160, 157, 157);
    max-width:7vw ;
    max-height: 7vh;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    font-size: calc(15px + 0.5vw);
    font-family: 'Work+Sans';
    text-align: center;
    color: #d071b2;
    display:inline;
`
const Label = styled.label`
  display:inline;
  margin-right: 2px;
  
`
const FirstRow = styled.div`
    max-width: fit-content;
    margin:auto;
`

const SecondRow = styled.div`
    max-width: fit-content;
    margin:auto;
`

const ThirdRow = styled.div`
    max-width: fit-content;
    margin:auto;
`
const Operations = styled.button`
    width: 7vw;
    height: 7vh;
    border: solid rgb(248, 73, 102);
    background-color: #ffbcea;
    font-family: 'Allegro', sans-serif;
    font-size: calc(2vh);
    font-weight: 500;
    color: rgb(255, 255, 255);
    box-shadow: 0px 8px 30px rgba(56, 56, 56, 0.1);
    margin: 20px auto;
    margin-right: 5px;

`

const Out = styled.div`
    border:solid rgba(0, 0, 0, 0.1);
    max-width: 19vw;
    height: 5vh;
    margin:auto;
    overflow: hidden;
    text-align: center;
`

const Output = styled.h3`
    color: ${(props) => props.color};
    font-size: calc(15px + 0.5vw);
    font-family: 'Work+Sans';
    text-align: center;
`
export default function Projects(){

    const[numOne, setNumOne] = useState(0);
    const[numTwo, setNumTwo] = useState(0);
    const[result, setResult] = useState(0);
    const [outputColor, setOutputColor] = useState('#d071b2');

    
    function addition(){
        setOutputColor('#d071b2');
        let answer = numOne + numTwo;
        if (answer < 0) {
            setOutputColor('red');
        }
        setResult(answer)
    }  

    function subtraction(){
        setOutputColor('#d071b2');
        let answer = numOne - numTwo;
        if (answer < 0) {
            setOutputColor('red');
        }
        setResult(answer)
    } 

    function multiplcation(){
        setOutputColor('#d071b2');
        let answer = numOne * numTwo;
        if (answer < 0) {
            setOutputColor('red');
        }
        setResult(answer)
    } 

    function division(){
        setOutputColor('#d071b2');
        let answer = numOne / numTwo;
        if (answer < 0) {
            setOutputColor('red');
        }
        setResult(answer)
    } 

    function power(){
        setOutputColor('#d071b2');
        let base = 1;
        for(let i = 0; i < numTwo  ; i++ ) {
            base = base * numOne
         }
         if (base < 0) {
            setOutputColor('red');
        }
        setResult(base)
    } 

    function clear_values(){
        setOutputColor('#d071b2');
        setNumOne(0);
        setNumTwo(0);
        setResult(0);
        setOutputColor('#d071b2');
    } 

    return(
        <MainContainer>
            <MainHeader>Projects</MainHeader>
            <SubHeader>Bookify</SubHeader>
            <p>Initiated development of a web application to provide users a unique and personalized Spotify playlist of 10 songs perfectly tailored to mood and themes of any book</p>
            <br></br>
            <p>Integrated 2 external web API (ChatGPT and Spotify)</p>
            <br></br>
            <p>Implemented OAuth allowing users to login with existing Spotify account to save playlist</p>
            <br></br>
            <p>Categorized MySQL database into 5 fields (User's Spotify ID, Book Title, Author's Name, and User's Feedback Responses from Questionnaire)</p>
            <DottedSeperator></DottedSeperator><br></br>
            <SubHeader>Calculator App</SubHeader>
            <BodyCalc>
                <First>
                <Label></Label>
                <FirstNumber 
                type="number" 
                value={numOne}
                onChange={(e) => setNumOne(Number(e.target.value))}
                />
                <Label></Label>
                <SecondNumber 
                type="number" 
                value={numTwo}
                onChange={(e) => setNumTwo(Number(e.target.value))}
               />
                </First>
                <FirstRow>
                    <Operations onClick={addition}>+</Operations>
                    <Operations onClick={subtraction}>-</Operations>
                </FirstRow>
                <SecondRow>
                <Operations onClick={multiplcation}>*</Operations>
                <Operations onClick={division}>/</Operations>
                <Operations onClick={power}>^</Operations>
                </SecondRow>
                <Out>
                <Output color={outputColor}>{result}</Output>
                </Out>
                <ThirdRow>
                <Operations onClick={clear_values}>C</Operations>
                </ThirdRow>
            </BodyCalc>
        </MainContainer>
        
    )
    
}