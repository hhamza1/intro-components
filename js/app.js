var inputGroup = Array.from(document.querySelectorAll(".input-group i, .error-msg"));
var fname =document.getElementsByName("fname");

inputGroup.map((item, index) => {
    item.style.display = "none";
});
