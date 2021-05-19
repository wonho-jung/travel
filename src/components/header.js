import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { MdCancel } from "react-icons/md"
const Header = () => {
  const [clicked, setClicked] = React.useState(false)
  const [navIcon, setNavIcon] = React.useState(false)
  console.log(navIcon)
  const handleClick = () => setClicked(!clicked)
  const closeMenu = () => setClicked(false)
  console.log(window.scrollY)
  const scroll = () => {
    if (window.scrollY > 753) {
      setNavIcon(true)
    } else {
      setNavIcon(false)
    }
  }
  React.useEffect(() => {
    window.addEventListener("scroll", scroll)
    return () => window.removeEventListener("scroll", scroll)
  }, [])
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      {clicked ? (
        <Cancel
          onClick={handleClick}
          className={!navIcon ? "icon" : "icon active"}
        />
      ) : (
        <Bars
          onClick={handleClick}
          className={!navIcon ? "icon" : "icon active"}
        />
      )}
      <Mobile className={clicked ? "nav-menu active" : "nav-menu"}>
        {menuData.map((item, index) => (
          <MobileLink key={index} to={item.link} onClick={closeMenu}>
            {item.title}
          </MobileLink>
        ))}
      </Mobile>
      <NavMeun>
        {menuData.map((item, index) => (
          <div>
            <NavLink key={index} to={item.link}>
              {item.title}
            </NavLink>
          </div>
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

  .nav-menu {
    position: fixed;
    top: 0;
    right: 0;
    background: #769abe;
    height: 100vh;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    -webkit-clip-path: circle(100px at 90% -60%);
    clip-path: circle(100px at 90% -60%);
    transition: all 0.5s ease-out;
    pointer-events: none;
  }
  .nav-menu.active {
    -webkit-clip-path: circle(1200px at 90% -10%);
    clip-path: circle(1200px at 50% -10%);
    pointer-events: all;
    background: #f26a2e;
  }
  .icon {
    color: white;
  }
  .icon.active {
    color: black;
  }
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

  z-index: 100;

  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
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

  @media screen and (max-width: 768px) {
    z-index: 100;
    display: block;
    position: fixed;
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
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
const MobileLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 3rem 1rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  :first-child {
    padding-top: 10rem;
  }
  &:hover {
    opacity: 0.5;
  }
`
