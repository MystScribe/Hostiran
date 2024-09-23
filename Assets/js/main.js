const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 290
const padding = 35

prev.addEventListener('click', () => {
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})



const prev1 = document.getElementById('prev-btn-buy');
const next1 = document.getElementById('next-btn-buy');
const list1 = document.getElementById('item-list-buy');

const itemWidth1 = 500;
const padding1 = 50;

// Move to the previous item
prev1.addEventListener('click', () => {
  list1.scrollLeft -= itemWidth1 + padding1;
});

// Move to the next item
next1.addEventListener('click', () => {
  list1.scrollLeft += itemWidth1 + padding1;
});

// Automatically move carousel every 5 seconds
const autoScroll = () => {
  list1.scrollLeft -= itemWidth1 + padding1;

  // If we reach the end, reset to the start
  if (list1.scrollLeft + list1.clientWidth >= list1.scrollWidth) {
    list1.scrollLeft = 0; // Reset to the start
  }
};

// Start auto-scrolling every 5 seconds (5000 ms)
setInterval(autoScroll, 5000);




const prev11 = document.getElementById('prev-btn-buy-m');
const next11 = document.getElementById('next-btn-buy-m');
const list11 = document.getElementById('item-list-buy-m');

const itemWidth11 = 360;
const padding11 = 50;



// Move to the previous item
prev11.addEventListener('click', () => {
  list11.scrollLeft -= itemWidth11 + padding11;
});

// Move to the next item
next11.addEventListener('click', () => {
  list11.scrollLeft += itemWidth11 + padding11;
});

// Automatically move carousel every 5 seconds
const autoScroll1 = () => {
  list11.scrollLeft -= itemWidth11 + padding11;

  // If we reach the end, reset to the start
  if (list11.scrollLeft + list11.clientWidth >= list11.scrollWidth) {
    list11.scrollLeft = 0; // Reset to the start
  }
};

// Start auto-scrolling every 5 seconds (5000 ms)
setInterval(autoScroll1, 5000);



const prev111 = document.getElementById('prev-btn-buy-m-m');
const next111 = document.getElementById('next-btn-buy-m-m');
const list111 = document.getElementById('item-list-buy-m-m');

const itemWidth111 = 310;
const padding111 = 50;



// Move to the previous item
prev111.addEventListener('click', () => {
  list111.scrollLeft -= itemWidth111 + padding111;
});

// Move to the next item
next111.addEventListener('click', () => {
  list111.scrollLeft += itemWidth111 + padding111;
});

// Automatically move carousel every 5 seconds
const autoScroll11 = () => {
  list111.scrollLeft -= itemWidth111 + padding111;

  // If we reach the end, reset to the start
  if (list111.scrollLeft + list111.clientWidth >= list111.scrollWidth) {
    list111.scrollLeft = 0; // Reset to the start
  }
};

// Start auto-scrolling every 5 seconds (5000 ms)
setInterval(autoScroll11, 5000);







var acc = document.getElementsByClassName("a-a-acordion");
var i;

// Open the first accordion panel by default
var firstPanel = acc[0]; // Select the first accordion button
var firstPanelContent = firstPanel.nextElementSibling; // The corresponding panel content
firstPanel.classList.add("active"); // Add the "active" class to the first accordion button
firstPanelContent.style.maxHeight = firstPanelContent.scrollHeight + "px"; // Set the panel's maxHeight

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Close all other panels
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) { // If it's not the current button
        acc[j].classList.remove("active"); // Remove active class
        var otherPanel = acc[j].nextElementSibling;
        otherPanel.style.maxHeight = null; // Collapse the panel
      }
    }

    // Toggle the current panel
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Collapse the current panel if it's open
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Open the current panel
    }
  });
}



function showImgHelp(){
    let imghelp = document.getElementById('helpimg')
    imghelp.style.display = 'block'
}
function hideImgHelp(){
    let imghelp = document.getElementById('helpimg')
    imghelp.style.display = 'none'
}


window.addEventListener('load', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


function scrollToTop(event) {
  if (event.target.getAttribute('href') === 'https://github.com/MystScribe') {
    return;
  }

  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


let anchors = document.getElementsByTagName('a');
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', scrollToTop);
}
