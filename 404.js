const PAGE_TYPE = 404;
let root = document.getElementById('root');
const PASSING_STUFF =
  'https://raw.githubusercontent.com/nelvson/nelvson.github.io/master/passingStuff.json';
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
    if (d.type === PAGE_TYPE) page.push(d);
  }
  let idx = getRandom(1, page.length);
  document.title = data[idx].title;
  root.innerHTML = data[idx].message;
};

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
