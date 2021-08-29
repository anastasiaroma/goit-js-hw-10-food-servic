 import items from "./menu.json";
 import menuTemplate from "./templates/list.hbs";
 import "./styles.css";

 console.log(items)
 console.log(menuTemplate)

 const list = document.querySelector('.js-menu');

  const markup = menuTemplate(items);
  console.log(markup);
  list.insertAdjacentHTML('afterbegin', markup);