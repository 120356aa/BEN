import { createContext, useState } from 'react';

export const CampaignContext = createContext()

export const CampaignContextProvider = props => {
  const [page, setPage] = useState(1);
  const [adName, setAdName] = useState('');
  const [adType, setAdType] = useState('');
  const [offerType, setOfferType] = useState('amount');
  const [offerAmount, setOfferAmount] = useState('');
  const [offerAmountType, setOfferAmountType] = useState(false);
  const [offerHeadline, setOfferHeadline] = useState('');
  const [offerStart, setOfferStart] = useState('');
  const [offerEnd, setOfferEnd] = useState('');
  const [offerAbout, setOfferAbout] = useState('');
  const [offerRequirements, setOfferRequirements] = useState('');
  const [adAddress, setAdAddress] = useState('');
  const [adNeighborhood, setAdNeighborhood] = useState('');
  const [adCity, setAdCity] = useState('');
  const [adRegion, setAdRegion] = useState('');
  const [adCountry, setAdCountry] = useState('');
  const [adPhone, setAdPhone] = useState('');
  const [adWeb, setAdWeb] = useState('');
  const [hasApp, setHasApp] = useState(false);
  const [appleLink, setAppleLink] = useState('');
  const [googleLink, setGoogleLink] = useState('');
  const [addressInputToggle, setAddressInputToggle] = useState(false);
  const [callsInputToggle, setCallsInputToggle] = useState(false);
  const [webInputToggle, setWebInputToggle] = useState(false);
  const [popup, setPopup] = useState('');
  return (
    <CampaignContext.Provider
      value={{
        page: [page ,setPage],
        adName: [adName, setAdName],
        adType: [adType, setAdType],
        offerType: [offerType, setOfferType],
        offerAmount: [offerAmount, setOfferAmount],
        offerAmountType: [offerAmountType, setOfferAmountType],
        offerHeadline: [offerHeadline, setOfferHeadline],
        offerStart: [offerStart, setOfferStart],
        offerEnd: [offerEnd, setOfferEnd],
        offerAbout: [offerAbout, setOfferAbout],
        offerRequirements: [offerRequirements, setOfferRequirements],
        adAddress: [adAddress, setAdAddress],
        adNeighborhood: [adNeighborhood, setAdNeighborhood],
        adCity: [adCity, setAdCity],
        adRegion: [adRegion, setAdRegion],
        adCountry: [adCountry, setAdCountry],
        adPhone: [adPhone, setAdPhone],
        adWeb: [adWeb, setAdWeb],
        hasApp: [hasApp, setHasApp],
        appleLink: [appleLink, setAppleLink],
        googleLink: [googleLink, setGoogleLink],
        addressInputToggle: [addressInputToggle, setAddressInputToggle],
        callsInputToggle: [callsInputToggle, setCallsInputToggle],
        webInputToggle: [webInputToggle, setWebInputToggle],
        popup: [popup, setPopup]
      }}>
      {props.children}
    </CampaignContext.Provider>
  )
}