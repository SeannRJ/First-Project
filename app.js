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

const boxToggleTwo = document.querySelector('#toggle-two');
const boxContentTwo = document.querySelector('#content-two');

boxToggleTwo.addEventListener('click', () => {
    if (boxContentTwo.style.display === 'none') {
      boxContentTwo.style.display = 'block';
      boxToggleTwo.textContent = 'Click';
    } else {
      boxContentTwo.style.display = 'none';
      boxToggleTwo.textContent = 'Click';
    }
  });

  const boxToggleThree = document.querySelector('#toggle-three');
  const boxContentThree = document.querySelector('#content-three');
  
  boxToggleThree.addEventListener('click', () => {
      if (boxContentThree.style.display === 'none') {
        boxContentThree.style.display = 'block';
        boxToggleThree.textContent = 'Click';
      } else {
        boxContentThree.style.display = 'none';
        boxToggleThree.textContent = 'Click';
      }
    });

// const buttToggle = document.querySelector('butt');
// buttToggle.addEventListener