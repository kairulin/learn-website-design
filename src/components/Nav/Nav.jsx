import React from 'react'
import { Bar, Container, Links, Logo, Navbar } from './NavStyled'
import {GiHamburgerMenu} from 'react-icons/gi'
const Nav = () => {
    const links = ["BIKES","ABOUT US","SERVICE & SUPPORT"]
  return (
    <Navbar>
        <Container>
           <Logo>Title*</Logo>
            <Bar><GiHamburgerMenu /></Bar>
            <Links>
                {
                    links.map((link)=>(
                        <li key={link}>
                            <a>{link}</a>
                        </li>
                    ))
                }
            </Links>
        </Container>
    </Navbar>
  )
}

export default Nav
