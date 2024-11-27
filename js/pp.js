const textList = document.querySelectorAll('.move');
const currentContent = document.getElementById('currentContent');
const mainImageM = document.getElementById('mainImageM');
const mainImageP = document.getElementById('mainImageP');

function getImageSrc(step) {
  mainImageM.src = `images/back_${step}.png`
  mainImageP.src = `images/back_pc_${step}.png`
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;


  const offset = viewportHeight * 0.3;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewportHeight - offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let prevStep = 1;
function onScroll() {
  const elements = document.querySelectorAll('.move');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      const currentStep = parseInt(element.id); 

      if (currentStep !== prevStep) {
        getImageSrc(currentStep);
        prevStep = currentStep;
      }
    }
  });
}

window.addEventListener('scroll', onScroll);

