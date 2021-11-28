import { useContext } from 'react'
import Layout from '../components/layout'
import { CampaignContext } from '../context/campaign.context'
import CampaignTitle from '../components/campaign/campaignTitle'
import CampaignType from '../components/campaign/campaignType'

export default function NewCampaign() {
  const context = useContext(CampaignContext)
  console.log(context.page[0])

  switch (context.page[0]) {
    case (1):
      return (
        <Layout>
          <CampaignTitle />
        </Layout>
      )
    case (2):
      return (
        <Layout>
          <CampaignType />
        </Layout>
      )
  }
}

