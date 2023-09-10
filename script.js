const input = document.querySelector('input[type="text"]');
const button = document.querySelector("button");
const qrCode = document.querySelector("#qr-code");
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
let theme = localStorage.getItem("data-theme");

const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

toggleSwitch.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

button.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=200x200`;
    qrCode.src = qrCodeUrl;
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value;
    if (inputValue) {
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=200x200`;
      qrCode.src = qrCodeUrl;
    }
  }
});
