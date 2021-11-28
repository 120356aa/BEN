import Head from 'next/head'
import LeftNav from './leftNav'
import TopNav from './topNav'
import { AppWrap } from '../styles/layout.styled'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Blockchain Exchange Network (BEN)</title>
      <meta name="description" content="Blockchain Exchange Network (BEN)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppWrap>
      <LeftNav />
      <main>
        <TopNav />
        {children}
      </main>
    </AppWrap>
  </>
)

export default Layout
