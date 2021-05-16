import React from "react"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegLightbulb } from "react-icons/fa"
function Testimonials() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)| (png) |(jpeg)/" }
          name: { in: ["sandra", "kim"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <TestimonialsContainer id="about">
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sandra</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              illum aperiam, nesciunt doloremque suscipit incidunt eius rem?
              Laborum blanditiis perspiciatis quae doloremque, libero laboriosam
              quas, dolore illo optio, illum officia?"
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sarah Kim</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              illum aperiam, nesciunt doloremque suscipit incidunt eius rem?
              Laborum blanditiis perspiciatis quae doloremque, libero laboriosam
              quas, dolore illo optio, illum officia?"
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((img, key) => (
            <Images key={key} fluid={img.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-size: italic;
  }
  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const Images = styled(Img)`
  border-radius: 10px;
  height: 400px;
`
