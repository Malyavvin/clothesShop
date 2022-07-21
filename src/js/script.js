$(".item-lang").click(function() {
  $(".item-lang").removeClass("selected");
  $(this).addClass("selected");
});

const burgerBody = document.querySelector('.burger__body')
const iconMenu = document.querySelector('.menu__icon')
const closeBurger = document.querySelector('.close__burger')
if(iconMenu){
  iconMenu.addEventListener("click", function(e){
    burgerBody.classList.add("_active")
  })
  if(closeBurger){
    closeBurger.addEventListener("click", function(e){
      burgerBody.classList.remove("_active")
    })
  }
}

$(".content-block").each(function() {
    let more = $(this).find(".show-more");
    let hide = $(this).find(".hide-content");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    });
});