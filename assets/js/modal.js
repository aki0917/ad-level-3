//
//定義
//

const actionModal = document.querySelectorAll(".actionModal");
// console.log(actionModal);
const selectModal = document.querySelector(".selectModal");
// console.log(selectModal);
const modal = document.getElementById("modal");
//console.log(modal);

//
//関数
//

const actionItem = (e) => {
  const target = e.target;
  // console.log(target);
  const img = target.src;
  // console.log(img);
  const modalImg = modal.querySelector("img");
  //console.log(modalImg);
  modal.classList.add("on");
  //console.log(modal);

  modalImg.src = img;
  //画像切り替えられる
};
 
const closeModal = () => {
  //console.log(modal)
  modal.classList.remove("on");
  // console.log(modal);
}

//
//イベント処理
//

actionModal.forEach((elem) => {
  // console.log(elem);
  elem.addEventListener('click',(e) => {
    actionItem(e);
  });
});

//閉じる時のイベント
selectModal.addEventListener('click',(e) => {
  closeModal(e);
});
