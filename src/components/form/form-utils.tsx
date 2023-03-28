export type FormErrors = {
  userName: string;
  country?: string;
  birthday?: string;
  feedbackText?: string;
  imageSrc?: string;
  isConsent?: string;
};

export const errorTextMessage: FormErrors = {
  userName: 'Enter correct user-name! 3-20 characters',
  country: 'Choose country!',
  birthday: 'Enter date of your birthday',
  feedbackText: 'Write a review of at least 5 words, max 50!',
  isConsent: 'This field is required for send feedback',
  imageSrc: 'Add image file!',
};
