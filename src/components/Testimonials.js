import React from "react"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import styled from "styled-components"
function Testimonials() {
  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
            <h3>Sean Michaels</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              illum aperiam, nesciunt doloremque suscipit incidunt eius rem?
              Laborum blanditiis perspiciatis quae doloremque, libero laboriosam
              quas, dolore illo optio, illum officia?"
            </p>
          </Testimonial>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
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
          <Images />
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
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const Description = styled.div`
  text-align: center;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  height: 100%;
`
