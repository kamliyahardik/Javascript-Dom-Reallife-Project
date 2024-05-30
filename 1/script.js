var isStatus = document.querySelector("#status");
var addButton = document.querySelector("#add");

var flag = 0;
addButton.addEventListener("click", function () {
  if (flag == 0) {
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "green";
    addButton.innerHTML="Remove"
    // console.log("hisdhdh");
    flag = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    addButton.innerHTML="Add Friend"

    flag=0;
    
  }
});
