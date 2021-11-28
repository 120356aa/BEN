import { useContext } from "react"
import Layout from "../components/layout"
import { CampaignContext } from "../context/campaign.context"
import CampaignTitle from "../components/campaign/CampaignTitle"

export default function newCampaign() {
  const context = useContext(CampaignContext)

  switch (context.page[0]) {
    case (1):
      return (
        <Layout>
          <CampaignTitle />
        </Layout>
      )
  }
}

