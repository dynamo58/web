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
  Math.abs((new Date(Date.now() - new Date(2003, 0, 2))).getUTCFullYear() - 1970);