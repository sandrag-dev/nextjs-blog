// TODO: Write your code here!
/*
var sendMessage= document.getElementById("send-message-btn");
sendMessage.addEventListener("click",hider)


function hider()
{
  sendMessage.style.display="none";
}
*/
$("#contact-modal .btn-primary").click(function () {
$("#send-message-btn").hide();
$("#conf-alert").modal("show");
});
