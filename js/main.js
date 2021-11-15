// #1. 유효성 검사
//isValidComment 

const isCommentValid = validateComment ();

function addComment () {
  if(!isCommentValid) 
  
  return alert("댓글을 입력해 주세요!")
}

// #2. 댓글창 입력하면 댓글 올라오게 구현 
// pseudo code
//1. textarea (#newComment) 요소에 내용을 쓰고 
//2. 단 textarea(#newComment)에 내용이 들어가지 않는 경우에는 댓글이 입력되지 않아야 한다.
//3. 버튼을 클릭 button click event 혹은 submit을 하면 
//4  li 안에 user id 정보와 댓글 content 내용이 들어가고 
//5. ul.appendchild("li") 
//6. div.appenchild("ul") 


const addComment = document.querySelector("#newComment");
const submitButton = documnet.querySelector("#comentSubmit");
const repleArea = document.querySelector(".commentsRepleArea");
const commentContainer= document.querySelector(".commentArea");

// 

addComment.addEventlistener("keyup", (e)=>
{
  if (!!addComment.value) { 
    submitButton.classList.toggle("active");
    submitButton.style.color ="#499ee9";
} else submitButton.style.color="#c4e1f"; 

const plusComment = document.querySelector("#newComment").value;
// 댓글이 등록 됐을 때 초기화
addComment.value = "";
// 5,6번 appendchild 대신 textContent ``으로 내용 가져옴
const addTextComment = commentContent.textcontent.split("<div>").split("/div");
commentContent.textcontent = '<div class="commentContet">'+ 
`<ul class="commentContent">
  <li class="commentId">raeng_</li>
  <li class="comment>${plusComment}</li>
</ul>
  <i class="far fa-heart"></i>` + addTextComment + '</div>'
// return plusComment; 리턴 값 필요한가 init function할 시

});


  
// click  keyup event  
submitButton.addEventlistener("click keyup", (e) => {


// function init() {
//   commentButton.addEventlistener("click", addComment);
// }

// init();



// 4,5,6번 백틱으로 넣어주기

// newComment.innerHTML = `
// <span class="name">계정이름</span>
// <span>${commentInput.value}</span>  
// `;
