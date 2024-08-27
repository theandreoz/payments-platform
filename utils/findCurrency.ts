import { countries } from '@/app/new-user/constants/constants';

export const findCurrency = (country: string, uppercase = false) => {
  const match = countries.find((countryObj) => countryObj.name === country);

  if (!match) {
    return 'NA';
  }

  return uppercase ? match.currency.toUpperCase() : match.currency;
};
