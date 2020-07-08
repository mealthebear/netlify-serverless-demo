document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('api').addEventListener('click', getImageTest);
  document.getElementById('shibe').addEventListener('click', getShibeTest);
  document.getElementById('yep').addEventListener('click', getYesTest);
});

const getImageTest = async ev => {
  ev.preventDefault();
  let url = '/api/cluster';

  try {
    const response = await fetch(url);
    const content = await response.json();
    console.log(content);
  } catch(error) {
      console.log('Something went wrong', error);
  }
}

const getShibeTest = async ev => {
  ev.preventDefault();
  let url = 'api/shibes'
  let img = document.createElement('IMG');

  try {
    const response = await fetch(url);
    const content = await response.json();
    img.src = content;
    document.body.appendChild(img);
  } catch (error) {
      console.log('Something went wrong', error);
  }
}

const getYesTest = async ev => {
  ev.preventDefault();
  let url = '/api/yes';
  let para = document.createElement('P');

  try {
    const response = await fetch(url);
    const content = await response.json();
    para.innerHTML = content.msg;
    document.getElementById('header').appendChild(para);
  } catch(error) {
      console.log('Something went wrong', error);
  }
}