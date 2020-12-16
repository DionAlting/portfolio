const themeToggle = document.querySelector(".theme__toggle");
const theme = document.querySelector(".light");
const body = document.body;

const localTheme = localStorage.getItem("theme");

if (localTheme) {
  if (localTheme === "dark") {
    body.classList.add(localTheme);
    document.getElementById("theme").innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.classList.add(localTheme);
    document.getElementById("theme").innerHTML = '<i class="fas fa-sun"></i>';
  }
} else {
  body.classList.add("light");
  document.getElementById("theme").innerHTML = '<i class="fas fa-sun"></i>';
  localStorage.setItem("theme", "light");
}

themeToggle.onclick = () => {
  themeToggle.classList.add("theme__toggle--active");
  if (body.className === "light") {
    body.classList.replace("light", "dark");
    document.getElementById("theme").innerHTML = '<i class="fas fa-moon"></i>';
    setTimeout(() => {
      themeToggle.classList.remove("theme__toggle--active");
    }, 900);
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    document.getElementById("theme").innerHTML = '<i class="fas fa-sun"></i>';
    setTimeout(() => {
      themeToggle.classList.remove("theme__toggle--active");
    }, 900);
    localStorage.setItem("theme", "light");
  }
};
