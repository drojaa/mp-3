import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import styled from "styled-components"
import Home from './components/home-page';
import Education from './components/education-page';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import './App.css';
import Employment from './components/employment-page';
import Achievements from './components/achievements-page';
import Projects from './components/projects-page';
import Volunteer from './components/volunteer-work-page';
import References from './components/references-page';


const NavMain = styled.div `
background-color: ghostwhite;
@media screen and (max-width: 750px) {  
}
@media screen and (min-width: 751px) {
        display: flex;
        
}
`

const Body = styled.body `
    margin: 0% 5% 0% 5%; 
`



const Root = () => {
  return (
    <div>
      <Body>
      <Header />
      <NavMain>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Education" element={<Education/>} />
        <Route path="/Employment" element={<Employment/>} />
        <Route path="/Achievements" element={<Achievements/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Volunteer Work" element={<Volunteer/>} />
        <Route path="/References" element={<References/>} />
      </Routes>
     
      </NavMain>
      <Footer />
      </Body>
    </div>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

export default function App() {
  return (

    <RouterProvider router={router}/>
  )
}


