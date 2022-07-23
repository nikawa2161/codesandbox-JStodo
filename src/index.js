const addText = document.getElementById("add-text");
const addBtn = document.getElementById("add-btn");

const onclickadd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = addText.value;
  addText.value = "";

  // liの作成
  const li = document.createElement("li");
  li.className = "list-row";

  // pタグの作成
  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了ボタンの作成
  const ul = document.getElementById("incomplete-list");
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);

    // テキストを取得
    const text = completeTarget.firstElementChild.innerText;

    // listの中身を初期化
    completeTarget.textContent = null;

    // pタグの生成
    const p = document.createElement("p");
    p.innerText = text;

    // 戻るボタンの作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    // liの子要素に各要素を作成
    completeTarget.appendChild(p);
    completeTarget.appendChild(returnButton);

    // 完了エリアにliを追加

    const completeUl = document.getElementById("complete-list");
    completeUl.appendChild(completeTarget);
  });

  // 未完了ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liの子要素に各要素を作成
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了のリストに追加
  ul.appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (traget) => {
  const ul = document.getElementById("incomplete-list");
  ul.removeChild(traget);
};

addBtn.addEventListener("click", () => onclickadd());
