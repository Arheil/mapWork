
const link = document.querySelector('.link'),
      tomsk = document.querySelector('#Tomsk'),
      moscow = document.querySelector('#Moscow'),
      kazan = document.querySelector('#Kazan');

const getCity = (e) => {
  e.preventDefault();
  
  if (tomsk.checked) {
    window.location="http://127.0.0.1:5500/Tomsk/Tomsk.html";
  } else if (kazan.checked) {
    window.location="http://127.0.0.1:5500/Kazan/Kazan.html";
  } else if (moscow.checked) {
    window.location="http://127.0.0.1:5500/Moscow/Moscow.html";
  }
  }

link.addEventListener('click', getCity);


