import { ICardForm } from '../components/form/cardForm/cardForm';

export const testCardsForm: ICardForm[] = [
  {
    id: '101',
    userName: 'Ivan Bobrov',
    gender: 'male',
    birthday: '21.02.1980',
    country: 'Poland',
    isConsentPersonalData: true,
    feedbackText: 'Lorem ipsum dolor',
    imageSrc: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
  },
  {
    id: '102',
    userName: 'ALen Koch',
    gender: 'female',
    birthday: '21.02.1990',
    country: 'German',
    isConsentPersonalData: true,
    feedbackText: 'Lorem ipsum dolor, sit.',
    imageSrc: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
  },
  {
    id: '103',
    userName: 'Anna Sh',
    gender: 'female',
    birthday: '21.02.2222',
    country: 'Belarus',
    isConsentPersonalData: true,
    feedbackText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    imageSrc: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
  },
];
