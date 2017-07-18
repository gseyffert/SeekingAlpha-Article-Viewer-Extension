/**
 * Checks if window href contains 'article' reference and removes body class to
 * display full article & remove pagination element.
 */
function revealArticle() {
  const url = window.location.href;
  const isArticle = url.indexOf('article') > -1;
  if (isArticle) {
    const rootElem = document.getElementsByClassName('sa-a')[0];
    rootElem.setAttribute('class', '');
    removePagination();
  }
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

revealArticle();
