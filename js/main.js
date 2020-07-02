const URL = 'api/shibes';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('shibe').addEventListener('click', getShibe);
  document.getElementById('yep').addEventListener('click', getYes);
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

function getYes(ev) {
  console.log('Getting yes!');
  let url = '/api/yes';
  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      let para = document.createElement('P');
      para.innerHTML = content.msg;
      document.getElementById('header').appendChild(para);
    })
    .catch((error) => console.log('Something went wrong!', error));
}