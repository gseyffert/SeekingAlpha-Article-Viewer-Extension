/**
 * Checks if window href contains 'article' reference and removes body class to
 * display full article & remove pagination element.
 */
function checkIsArticle() {
  const url = window.location.href;
  const isArticle = url.indexOf('article') > -1;
  if (isArticle) {
    revealArticle();
    closeModal(0);
  }
}

/**
 * Checks for element that hides additional pages of article and removes it's ID.
 */
function revealArticle() {
  setTimeout(function() {
    const articleElem = document.getElementById('a-cont');
    if (!articleElem) return revealArticle();
    else {
      articleElem.setAttribute('id', '');
      removePagination();
    }
  }, 1000);
}

/**
 * Remove pagination element from bottom of page.
 * Element isn't loaded immediately so it will check until an element is matched.
 */
function removePagination() {
  setTimeout(function() {
    const paginationElem = document.getElementById('a-pagination');
    if (!paginationElem) return removePagination();
    else return paginationElem.parentElement.removeChild(paginationElem);
  }, 1000);
}

/**
 * Checks for a login modal and removes it + makes page scrollable again if it exists.
 * @param { number } numTries The number of times this function has been called.
 */
function closeModal(numTries) {
  if (numTries > 45) return;
  setTimeout(function() {
    const modalElem = document.getElementsByClassName('modal');
    if (!modalElem || modalElem.length === 0) return closeModal(numTries + 1);
    else {
      Array.prototype.forEach.call(modalElem, function(elem) {
        elem.parentElement.removeChild(elem);
      });
      const body = document.getElementsByClassName('modal-open');
      Array.prototype.forEach.call(body, function(elem) {
        elem.setAttribute('class', '');
      });
    }
  }, 1000);
}

checkIsArticle();
