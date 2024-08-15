import { Address } from './Address';

export interface RentalProperty {
  id?: string;
  address: Address;
  paymentDate: number;
  paymentMethod: string;
  propertyType: string;
  rentAmount: string;
}
