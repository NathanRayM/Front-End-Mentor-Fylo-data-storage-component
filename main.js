const slider = document.getElementById("slider");

function updateSliderBackground(value) {
  const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(
      to right,
      hsl(6, 100%, 80%) 0%,
      hsl(335, 100%, 65%) 100%
    )`;

  slider.style.background = `
      linear-gradient(
        to right,
        hsl(6, 100%, 80%) 0%,
        hsl(335, 100%, 65%) 100%
      ) no-repeat,
      hsl(229, 57%, 11%)`;

  slider.style.backgroundSize = `${percentage}% 100%`;
}

slider.addEventListener("input", (e) => {
  updateSliderBackground(e.target.value);
});

// Initialize on page load
updateSliderBackground(slider.value);
