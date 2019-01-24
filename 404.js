//TODO : error on re-declaration let root
const PAGE_TYPE = 404;
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
  let page = [];
  console.log(data);
  for (d of data) {
    if (data.type === PAGE_TYPE) page.push(data);
  }
  console.log(page);
  //TODO : find a way to pick random message
};
