const $ = (s) => document.getElementById(s);

const NotifSeverity = {
  // values must match up with those defined in /styles/main.css
  Success: "success",
  Warning: "warning",
  Error: "error",
};

async function spawnNotification(severity, message) {
  const notificationContainer = $("notification-container");

  const notification = document.createElement("div");
  notification.classList.add("notification", severity);
  notification.innerText = message;

  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notificationContainer.removeChild(notification);
  }, 3000);
}

async function copyToClipboard(str, customNotiMsg) {
  await navigator.clipboard.writeText(str);

  const msg = customNotiMsg ?? "text copied to clipboard";
  spawnNotification(NotifSeverity.Success, msg);
}

const years = () =>
  Math.abs(new Date(Date.now() - new Date(2003, 0, 2)).getUTCFullYear() - 1970);

function getRandEl(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getSerializedBook() {
  const book = getRandEl(BOOKS);

  return `<a
    href="${book.link}"
    target="_blank"
  >${book.author} – ${book.title}</a>`;
}

const mail = () =>
  [
    "m",
    "a",
    "r",
    "e",
    "k",
    "3",
    "s",
    "m",
    "o",
    "l",
    "i",
    "k",
    "@",
    "s",
    "e",
    "z",
    "n",
    "a",
    "m",
    ".",
    "c",
    "z",
  ].join("");

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  // Load stored theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Hide toggle on scroll
  const handleScroll = () => {
    if (window.scrollY === 0) {
      themeToggle.classList.remove("hidden");
    } else {
      themeToggle.classList.add("hidden");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initial check
});
