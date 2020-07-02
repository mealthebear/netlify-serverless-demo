const URL = 'api/shibes';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('shibe-one').addEventListener('click', getShibe);
  document.getElementById('shibe-two').addEventListener('click', getShibe);
});

function getShibe(ev) {
  ev.preventDefault();
  console.log('get shibe picture; woof!');
  fetch(URL)
      .then((response) => response.json())
      .then((content) => {
        var img = document.createElement('IMG');
        img.src = content;
        document.body.appendChild(img);
      })
      .catch((error) => console.log('Whoops something went wrong!', error));
}