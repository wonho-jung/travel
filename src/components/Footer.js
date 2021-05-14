import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
function Footer() {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p>We strive to create the best experiences for our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Video</FooterLinkTitle>
          <FooterLink to="/">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const FooterLinksWrapper = styled.div``
const FooterDesc = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 3rem;
  }
`
const FooterLinkItems = styled.div``
const FooterLinkTitle = styled.div``
const FooterLink = styled.div``
