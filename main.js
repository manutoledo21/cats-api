const API = 'https://api.thecatapi.com/v1/images/search?limit=8';

async function reload() {
  const res = await fetch(API);
  const data = await res.json();

  console.log(data);
  const img1 = document.getElementById('1');
  const img2 = document.getElementById('2');
  const img3 = document.getElementById('3');
  const img4 = document.getElementById('4');
  const img5 = document.getElementById('5');
  const img6 = document.getElementById('6');
  const img7 = document.getElementById('7');
  const img8 = document.getElementById('8');

  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
  img4.src = data[3].url;
  img5.src = data[4].url;
  img6.src = data[5].url;
  img7.src = data[6].url;
  img8.src = data[7].url;
}

reload();
