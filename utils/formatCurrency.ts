export const formatCurrency = (amount: number | string) => {
  if (typeof amount === 'string') {
    amount = parseFloat(amount);
  }

  return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
