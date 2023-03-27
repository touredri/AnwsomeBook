import { DateTime } from 'luxon';

export default function updateDate() {
  const dateTime = DateTime.now();
  const customFormat = dateTime.toFormat('MMMM dd, yyyy');
  // display the formatted date in an HTML element
  const element = document.querySelector('.date');
  if (element !== null) {
    element.textContent = customFormat;
  }
}
