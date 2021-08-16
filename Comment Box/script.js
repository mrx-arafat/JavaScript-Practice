document.getElementById("submit").addEventListener("click", function () {
  //console.log("clicked by arafat");
  const commentBox = document.getElementById("comment-box");
  // console.log(commentBox.value);
  const userCommentText = commentBox.value;

  const newComment = document.createElement("p");
  newComment.innerText = userCommentText;

  const commentContainer = document.getElementById("comment-container");
  commentContainer.appendChild(newComment);

  commentBox.value = "";
});
