import { UserContextProvider } from '../context/user.context'
import { CampaignContextProvider } from '../context/campaign.context'
import '../styles/reset.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <CampaignContextProvider>
        <Component {...pageProps} />
      </CampaignContextProvider>
    </UserContextProvider>
  )
}