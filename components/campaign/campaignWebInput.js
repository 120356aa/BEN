import { useState, useContext } from 'react'
import { CampaignContext } from '../../context/campaign.context'
import { Container } from '../../styles/campaign/campaignWebInput.styled'
import { NextButton } from '../../styles/nextButton.styled'

const CampaignWebInput = ({ setWebInputToggle }) => {
  const context = useContext(CampaignContext)
  const [webNullErr, setWebNullErr] = useState(false)
  const [appleNullErr, setAppleNullErr] = useState(false)
  const [googleNullErr, setGoogleNullErr] = useState(false)

  const handleSetAdAppleLink = (e) => context.appleLink[1](e.target.value)
  const handleSetAdGoogleLink = (e) => context.googleLink[1](e.target.value)

  const exitAdWebInput = () => {
    setWebInputToggle(false)
    context.adType[1]('')
    context.adWeb[1]('')
    context.googleLink[1]('')
    context.appleLink[1]('')
  }

  const handleSetAdWeb = (e) => {
    context.adWeb[1](e.target.value)
    if (e.target.value) {
      setWebNullErr(false)
    } else setWebNullErr(true)
  }
  
  const handleSubmit = () => {
    if (context.adWeb[0].length) {
      if (context.hasApp[0]) {
        if (context.appleLink[0] || context.googleLink[0]) setWebInputToggle(false)
        else {
          if (!context.appleLink[0].length) setAppleNullErr(true)
          if (!context.googleLink[0].length) setGoogleNullErr(true)
        }
      } else setWebInputToggle(false)
    } else setWebNullErr(true)
  }

  return (
    <Container>
      <div className="bg"></div>
      <div className="content">
        <h3>What is your website address?</h3>
        <button className="exit-button" onClick={exitAdWebInput}>X</button>

        <div className="form">
          { webNullErr ? <p className="form-error">Required Field</p> : null }
          <div className={!webNullErr ? 'input-container' : 'input-container error' }>
            <div className="icon"></div>
            <input
              type="text"
              value={ context.adWeb[0] }
              placeholder="Website address.."
              onChange={(e) => handleSetAdWeb(e)} />
          </div>
        </div>

        <div className="form">
          <h5>Do you have a mobile App?</h5>
          <div className="radio-button-container">
            <button className="radio-button" onClick={() => context.hasApp[1](false)}>
              <p>No</p>
              <div className="radio-btn-circle">
                <div className={ !context.hasApp[0] ? 'radio-btn-circle-inner' : 'radio-btn-circle-inner hidden'}></div>
              </div>
            </button>
            <button className="radio-button" onClick={() => context.hasApp[1](true)}>
              <p>Yes</p>
              <div className="radio-btn-circle">
              <div className={ context.hasApp[0] ? 'radio-btn-circle-inner' : 'radio-btn-circle-inner hidden'}></div>
              </div>
            </button>
          </div>
          { appleNullErr || googleNullErr ? <p className="form-error lower-form-error">At least one required</p> : null }
          { context.hasApp[0] ? (
            <div className="form lower-form">
              <div className="input-container">
                <div className="icon"></div>
                <input
                  className={!appleNullErr ? 'input' : 'input error' }
                  type="text"
                  placeholder="Apple Store Link"
                  value={ context.appleLink[0] }
                  onChange={(e) => handleSetAdAppleLink(e)} />
              </div>
              <div className="input-container google">
                <div className="icon"></div>
                <input
                  className={!googleNullErr ? 'input' : 'input error' }
                  type="text"
                  value={ context.googleLink[0] }
                  placeholder="Google Play Link"
                  onChange={(e) => handleSetAdGoogleLink(e)} />
              </div>
            </div>
          ) : null }
        </div>
        <NextButton onClick={handleSubmit}>Submit</NextButton>
      </div>
    </Container>
  )
}

export default CampaignWebInput