// 
//定義
//

const actionSelect = document.querySelectorAll(".category-select");
//console.log(actionSelect);
const actionContents = document.querySelectorAll(".content");
// console.log(contents)
// const actionCategory = document.getElementById("product");
// console.log(actionCategory);


//
//関数
//

const selectPages = (e) => {
  // const target = e.currentTarget;
  const target = e.target;
  // console.log(target);
  const select = target.getAttribute('data-target'); 
  // console.log(select);
  const targetPage = document.getElementById(select);
  // console.log(page);

  actionSelect.forEach(elem => {
    elem.classList.remove("show");
  });
  
  target.classList.add("show");

  actionContents.forEach(elem => {
    elem.classList.remove("show");
  });
  targetPage.classList.add("show");
}


//
//関数
//
actionSelect.forEach((elem) => {
  // console.log(elem);
  elem.addEventListener('click',(e) => {
    selectPages(e);
  })
});
