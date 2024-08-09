import { formatPaymentDate } from './formatPaymentDate';

export const formatPaymentDateForConfirmation = (paymentDate: number) => {
  return formatPaymentDate(paymentDate) + ' of the month';
};
