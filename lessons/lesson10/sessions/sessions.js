let sessions = JSON.parse(localStorage.getItem("sessions")) ?? [];
const sessionsSection = document.getElementById("sessions");
for (const session of sessions) {
  const sessionEl = document.createElement("div");
  sessionEl.innerText = session;
  sessionsSection.appendChild(sessionEl);
}
