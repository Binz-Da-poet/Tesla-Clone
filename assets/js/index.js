const toggleMenu = () => {
  const menu = document.getElementById("menu--navigation");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

function scrollToClass(className, targetClassName) {
  var link = document.querySelector(className);
  link.addEventListener("click", function (event) {
    event.preventDefault();

    var targetClass = document.getElementsByClassName(targetClassName)[0];
    targetClass.scrollIntoView({ behavior: "smooth" });
  });
}

scrollToClass(".nav--middle a.moveToModelS", "content four");
scrollToClass(".nav--middle a.moveToModelY", "content one");
scrollToClass(".nav--middle a.moveToModel3", "content two");
scrollToClass(".nav--middle a.moveToModelX", "content five");
