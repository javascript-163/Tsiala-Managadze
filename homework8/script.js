
let count = 240;

function changePhotoSize(factor) {
  const img = document.getElementById("photo");

  if (factor) {
    count += 10;
} else {
    count -= 10;
}

  count = Math.max(0, count);

  img.style.width = count + "px";
}

function changeColor(color) {
    const simpleText = document.getElementById("text");
    simpleText.style.color = `#${color}`;
  }

//  pTag.style.color = `#${color}`;

function showContent() {
    document.getElementById("text").style.visibility = "visible";
    document.getElementById("buttons").style.visibility="visible";
    document.getElementById("photo").style.visibility="visible";
    document.getElementById("photo-buttons").style.visibility="visible";

  }
  
  function hideContent() {
    document.getElementById("text").style.visibility = "hidden";
    document.getElementById("buttons").style.visibility="hidden";
    document.getElementById("photo").style.visibility="hidden";
    document.getElementById("photo-buttons").style.visibility="hidden";

    
  }