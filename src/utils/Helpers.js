export const formatPrice = price => `${price.toFixed(2)} zl`;

export const checkPostalCode = postalCode => {
  const regex = /^\d\d-\d\d\d$/;
  return regex.test(postalCode);
};

export const checkValidStreet = street => {
  const regex = /[a-z]\s[0-9]/g;
  return regex.test(street);
};
