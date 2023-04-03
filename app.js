const boxToggle = document.querySelector('#toggle');
const boxContent = document.querySelector('#content');

boxToggle.addEventListener('click', () => {
    if (boxContent.style.display === 'none') {
      boxContent.style.display = 'block';
      boxToggle.textContent = 'Click Here';
    } else {
      boxContent.style.display = 'none';
      boxToggle.textContent = 'Click Here';
    }
  });

// const boxToggleTwo = document.querySelector('#toggle-two');
// const boxContentTwo = document.querySelector('#content-two');

// boxToggle.addEventListener('click', () => {
//     if (boxContent.style.display === 'none') {
//       boxContent.style.display = 'block';
//       boxToggle.textContent = 'Click';
//     } else {
//       boxContent.style.display = 'none';
//       boxToggle.textContent = 'Click';
//     }
//   });