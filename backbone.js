let root = document.getElementById('root');
const PASSING_STUFF =
  'https://raw.githubusercontent.com/nelvson/nelvson.github.io/master/passingStuff.json';
//root.innerHTML = 'hello there general kenobi';
fetch(PASSING_STUFF)
  .then((result) => result.json())
  .then((parsedJSON) => {
    renderPage(parsedJSON);
  })
  .catch((e) => console.log('Error happened!', e));

let renderPage = (data) => {
  document.title = data[0].title;
  root.innerHTML = data[0].body;
};
