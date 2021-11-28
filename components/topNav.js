import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CampaignContext } from '../context/campaign.context'
import { Container } from '../styles/topNav.styled'
import ArrowDown from '../assets/icons/arrow-down.png'

const TopNav = () => {
  const router = useRouter()
  const context = useContext(CampaignContext)

  const [heading, setHeading] = useState('')
  const [notificationsToggle, setNotificationsToggle] = useState(false)
  const [accountToggle, setAccountToggle] = useState(false)
  
  useEffect(() => {
    if (router.pathname === '/home') setHeading('Home')
    if (router.pathname === '/campaigns') setHeading('Campaigns')
    if (router.pathname === '/newCampaign') setHeading('New Campaign')
    if (router.pathname === '/wallet') setHeading('Wallet')
    if (router.pathname === '/users') setHeading('Users')
  }, [])

  const handleNotificationsToggle = () => setNotificationsToggle(!notificationsToggle)
  const handleAccountToggle = () => setAccountToggle(!accountToggle)

  const handleNewCampaign = () => {
    if (router.pathname === '/newCampaign') context.page[1](1)
    else router.push('/newCampaign')
  }

  return (
    <Container>
      <h1>{heading}</h1>
      <nav>
        { router.pathname != '/newCampaign' ? (
          <button onClick={handleNewCampaign} className="p-new-campaign">+ New Campaign</button>
        ) : null }
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
