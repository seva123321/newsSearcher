export const formatDateRange = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return `${startDate.toLocaleDateString('ru-RU', options)} - ${endDate.toLocaleDateString('ru-RU', options)}`;
};

export const formatDateOne = (isoString: string): string => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return date.toLocaleDateString('ru-RU', options);
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const validateStartsWithAt = (_: unknown, value: string) => {
  if (!value) {
    return Promise.reject(new Error('Пожалуйста, введите название канала'));
  }
  if (!value.startsWith('@')) {
    return Promise.reject(new Error('Слово должно начинаться с символа @'));
  }
  if (value.length < 2) {
    return Promise.reject(new Error('После @ должен быть хотя бы один символ'));
  }
  // Дополнительная валидация: только буквы, цифры и нижнее подчеркивание
  const regex = /^@[a-zA-Z0-9_]+$/;
  if (!regex.test(value)) {
    return Promise.reject(new Error('Допустимы только буквы, цифры и _'));
  }
  return Promise.resolve();
};
