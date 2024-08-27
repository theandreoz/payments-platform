import GetStarted from '../components/GetStarted';
import StartUpRental from '../components/StartUpRental';
import SpecifyAddress from '../components/SpecifyAddress';
import SpecifyRentAmount from '../components/SpecifyRentAmount';
import SpecifyPayDate from '../components/SpecifyPayDate';
import RentalTermsConfirmation from '../components/RentalTermsConfirmation';
import SelectPaymentMethod from '../components/SelectPaymentMethod';
import CreditCardDetails from '../components/CreditCardDetails';
import LandlordInformation from '../components/LandlordInformation';
import LandlordInformationConfirmation from '../components/LandlordInformationConfirmation';
import OnboardingCompleted from '../components/OnboardingCompleted';

const stagesNames = {
  getStarted: 'getStarted',
  startUpRental: 'startUpRental',
  specifyAddress: 'specifyAddress',
  specifyRentAmount: 'specifyRentAmount',
  specifyPayDate: 'specifyPayDate',
  rentalTermsConfirmation: 'rentalTermsConfirmation',
  selectPaymentMethod: 'selectPaymentMethod',
  creditCardDetails: 'creditCardDetails',
  landlordInformation: 'landlordInformation',
  landlordInformationConfirmation: 'landlordInformationConfirmation',
  onboardingCompleted: 'onboardingCompleted',
};

export const stages: { [key: string]: any } = {
  getStarted: {
    progress: 0,
    component: GetStarted,
    name: stagesNames.getStarted,
    nextStage: stagesNames.startUpRental,
    prevStage: null,
  },
  startUpRental: {
    progress: 10,
    component: StartUpRental,
    name: stagesNames.startUpRental,
    nextStage: stagesNames.specifyAddress,
    prevStage: stagesNames.getStarted,
  },
  specifyAddress: {
    progress: 20,
    component: SpecifyAddress,
    name: stagesNames.specifyAddress,
    nextStage: stagesNames.specifyRentAmount,
    prevStage: stagesNames.startUpRental,
  },
  specifyRentAmount: {
    progress: 30,
    component: SpecifyRentAmount,
    name: stagesNames.specifyRentAmount,
    nextStage: stagesNames.specifyPayDate,
    prevStage: stagesNames.specifyAddress,
  },
  specifyPayDate: {
    progress: 40,
    component: SpecifyPayDate,
    name: stagesNames.specifyPayDate,
    nextStage: stagesNames.rentalTermsConfirmation,
    prevStage: stagesNames.specifyRentAmount,
  },
  rentalTermsConfirmation: {
    progress: 50,
    component: RentalTermsConfirmation,
    name: stagesNames.rentalTermsConfirmation,
    nextStage: stagesNames.selectPaymentMethod,
    prevStage: stagesNames.specifyPayDate,
  },
  selectPaymentMethod: {
    progress: 60,
    component: SelectPaymentMethod,
    name: stagesNames.selectPaymentMethod,
    nextStage: stagesNames.creditCardDetails,
    prevStage: stagesNames.rentalTermsConfirmation,
  },
  creditCardDetails: {
    progress: 70,
    component: CreditCardDetails,
    name: stagesNames.creditCardDetails,
    nextStage: stagesNames.landlordInformation,
    prevStage: stagesNames.selectPaymentMethod,
  },
  landlordInformation: {
    progress: 80,
    component: LandlordInformation,
    name: stagesNames.landlordInformation,
    nextStage: stagesNames.landlordInformationConfirmation,
    prevStage: stagesNames.creditCardDetails,
  },
  landlordInformationConfirmation: {
    progress: 90,
    component: LandlordInformationConfirmation,
    name: stagesNames.landlordInformationConfirmation,
    nextStage: stagesNames.onboardingCompleted,
    prevStage: stagesNames.landlordInformation,
  },
  onboardingCompleted: {
    progress: 100,
    component: OnboardingCompleted,
    name: stagesNames.onboardingCompleted,
    nextStage: null,
    prevStage: stagesNames.landlordInformation,
  },
};

export const countries = [
  { name: 'Canada', acronym: 'CA', flag: '🇨🇦', code: '+1', currency: 'cad' },
  // { name: 'United States', acronym: 'US', flag: '🇺🇸', code: '+1', currency: 'usd' },
  { name: 'Mexico', acronym: 'MX', flag: '🇲🇽', code: '+52', currency: 'mxn' },
  {
    name: 'United Kingdom',
    acronym: 'UK',
    flag: '🇬🇧',
    code: '+44',
    currency: 'gbp',
  },
  { name: 'Germany', acronym: 'DE', flag: '🇩🇪', code: '+49', currency: 'eur' },
  { name: 'France', acronym: 'FR', flag: '🇫🇷', code: '+33', currency: 'eur' },
  { name: 'Japan', acronym: 'JP', flag: '🇯🇵', code: '+81', currency: 'jpy' },
  {
    name: 'Australia',
    acronym: 'AU',
    flag: '🇦🇺',
    code: '+61',
    currency: 'aud',
  },
  {
    name: 'New Zealand',
    acronym: 'NZ',
    flag: '🇳🇿',
    code: '+64',
    currency: 'nzd',
  },
  { name: 'Sweden', acronym: 'SE', flag: '🇸🇪', code: '+46', currency: 'sek' },
  { name: 'Norway', acronym: 'NO', flag: '🇳🇴', code: '+47', currency: 'nok' },
  { name: 'Denmark', acronym: 'DK', flag: '🇩🇰', code: '+45', currency: 'dkk' },
  {
    name: 'Netherlands',
    acronym: 'NL',
    flag: '🇳🇱',
    code: '+31',
    currency: 'eur',
  },
  {
    name: 'Switzerland',
    acronym: 'CH',
    flag: '🇨🇭',
    code: '+41',
    currency: 'chf',
  },
  { name: 'Austria', acronym: 'AT', flag: '🇦🇹', code: '+43', currency: 'eur' },
  { name: 'Belgium', acronym: 'BE', flag: '🇧🇪', code: '+32', currency: 'eur' },
  { name: 'Italy', acronym: 'IT', flag: '🇮🇹', code: '+39', currency: 'eur' },
  { name: 'Spain', acronym: 'ES', flag: '🇪🇸', code: '+34', currency: 'eur' },
  {
    name: 'South Korea',
    acronym: 'KR',
    flag: '🇰🇷',
    code: '+82',
    currency: 'krw',
  },
  {
    name: 'Singapore',
    acronym: 'SG',
    flag: '🇸🇬',
    code: '+65',
    currency: 'sgd',
  },
  { name: 'Finland', acronym: 'FI', flag: '🇫🇮', code: '+358', currency: 'eur' },
];
