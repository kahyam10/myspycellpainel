import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
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
  </div>
)

export default Layout
