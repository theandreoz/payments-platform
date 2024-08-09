import GetStarted from '../components/GetStarted';
import StartUpRental from '../components/StartUpRental';
import SpecifyAddress from '../components/SpecifyAddress';
import SpecifyRentAmount from '../components/SpecifyRentAmount';
import SpecifyPayDate from '../components/SpecifyPayDate';
import RentalTermsConfirmation from '../components/RentalTermsConfirmation';

const stagesNames = {
  getStarted: 'getStarted',
  startUpRental: 'startUpRental',
  specifyAddress: 'specifyAddress',
  specifyRentAmount: 'specifyRentAmount',
  specifyPayDate: 'specifyPayDate',
  rentalTermsConfirmation: 'rentalTermsConfirmation',
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
    nextStage: null,
    prevStage: stagesNames.specifyPayDate,
  },
};

export const countries = [
  { name: 'United States', acronym: 'US' },
  { name: 'Mexico', acronym: 'MX' },
  { name: 'Canada', acronym: 'CA' },
  { name: 'United Kingdom', acronym: 'UK' },
  { name: 'Germany', acronym: 'DE' },
  { name: 'France', acronym: 'FR' },
  { name: 'Japan', acronym: 'JP' },
  { name: 'Australia', acronym: 'AU' },
  { name: 'New Zealand', acronym: 'NZ' },
  { name: 'Sweden', acronym: 'SE' },
  { name: 'Norway', acronym: 'NO' },
  { name: 'Denmark', acronym: 'DK' },
  { name: 'Finland', acronym: 'FI' },
  { name: 'Netherlands', acronym: 'NL' },
  { name: 'Switzerland', acronym: 'CH' },
  { name: 'Austria', acronym: 'AT' },
  { name: 'Belgium', acronym: 'BE' },
  { name: 'Italy', acronym: 'IT' },
  { name: 'Spain', acronym: 'ES' },
  { name: 'South Korea', acronym: 'KR' },
  { name: 'Singapore', acronym: 'SG' },
];
