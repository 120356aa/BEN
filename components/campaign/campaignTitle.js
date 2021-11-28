import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { CampaignContext } from '../../context/campaign.context'
import { Container } from '../../styles/campaign/campaignTitle.styled'
import { NextButton } from '../../styles/nextButton.styled'

const CampaignTitle = () => {
  const context = useContext(CampaignContext)

  const [campaignTitleNullErr, setCampaignTitleNullErr] = useState(false)
  const [cmapaignTitleRegexErr, setCampaignTitleRegexErr] = useState(false)

  const handleInput = (e) => {
    const regex = /^([a-zA-Z0-9 _-]+)$/
    const regMatch = e.target.value.match(regex)
    
    context.adName[1](e.target.value)

    if (e.target.value) {
      setCampaignTitleNullErr(false)
      if (regMatch) setCampaignTitleRegexErr(false)
      else setCampaignTitleRegexErr(true)
    } else setCampaignTitleRegexErr(false)
  }

  const handleNext = () => {
    if (context.adName[0].length) {
      if (!cmapaignTitleRegexErr) {
        context.page[1](context.page[0] + 1) 
      }
    } else setCampaignTitleNullErr(true)
  }

  return (
    <Container>
      <div className="heading">
        <h2>What is the name of your Radio Advertisement?</h2>
        <p>
          This name is only visible to you.<br/>
          It will help keep you organized if
          you plan to run multiple ads.
        </p>
      </div>
      <div className="content">
        { campaignTitleNullErr ? <p className="form-error">Please complete the form</p> : null }
        { cmapaignTitleRegexErr ? <p className="form-error">Invalid Entry</p> : null }
        <input
          className={!cmapaignTitleRegexErr && !campaignTitleNullErr ? 'input' : 'input error' }
          type="text"
          placeholder="Enter your ad name here..."
          onChange={(e) => handleInput(e)}
        />
      </div>
      <NextButton onClick={handleNext}>Next</NextButton>
    </Container>
  )
}

export default CampaignTitle