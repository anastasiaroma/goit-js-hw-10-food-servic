 import items from "../src/menu.json";
 import menuTemplate from "../src/templates/list.hbs";
 import "./styles.css";

 console.log(items)
 console.log(menuTemplate)

 const list = document.querySelector('.js-menu');

  const markup = menuTemplate(items);
  console.log(markup);
  list.insertAdjacentHTML('afterbegin', markup);