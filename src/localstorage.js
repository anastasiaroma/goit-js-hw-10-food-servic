import "./styles.css";

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeSwitch = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');
 
checkbox.addEventListener('change', onThemeSwitchInput);

  

const savedTheme = localStorage.getItem('Theme');

saveTheme ();
  function saveTheme () {
    
 if (savedTheme === null) {
    document.body.classList.add("light-theme");
    localStorage.setItem("Theme", "light-theme");
  }
  }
  
   
  
  if (savedTheme === Theme.DARK) {
    checkbox.setAttribute('checked', 'checked');
    document.body.classList.remove("light-theme");
    document.body.classList.add('dark-theme');
    localStorage.setItem("Theme", "dark-theme");
  }



  function onThemeSwitchInput (e) {
      if  (checkbox.checked) {
       document.body.classList.remove("light-theme");
       document.body.classList.add("dark-theme"); 
       localStorage.setItem("Theme", "dark-theme");
       return
      }
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme"); 
      localStorage.setItem("Theme", "light-theme");
    }
        