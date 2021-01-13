const themeToggle = document.querySelector(".theme__toggle");
const theme = document.querySelector(".light");
const profileImage = document.querySelector(".about-me__img");
const body = document.body;

const isDarkMode = localStorage.getItem("isDarkMode");

if (isDarkMode) {
  console.log(isDarkMode);
  body.classList.add("dark");
  profileImage.classList.add("about-me__img--dark");
  document.getElementById("theme").innerHTML = '<i class="fas fa-moon"></i>';
}

const toggleDarkMode = () => {
  body.classList.add("dark");
  profileImage.classList.add("about-me__img--dark");
  document.getElementById("theme").innerHTML = '<i class="fas fa-moon"></i>';
  setTimer();
  localStorage.setItem("isDarkMode", true);
};

const toggleLightMode = () => {
  body.classList.remove("dark");
  profileImage.classList.remove("about-me__img--dark");
  document.getElementById("theme").innerHTML = '<i class="fas fa-sun"></i>';
  setTimer();
  localStorage.removeItem("isDarkMode");
};

const setTimer = () => {
  setTimeout(() => {
    themeToggle.classList.remove("theme__toggle--active");
  }, 900);
};

themeToggle.onclick = () => {
  themeToggle.classList.add("theme__toggle--active");
  if (body.className === "dark") {
    toggleLightMode();
  } else {
    toggleDarkMode();
  }
};
