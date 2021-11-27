import Link from 'next/link'
import Image from 'next/image'
import { Container } from './landing.styled'
import LogoImage from '../../assets/ben_logo_big.png'
import HeroImage from '../../assets/hero-img.png'

const Landing = () => {
  return (
    <Container>
      <Image src={LogoImage} alt="Blockchain Exchange Network (BEN) Logo" />
      <p className="text">
        Deliver highly targeted and personalized ads to relevant consumers, heighten 
        consumer loyalty through meaningful incentives delivered just-in-time and expand 
        your consumer insights with comprehensive analytics and attribution - all available 
        in one place.
      </p>
      <div>
        <Link href="/home">
          <p className="btn-label">Sign In</p>
        </Link>
        <Link href="/home">
          <p className="btn-label">Create an account</p>
        </Link>
      </div>
      <div className="img">
        <Image src={HeroImage} alt="BEN Banner" />
      </div>
    </Container>
  )
}

export default Landing