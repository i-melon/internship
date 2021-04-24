document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
let adv = document.getElementById('adv');
document.body.removeChild(adv);

let books = document.getElementById('books');

books.appendChild(books.childNodes[1]);
books.appendChild(books.childNodes[8]);
books.appendChild(books.childNodes[6]);
books.appendChild(books.childNodes[8]);
books.appendChild(books.childNodes[4]);











