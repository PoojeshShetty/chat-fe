import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../public/icons/Logo.png';

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const LogoTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

function Logo() {
  return (
    <Container>
      <Image alt='Logo' height={40} src={LogoImg} width={40} />
      <LogoTitle>E-Message</LogoTitle>
    </Container>
  );
}

export default Logo;
