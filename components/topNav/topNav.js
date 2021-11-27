import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Container } from './topNav.styled'
import ArrowDown from '../../assets/icons/arrow-down.png'

const TopNav = () => {
  const router = useRouter()
  const path = router.pathname

  const [heading, setHeading] = useState('')
  const [notificationsToggle, setNotificationsToggle] = useState(false)
  const [accountToggle, setAccountToggle] = useState(false)
  
  useEffect(() => {
    if (path === '/') setHeading('Profile')
    if (path === '/campaigns') setHeading('Campaigns')
    if (path === '/newCampaign') setHeading('New Campaign')
  }, [])

  const handleNotificationsToggle = () => setNotificationsToggle(!notificationsToggle)
  const handleAccountToggle = () => setAccountToggle(!accountToggle)

  return (
    <Container>
        <h1>{heading}</h1>
        <nav> 
          <Link href="/newCampaign">
              <p className="p-new-campaign">+ New Campaign</p>
          </Link>
          <button onClick={handleNotificationsToggle}>
            <div className="image-placeholder"></div>
            <p className="p-notifications">Notifications</p>
          </button>
          <button onClick={handleAccountToggle}>
            <div className="avatar"></div>
            <p className="p-notifications">Jone Doe</p>
            <div className="down-arrow-image">
              <Image src={ArrowDown} width={18} height={18} />
            </div>
          </button>
        </nav>
    </Container>
  )
}
export default TopNav
