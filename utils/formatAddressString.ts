import { Address } from '@/types/Address';

export const formatAddressString = (address: Address) => {
  return `${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
};
