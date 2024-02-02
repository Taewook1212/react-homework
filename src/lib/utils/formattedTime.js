export function formattedTime(time) {
  const dateObj = new Date();
  const [hours, minutes] = time.split(':');
  dateObj.setHours(hours);
  dateObj.setMinutes(minutes);

  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedTime = dateObj.toLocaleString('ko-KR', options);

  return formattedTime;
}
