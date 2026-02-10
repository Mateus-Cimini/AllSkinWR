import confetti from "canvas-confetti";

export function triggerConfetti(hasSkins) {
  if (!hasSkins) return;
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
  };

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  };

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

export function bindDetailsClick(getActiveSkin) {
  const button = document.querySelector(".skin-info-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    const activeSkin = getActiveSkin();
    if (!activeSkin?.imageUrl) return;
    window.open(activeSkin.imageUrl, "_blank", "noopener");
  });
}
