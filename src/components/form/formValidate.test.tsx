import { userNameValidate, feedbackTextValidate, dateBirthdayValidate } from './formValidate';

describe('check userNameValidate function', () => {
  test('case: unvalid - empty value', () => {
    expect(userNameValidate('')).toBe(false);
  });

  test('case: unvalid - 2 letter ', () => {
    expect(userNameValidate('An')).toBe(false);
  });

  test('case: unvalid - 21 letters', () => {
    expect(userNameValidate('Annnnnnnnnnnnnnnnnnnn')).toBe(false);
  });

  test('case: unvalid - first letter is in lowerCase', () => {
    expect(userNameValidate('ann')).toBe(false);
  });

  test('case: valid name value 3 letter', () => {
    expect(userNameValidate('Ann')).toBe(true);
  });

  test('case: valid name value 10 letters', () => {
    expect(userNameValidate('Anna-Maria')).toBe(true);
  });
});

describe('check feedbackTextValidate function', () => {
  test('case: unvalid - empty value', () => {
    expect(feedbackTextValidate('')).toBe(false);
  });
  test('case: unvalid - 4 words ', () => {
    expect(feedbackTextValidate('Anna go to the')).toBe(false);
  });
  test('case: unvalid - 51 words', () => {
    const words51 =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa numquam provident nisi ex ipsam repudiandae quam ut, hic rerum repellat sequi reprehenderit, magnam molestiae cupiditate porro autem est iusto eaque voluptate nihil ducimus saepe veniam! Repellendus, ullam voluptates consectetur facilis delectus deleniti maxime labore, aliquam fugit corrupti libero cupiditate jest?';
    expect(feedbackTextValidate(words51)).toBe(false);
  });

  test('case: valid 5 words', () => {
    expect(feedbackTextValidate('Anna go to the shop')).toBe(true);
  });
  test('case: valid 50 words', () => {
    const words50 =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa numquam provident nisi ex ipsam repudiandae quam ut, hic rerum repellat sequi reprehenderit, magnam molestiae cupiditate porro autem est iusto eaque voluptate nihil ducimus saepe veniam! Repellendus, ullam voluptates consectetur facilis delectus deleniti maxime labore, aliquam fugit corrupti libero cupiditate?';
    expect(feedbackTextValidate(words50)).toBe(true);
  });
});

describe('check dateBirthdayValidate function', () => {
  test('case: unvalid - empty value', () => {
    expect(dateBirthdayValidate('')).toBe(false);
  });
  test('case: unvalid - only 2 part of date ', () => {
    expect(dateBirthdayValidate('2012-12')).toBe(false);
  });
  test('case: unvalid - year < 1900', () => {
    expect(dateBirthdayValidate('1899-12-01')).toBe(false);
  });
  test('case: unvalid - year >= currentYear ', () => {
    const currentYear: number = new Date().getFullYear();
    const upperCurrentYear = currentYear + 1;
    expect(dateBirthdayValidate(`${upperCurrentYear}-12-01`)).toBe(false);
  });

  test('case: valid full date, year > 1900', () => {
    expect(dateBirthdayValidate('2012-05-12')).toBe(true);
  });
  test('case: valid full date and year <= currentYear ', () => {
    const currentYear: number = new Date().getFullYear();
    expect(dateBirthdayValidate(`${currentYear}-12-01`)).toBe(true);
  });
});
