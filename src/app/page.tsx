"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { styled } from 'styled-components'
import Link from 'next/link'
import routeConstants from '../../utils/routeConstants'


const Container = styled.div`
  border: 1px solid red;
`;

const LinkContainer = styled.div`
 border: 1px solid yellow;
`

export default function Home() {

  const { signUp, login } = routeConstants;
  const LINKS = [{...signUp}, { ...login}]
  return (
      <Container>
        Home page

        {LINKS.map((link, index) => (
          <LinkContainer key={index}>
          <Link href={link.href}>{link.name}</Link>
          </LinkContainer>
        ))}
      </Container>
  )
}
