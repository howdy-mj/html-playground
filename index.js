window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

document.addEventListener('readystatechange', (event) => {
  console.log('DOM readystatechange');
});

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});
