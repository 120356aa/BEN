import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from './leftNav.styled'

import Logo from '../../assets/ben_logo_med.png'
import HomeIcon from '../../assets/icons/home.png'
import CampaignsIcon from '../../assets/icons/campaigns.png'

export const LeftNav = () => {
  const router = useRouter()
  const path = router.pathname

  return (
    <Container>
      <div className="logo-image">
        <Image src={Logo} alt="Blockchain Exchange Network (BEN) Logo" />
      </div>
      <nav>
        <Link href="/">
          <div className={path === "/" ? 'link active-link' : 'link'}>
            <Image src={HomeIcon} alt="Home link icon" />
            <p className={path === "/" ? 'label active-label' : 'label'}>Home</p>
          </div>
        </Link>
        <Link href="/campaigns">
          <div className={path === "/campaigns" ? 'link active-link' : 'link'}>
            <Image src={CampaignsIcon} alt="Campaigns link icon" />
            <p className={path === "/campaigns" ? 'label active-label' : 'label'}>Campaigns</p>
          </div>
        </Link>
      </nav>
    </Container>
  )
}

export default LeftNav
