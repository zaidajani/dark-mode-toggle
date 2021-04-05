const toggle = document.getElementById('toggle');

if (localStorage.getItem('IsDark') == "true") {
  document.body.style.backgroundColor = "Black";
  toggle.classList.toggle('dark');
}

toggle.addEventListener('click', () => {
  if (localStorage.getItem('IsDark') == "true") {
    localStorage.clear();
    document.body.style.backgroundColor = "#ffffff";
    toggle.innerText = "Toggle dark mode";
    toggle.classList.toggle('dark');
  }
  else {
    toggle.classList.toggle('dark');
    document.body.style.backgroundColor = "Black";
    toggle.innerText = "Toggle light mode";
    localStorage.setItem('IsDark', true);
  }
});