export default function updateDate() {
  document.querySelector('.date').innerHTML = new Date().toString();
}