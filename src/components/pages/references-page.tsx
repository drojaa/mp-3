import styled from "styled-components";

const MainContainer = styled.main`
// border: 2px solid orange;
background-color: ghostwhite;
height: 100vh;
margin: auto;
@media screen and (min-widTableHead: 751px) {
        max-widTableHead: 70%; 
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
const Table = styled.table`
    width: 100%;
    border: solid#791e49 3px;
    th {
    background-color: #d071b2;
    }
    td {
    background-color: #e2b4d4;
}
`
const TableData = styled.td`
    border: 2px solid pink;
    text-align: left;   
`

const TableHead = styled.th`
    border: 2px solid pink;
    text-align: left;   
`


export default function References(){
    return(
       <MainContainer>
        <MainHeader>References</MainHeader>
        <h4>Professional</h4>
        <br></br>
      
     <Table>
        <tr>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Contact</TableHead>
        </tr>
        <tr>
            <TableData>Adam Steward</TableData>
            <TableData>Engineering Manager</TableData>
            <TableData>astewart@kyruus.com</TableData>
        </tr>
        <tr>
            <TableData>Aparajita Chaudari </TableData>
            <TableData>Senior Software Engineer</TableData>
            <TableData>achaudari@kyruus.com</TableData>
        </tr>
        <tr>
            <TableData>Ben Kirby</TableData>
            <TableData>Senior Software Engineer</TableData>
            <TableData>bkirby@kyruus.com</TableData>
        </tr>
     </Table>
    <br></br>
  
    <h4>Personal</h4>
        <br></br>
    <Table>
        <tr>
            <TableHead>Name</TableHead>
            <TableHead>Relation</TableHead>
            <TableHead>Contact</TableHead>
        </tr>
        <tr>
            <TableData>Minnile Jones</TableData>
            <TableData>Mother</TableData>
            <TableData>m.jones1@gmail.com</TableData>
        </tr>
        <tr>
            <TableData>Latonya Jones </TableData>
            <TableData>Mentor</TableData>
            <TableData>latrecemjones@gmail.com</TableData>
        </tr>
        <tr>
            <TableData>Maslax Ali</TableData>
            <TableData>Mentor</TableData>
            <TableData>maxali8@gmail.com</TableData>
        </tr>
     </Table>
       </MainContainer>
    )
}