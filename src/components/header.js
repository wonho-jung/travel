import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { MdCancel } from "react-icons/md"
const Header = () => {
  const [clicked, setClicked] = React.useState(false)
  console.log(clicked)
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      {!clicked ? (
        <Bars onClick={() => setClicked(true)} />
      ) : (
        <>
          <Cancel onClick={() => setClicked(false)} />
          <Mobile className={clicked ? "nav-menu active" : "nav-menu"}>
            {menuData.map((item, index) => (
              <MobileLink key={index} to={item.link}>
                {item.title}
              </MobileLink>
            ))}
          </Mobile>
        </>
      )}
      <NavMeun>
        {menuData.map((item, index) => (
          <NavLink key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </NavMeun>
      <NavBtn>
        <Button primary="true" round="true" to="/#book">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header
const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw- 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  z-index: 100;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const Cancel = styled(MdCancel)`
  display: none;
  color: #fff;
  z-index: 100;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMeun = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Mobile = styled.div`
  -webkit-clip-path: circle(1200px at 90% -10%);
  clip-path: circle(1200px at 90% -10%);
  pointer-events: all;
  background: #1e2a3a;
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
`
const MobileLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  :first-child {
    padding-top: 5rem;
  }
`
