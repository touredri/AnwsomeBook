import { DateTime } from './luxon.js';

const updateDate = () => {
  // display the formatted date in an HTML element
  const element = document.querySelector('.date');
  if (element !== null) {
    element.textContent = DateTime.now().toFormat('MMMM dd, yyyy');
  }
};
export default updateDate;
