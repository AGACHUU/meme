//js_034_dom.js

let hNode = document.getElementById('selcctor'); //현재 페이지에서 섹렉터라고 되어 있는 아이디를 찾겠다 라느ㅏㄴ 뜻

console.log(hNode);
console.log(hNode, typeof hNode);

let hId = document.querySelector('#selector');
console.log(hId, typeof hId);

let hClass = document.querySelector('.choice');
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName('p');
console.log(typeof pNode);
console.log(pNode.length);
console.log(pNode[0]);
console.log(pNode.item(0));
console.log(pNode[0].innerText);
pNode[0].style.color = 'red';
pNode[0].style.backgroundColor = 'blue';

function process() {
  alert('test');
  let fname = document.frm.fname;
  console.log('fname:', fname);
  console.log(fname.value);
  console.log(fname.defaultValue);
  return false;
}
