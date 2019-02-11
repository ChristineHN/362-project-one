document.addEventLister('DOMContentLoaded', function(){
  document.getElementById("signup").addEventLister("click", msg);
});

function msg() {
  alert("Thank you for joining us for the beta test!");
}
