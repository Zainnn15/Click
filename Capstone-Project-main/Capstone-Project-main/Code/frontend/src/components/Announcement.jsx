import React from 'react'
import styled from "styled-components"

const Container = styled.div`
        background-color: teal;
        color: white;
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 14px;
        font-weight: 500;
        height: 30px;
        `

 const Announcement = () => {
  return (
    <Container>
      <marquee direction="right">
        Exclusive Deal! Free Shipping on Orders Over $50
        </marquee>
        </Container>
        
  )
}

export default Announcement