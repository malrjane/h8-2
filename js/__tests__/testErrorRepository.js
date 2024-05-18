import ErrorRepository from "../index";

test('возвращает текст ошибки из перечня', () => {
  const errors = new ErrorRepository(111, 'unsuccess');

  console.log(errors);
  expect(errors.translate(111)).toBe('unsuccess');
});

test('отсутствие кода ошибки', () => {
  const errors = new ErrorRepository(111, 'unsuccess');

  expect(errors.translate(222)).toBe('Unknown error');
});
