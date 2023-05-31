import React from 'react';
import { Link } from '@chakra-ui/core';

// import { Container } from './styles';

const FooterLayout: React.FC = () => {
  return (
    <footer>
    <hr />
    <nav>
      <Link href="/">
        <a>Contact</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a>Terms of Use</a>
      </Link>{' '}
      |{' '}
      <Link href="/users">
        <a>Contract</a>
      </Link>{' '}
      | <a href="/api/users">Support</a>
    </nav>
  </footer>
  );
}

export default FooterLayout;