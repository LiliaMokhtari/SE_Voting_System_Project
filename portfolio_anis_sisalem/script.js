const roles = ["AI Student", "UI/UX Designer"];
let i = 0, j = 0, forward = true;
const typingEl = document.querySelector(".typing");
const cursor = document.querySelector(".cursor");

function type() {
  const role = roles[i];
  typingEl.firstChild.textContent = role.slice(0, j);
  if (forward) {
    j++;
    if (j === role.length) {
      forward = false;
      setTimeout(type, 800);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      forward = true;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(type, forward ? 120 : 60);
}
type();
