const textList = document.querySelectorAll('.move');
const currentContent = document.getElementById('currentContent');
const mainImageM = document.getElementById('mainImageM');
const mainImageP = document.getElementById('mainImageP');

function getImageSrc(step) {
  mainImageM.src = `images/back_${step}.png`
  mainImageP.src = `images/back_pc_${step}.png`
}

function isElementInViewport(el, threshold = 0.4) {
  const rect = el.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const elementWidth = rect.right - rect.left;

  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);

  const visibleArea = Math.max(0, visibleHeight) * Math.max(0, visibleWidth);
  const totalArea = elementHeight * elementWidth;
  const visibilityRatio = visibleArea / totalArea;

  return visibilityRatio >= threshold;
}

let prevStep = 1;
function onScroll() {
  const elements = document.querySelectorAll('.move');
  elements.forEach((element) => {
    if (isElementInViewport(element, 0.4)) {
      const currentStep = parseInt(element.id); 

      if (currentStep !== prevStep) {
        getImageSrc(currentStep);
        prevStep = currentStep;
      }
    }
  });
}

window.addEventListener('scroll', onScroll);
