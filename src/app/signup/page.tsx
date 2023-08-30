'use client'
import React from 'react'
import Button from '../../../components/Button'
import { styled } from 'styled-components'


const Container = styled.div`
  border: 1px solid red;
`;

function Signup() {

  return (
    <Container>
        <Button text='click' />
    </Container>
  )
}

export default Signup