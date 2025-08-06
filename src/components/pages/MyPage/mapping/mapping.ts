export function getPlanPeriod(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffDay = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  return {
    startMonth: start.getMonth() + 1,
    endMonth: end.getMonth() + 1,
    startDay: start.getDate(),
    endDay: end.getDate(),
    startDayOfWeek: ['일','월','화','수','목','금','토'][start.getDay()],
    endDayOfWeek: ['일','월','화','수','목','금','토'][end.getDay()],
    diffDay,
  };
}

export function getDDay(startDate: string) {
  const start = new Date(startDate);
  return Math.ceil((start.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}