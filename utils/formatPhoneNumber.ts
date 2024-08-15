export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/[^+\d]/g, '');

  const match = cleaned.match(/^\+(\d)(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    const intlCode = match[1];
    const areaCode = match[2];
    const firstPart = match[3];
    const secondPart = match[4];

    return `+${intlCode} (${areaCode}) ${firstPart}-${secondPart}`;
  }

  return phoneNumber;
};
