import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from './leftNav.styled'

import Logo from '../../assets/ben_logo_med.png'
import HomeIcon from '../../assets/icons/home.png'
import CampaignsIcon from '../../assets/icons/campaigns.png'
import WalletIcon from '../../assets/icons/wallet.png'
import UsersIcon from '../../assets/icons/users.png'

export const LeftNav = () => {
  const { pathname } = useRouter()

  return (
    <Container>
      <div className="logo-image">
        <Image src={Logo} alt="Blockchain Exchange Network (BEN) Logo" />
      </div>
      <nav>
        <Link href="/">
          <div className={pathname === "/home" ? 'link active-link' : 'link'}>
            <Image src={HomeIcon} alt="Home link icon" />
            <p className={pathname === "/home" ? 'label active-label' : 'label'}>Home</p>
          </div>
        </Link>
        <Link href="/campaigns">
          <div className={pathname === "/campaigns" || pathname === '/newCampaign' ? 'link active-link' : 'link'}>
            <Image src={CampaignsIcon} alt="Campaigns link icon" />
            <p className={pathname === "/campaigns" || pathname === '/newCampaign' ? 'label active-label' : 'label'}>Campaigns</p>
          </div>
        </Link>
        <Link href="/wallet">
          <div className={pathname === "/wallet" ? 'link active-link' : 'link'}>
            <Image src={WalletIcon} alt="Wallet link icon" />
            <p className={pathname === "/wallet" ? 'label active-label' : 'label'}>Wallet</p>
          </div>
        </Link>
        <Link href="/users">
          <div className={pathname === "/users" ? 'link active-link' : 'link'}>
            <Image src={UsersIcon} alt="Users link icon" />
            <p className={pathname === "/users" ? 'label active-label' : 'label'}>Users</p>
          </div>
        </Link> 
      </nav>
    </Container>
  )
}

export default LeftNav
