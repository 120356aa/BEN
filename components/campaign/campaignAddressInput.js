import { useState, useContext } from 'react'
import { CampaignContext } from '../../context/campaign.context'
import { Container } from '../../styles/campaign/campaignAddressInput.styled'
import { NextButton } from '../../styles/nextButton.styled'

const CampaignAddressInput = ({ setAddressInputToggle }) => {
  const context = useContext(CampaignContext)
  const [addressNullErr, setAddressNullErr] = useState(false)
  const [addressRegexErr, setAddressRegexErr] = useState(false)
  const [neighborhoodNullErr, setNeighborhoodNullErr] = useState(false)
  const [neighborhoodRegexErr, setNeighborhoodRegexErr] = useState(false)
  const [cityNullErr, setCityNullErr] = useState(false)
  const [cityRegexErr, setCityRegexErr] = useState(false)
  const [regionNullErr, setRegionNullErr] = useState(false)
  const [regionRegexErr, setRegionRegexErr] = useState(false)
  const [countryNullErr, setCountryNullErr] = useState(false)
  const [countryRegexErr, setCountryRegexErr] = useState(false)

  const addressRegex = /^[a-zA-Z\s\d\/]+$/
  const letterRegex = /^[a-zA-Z\s]*$/

  const exitAdAddressInput = () => {
    setAddressInputToggle(false)
    context.adType[1]('')
    context.adAddress[1]('')
    context.adNeighborhood[1]('')
    context.adCity[1]('')
    context.adRegion[1]('')
    context.adCountry[1]('')
  } 

  const handleSetAdAddress = (e) => {
    const addressRegMatch = e.target.value.match(addressRegex)
    context.adAddress[1](e.target.value)

    if (e.target.value) {
      setAddressNullErr(false)
      if (addressRegMatch) setAddressRegexErr(false)
      else setAddressRegexErr(true)
    } else setAddressRegexErr(false)
  }

  const handleSetAdNeighborhood = (e) => {
    const neighborhoodRegMatch = e.target.value.match(letterRegex)
    context.adNeighborhood[1](e.target.value)

    if (e.target.value) {
      setNeighborhoodNullErr(false)
      if (neighborhoodRegMatch) setNeighborhoodRegexErr(false)
      else setNeighborhoodRegexErr(true)
    } else setNeighborhoodRegexErr(false)
  }

  const handleSetAdCity = (e) => {
    const cityRegMatch = e.target.value.match(letterRegex)
    context.adCity[1](e.target.value)

    if (e.target.value) {
      setCityNullErr(false)
      if (cityRegMatch) setCityRegexErr(false)
      else setCityRegexErr(true)
    } else setCityRegexErr(false)
  }

  const handleSetAdRegion = (e) => {
    const regionRegMatch = e.target.value.match(letterRegex)
    context.adRegion[1](e.target.value)

    if (e.target.value) {
      setRegionNullErr(false)
      if (regionRegMatch) setRegionRegexErr(false)
      else setRegionRegexErr(true)
    } else setRegionRegexErr(false)
  } 

  const handleSetAdCountry = (e) => {
    const countryRegMatch = e.target.value.match(letterRegex)
    context.adCountry[1](e.target.value)

    if (e.target.value) {
      setCountryNullErr(false)
      if (countryRegMatch) setCountryRegexErr(false)
      else setCountryRegexErr(true)
    } else setCountryRegexErr(false)
  }

  const handleSubmit = () => {
    if (
      context.adAddress[0].length &&
      context.adNeighborhood[0].length &&
      context.adCity[0].length &&
      context.adRegion[0].length &&
      context.adCountry[0].length
    ) {
      if (
        !addressRegexErr &&
        !neighborhoodRegexErr &&
        !cityRegexErr &&
        !regionRegexErr &&
        !countryRegexErr
      ) setAddressInputToggle(false)
    }
    else {
      if (!context.adAddress[0].length) setAddressNullErr(true)
      if (!context.adNeighborhood[0].length) setNeighborhoodNullErr(true)
      if (!context.adCity[0].length) setCityNullErr(true)
      if (!context.adRegion[0].length) setRegionNullErr(true)
      if (!context.adCountry[0].length) setCountryNullErr(true)
    }
  }

  return (
    <Container>
      <div className="bg"></div>
      <div className="content">
          <h3>Enter you business location</h3>
          <button className="exit-button" onClick={exitAdAddressInput}>X</button>
          <div className="form">
            { addressNullErr ? <p className="form-error">Required Field</p>: null }
            { addressRegexErr ? <p className="form-error">Invalid Entry</p> : null }
            <input
              className={!addressNullErr && !addressRegexErr ? 'input' : 'input error' }
              type="text"
              value={ context.adAddress[0] }
              placeholder="Address"
              onChange={(e) => handleSetAdAddress(e)} />
            { neighborhoodNullErr ? <p className="form-error">Required Field</p>: null }
            { neighborhoodRegexErr ? <p className="form-error">Invalid Entry</p> : null }
            <input
              className={!neighborhoodNullErr && !neighborhoodRegexErr ? 'input' : 'input error' }
              type="text"
              value={ context.adNeighborhood[0] }
              placeholder="Neighborhood"
              onChange={(e) => handleSetAdNeighborhood(e)} />
            { cityNullErr ? <p className="form-error">Required Field</p>: null }
            { cityRegexErr ? <p className="form-error">Invalid Entry</p> : null }
            <input
              className={!cityNullErr && !cityRegexErr ? 'input' : 'input error' }
              type="text"
              value={ context.adCity[0] }
              placeholder="City"
              onChange={(e) => handleSetAdCity(e)} />
            { regionNullErr ? <p className="form-error">Required Field</p>: null }
            { regionRegexErr ? <p className="form-error">Invalid Entry</p> : null }
            <input
              className={!regionNullErr && !regionRegexErr ? 'input' : 'input error' }
              type="text"
              value={ context.adRegion[0] }
              placeholder="Region"
              onChange={(e) => handleSetAdRegion(e)} />
            { countryNullErr ? <p className="form-error">Required Field</p>: null }
            { countryRegexErr ? <p className="form-error">Invalid Entry</p> : null }
            <input 
              className={!countryNullErr && !countryRegexErr ? 'input' : 'input error' }
              type="text"
              value={ context.adCountry[0] }
              placeholder="Country"
              onChange={(e) => handleSetAdCountry(e)} />
            <NextButton onClick={handleSubmit}>Submit</NextButton>
          </div>
        </div>
    </Container>
  )
}

export default CampaignAddressInput