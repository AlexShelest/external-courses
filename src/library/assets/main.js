var requestURL = "https://rsu-library-api.herokuapp.com/books";
var request = new XMLHttpRequest();

function callApi(url, callback, objSetting) {
  var requestURL = url;
  var request = objSetting;

  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function() {
    var books = request.response;
    callback(books);
  };
}

callApi(requestURL, showBooks, request);

function createBook(item) {
  var article = document.createElement("article");
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  var figcaption = document.createElement("figcaption");
  var span = document.createElement("span");
  var div = document.createElement("div");

  img.src = item.image_url;
  img.alt = item.title;
  figcaption.textContent = item.title;
  span.textContent = "by " + item.author.firstName + " " + item.author.lastName;

  article.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  article.appendChild(span);
  article.appendChild(div);

  return article;
}

function showBooks(booksArray) {
  var section = document.querySelector("section");

  booksArray.forEach(function(item) {
    var itemBook = createBook(item);
    section.appendChild(itemBook);
  });
}
