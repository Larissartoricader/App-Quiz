console.clear();

const BookmarkIcon = document.querySelector('[data-js="bookmark"]');

BookmarkIcon.addEventListener("click", () => {
  const EmptyBookmarkIcon = BookmarkIcon.getAttribute("src");
  if (EmptyBookmarkIcon === `../assets/bookmark-white.png`) {
    const newBookmarkIcon = `../assets/bookmark-black.png`;
    BookmarkIcon.setAttribute("src", newBookmarkIcon);
  } else {
    const newBookmarkIcon = `../assets/bookmark-white.png`;
    BookmarkIcon.setAttribute("src", newBookmarkIcon);
  }
});
