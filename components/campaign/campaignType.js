import { useContext, useState } from 'react'
import { CampaignContext } from '../../context/campaign.context'
import { Container } from '../../styles/campaign/campaignType.styled'
import { NextButton } from '../../styles/nextButton.styled'
import CampaignAddressInput from './campaignAddressInput'
import CampaignPhoneInput from './campaignPhoneInput'
import CampaignWebInput from './campaignWebInput'

const CampaignType = () => {
  const context = useContext(CampaignContext)
  const [missingErr, setMissingErr] = useState(false)
  const [addressInputToggle, setAddressInputToggle] = useState(false)
  const [phoneInputToggle, setPhoneInputToggle] = useState(false)
  const [webInputToggle, setWebInputToggle] = useState(false)
 
  const togglePhysical = () => {
    setAddressInputToggle(true)
    setMissingErr(false)
    context.adType[1]('physical')
  }

  const toggleCalls = () => {
    setPhoneInputToggle(true)
    setMissingErr(false)
    context.adType[1]('calls')
  }

  const toggleWeb = () => {
    setWebInputToggle(true)
    setMissingErr(false);
    context.adType[1]('web')
  }

  const handleNext = () => {
    if (context.adType[0].length) {
      if (context.adType[0] === 'physical') {
        if (
          context.adAddress[0].length &&
          context.adNeighborhood[0].length &&
          context.adCity[0].length &&
          context.adRegion[0].length &&
          context.adCountry[0].length
        ) context.page[1](context.page[0] + 1) 
        else setAddressInputToggle(true)
      }

      if (context.adType[0] === 'calls') {
        if (context.adPhone[0].length) {
          context.page[1](context.page[0] + 1)
        } else setPhoneInputToggle(true)
      }

      if (context.adType[0] === 'web') {
        if (context.adWeb[0].length) {
          if (!context.hasApp[0]) {
            context.page[1](context.page[0] + 1) 
          } else {
            if (context.appleLink[0].length || context.googleLink[0].length) {
              context.page[1](context.page[0] + 1)
            } else setPhoneInputToggle(true)
          }
        } else setWebInputToggle(true)
      }
    } else setMissingErr(true)
  }

  return (
    <Container>
      <div className="heading">
        <h2>What are you looking to get out of your Radio Advertisement?</h2>
      </div>
      <div className="content">
        { addressInputToggle ? <CampaignAddressInput setAddressInputToggle={setAddressInputToggle} /> : null }
        { phoneInputToggle ? <CampaignPhoneInput /> : null }
        { webInputToggle ? <CampaignWebInput /> : null }
        { missingErr ? <p className="form-error">Please select an option</p> : null }
        <div className="button-container">
          <button onClick={togglePhysical}>
            <div className="btnHeading">
              <div className="btnImg"></div>
              <h5>Get more traffic to my physical location</h5>
            </div>
            <div className="radioBtn">
              <div
                className={
                  context.adType[0] === 'physical' ?
                  'radioBtnInner' :
                  'radioBtnInner hidden'}>
              </div>
            </div>
          </button>
          <button onClick={toggleCalls}>
          <div className="btnHeading">
              <div className="btnImg"></div>
              <h5>More Calls</h5>
            </div>
            <div className="radioBtn">
              <div
                className={
                  context.adType[0] === 'calls' ?
                  'radioBtnInner' :
                  'radioBtnInner hidden'}>
              </div> 
            </div>
          </button>
          <button onClick={toggleWeb}>
          <div className="btnHeading">
              <div className="btnImg"></div>
              <h5>Website or Mobile Traffic</h5>
            </div>
            <div className="radioBtn">
              <div
                className={
                  context.adType[0] === 'web' ?
                  'radioBtnInner' :
                  'radioBtnInner hidden'}>
              </div>
            </div>
          </button>
        </div>
      </div>
      <NextButton onClick={handleNext}>Next</NextButton>
    </Container>
  )
}

export default CampaignType