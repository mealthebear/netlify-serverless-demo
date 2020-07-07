const URL = 'api/shibes';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('shibe').addEventListener('click', getShibe);
  document.getElementById('yep').addEventListener('click', getYes);
  document.getElementById('api').addEventListener('click', getImage);
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

const getImage = (ev) => {
  console.log('Getting images!');
  let url = '/api/cluster';
  fetch(url)
    .then(response => response.json())
    .then(content => {
      console.log(content);
    })
    .catch(error => console.log('Something went wrong!', error));
}