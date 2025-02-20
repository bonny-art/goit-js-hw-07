const children = document.querySelectorAll("#categories > *");

console.log("Number of categories:", children.length);

children.forEach((category) => {
  const title = category.firstElementChild.textContent;
  const items = category.querySelectorAll("ul > li");

  console.log("Category:", title);
  console.log("Elements:", items.length);
});
