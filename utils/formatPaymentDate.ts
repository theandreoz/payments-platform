export const formatPaymentDate = (paymentDate: number) => {
  if (paymentDate % 10 === 1 && paymentDate !== 11) {
    return `${paymentDate}st`;
  } else if (paymentDate % 10 === 2 && paymentDate !== 12) {
    return `${paymentDate}nd`;
  } else if (paymentDate % 10 === 3 && paymentDate !== 13) {
    return `${paymentDate}rd`;
  } else {
    return `${paymentDate}th`;
  }
};
