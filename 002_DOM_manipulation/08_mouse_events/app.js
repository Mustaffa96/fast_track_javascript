const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// // Click
// clearBtn.addEventListener('click', runEvent);
// // Doubleclick
// clearBtn.addEventListener('dbclick', runEvent);
// // Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// // Mouseenter
// clearBtn.addEventListener("mousenter", runEvent);
// // Mouseleave
// clearBtn.addEventListener("mousleave", runEvent);
// // Mouseover
// clearBtn.addEventListener("mousover", runEvent);
// // Mouseout
// clearBtn.addEventListener("mouseout", runEvent);
// Mousemove
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 40)`;
}
