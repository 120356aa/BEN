import { useState, useContext } from 'react'
import { CampaignContext } from '../../context/campaign.context'
import { Container } from '../../styles/campaign/campaignPhoneInput.styled'
import { NextButton } from '../../styles/nextButton.styled'

const CampaignPhoneInput = ({ setPhoneInputToggle }) => {
  const context = useContext(CampaignContext)
  const [phoneNullErr, setPhoneNullErr] = useState(false)
  const [phoneRegexErr, setPhoneRegexErr] = useState(false)

  const exitAdCallsInput = () => {
    setPhoneInputToggle(false)
    context.adType[1]('')
    context.adPhone[1]('')
  } 

  const handleSetAdPhone = (e) => {
    const regex = /^[0-9-+(.)]*$/
    const regMatch = e.target.value.match(regex)

    context.adPhone[1](e.target.value)

    if (e.target.value) {
      setPhoneNullErr(false)
      if (regMatch) setPhoneRegexErr(false)
      else setPhoneRegexErr(true)
    } else setPhoneNullErr(false)
  }

  const handleSubmit = () => {
    if (context.adPhone[0].length) {
      setPhoneNullErr(false)
      if (!phoneRegexErr) setPhoneInputToggle(false)
    } else setPhoneNullErr(true)
  }

  return (
    <Container>
      <div className="bg"></div>
      <div className="content">
        <h3>What phone number would you like your listeners to call?</h3>
        <button className="exit-button" onClick={exitAdCallsInput}>X</button>

        <div className="form">
          { phoneNullErr ? <p className="form-error">Please complete the form</p> : null }
          { phoneRegexErr ? <p className="form-error">Invalid Entry</p> : null }
          <div className={!phoneRegexErr && !phoneNullErr ? 'input-container' : 'input-container error' }>
            <div className="phoneIcon"></div>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={ context.adPhone[0] }
              onChange={(e) => handleSetAdPhone(e)} />  
          </div>
        </div>
        <NextButton onClick={handleSubmit}>Submit</NextButton>
      </div>
    </Container>
  )
}

export default CampaignPhoneInput