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
