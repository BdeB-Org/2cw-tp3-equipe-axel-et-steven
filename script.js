let currentPanelIndex = 0;

const panels = document.querySelectorAll('.panel');
const totalPanels = panels.length;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    currentPanelIndex = (currentPanelIndex + 1) % totalPanels;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentPanelIndex = (currentPanelIndex - 1 + totalPanels) % totalPanels;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentPanelIndex * 80; // 80vw is the panel width
    panels.forEach(panel => {
        panel.style.transform = `translateX(${offset}vw)`;
    });
}
