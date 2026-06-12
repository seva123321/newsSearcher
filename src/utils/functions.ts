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
