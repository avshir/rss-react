export const userNameValidate = (value: string): boolean => {
  const userName: string = value.trim();
  const isValid: boolean = userName.length >= 3 && userName.length <= 20 && userName[0] === userName[0].toUpperCase();
  return isValid;
};

export const feedbackTextValidate = (value: string): boolean => {
  const feedbackText: string[] = value.trim().split(' ');
  const isValid: boolean = feedbackText.length >= 5 && feedbackText.length <= 50;
  return isValid;
};

export const dateBirthdayValidate = (value: string): boolean => {
  const date: string[] = value.split('-');
  const currentYear: number = new Date().getFullYear();
  const isValid: boolean = date.length === 3 && +date[0] >= 1900 && +date[0] <= currentYear;
  return isValid;
};
