let root = document.getElementById('root');
const PASSING_STUFF =
  'https://raw.githubusercontent.com/nelvson/nelvson.github.io/master/messages.json';
//root.innerHTML = 'hello there general kenobi';
fetch(PASSING_STUFF)
  .then((result) => result.json())
  .then((parsedJSON) => {
    renderPage(parsedJSON);
  })
  .catch((e) => console.log('Error happened!', e));

let renderPage = (data) => {
  root.innerHTML = data[0].message;
  //TODO : find a way to pick random message
};
