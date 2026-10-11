const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formMessage = document.querySelector("#form-message");
  const name = document.querySelector("#name").value;
  formMessage.textContent = "";
  if (name === "") {
  formMessage.textContent = "Please enter your name";
  return;
}

const email = document.querySelector("#email").value;
if (email === "") {
  formMessage.textContent = "Please enter your email";
  return;
}
const message = document.querySelector("#message").value;
if (message === "") {
  formMessage.textContent = "Please your message";
  return;
}
const whatsappMessage = `: ${name}\n: ${email}\n: ${message}`;
const whatsappUrl = `https://wa.me/+220877597080?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappUrl, "_blank");
form.reset();
});

// RAINBOW TRAIL SPARKLES
let lastX=0,lastY=0;document.addEventListener('mousemove',function(e){
  let deltaX=Math.abs(e.pageX-lastX),deltaY=Math.abs(e.pageY-lastY);
  if(deltaX+deltaY>2){
    for(let i=0;i<3;i++){
      const sparkle=document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left=(e.pageX+Math.random()*10-5)+'px';
      sparkle.style.top=(e.pageY+Math.random()*10-5)+'px';
      sparkle.style.backgroundColor=`hsl(${Math.random()*360},100%,70%)`;
      document.body.appendChild(sparkle);
      setTimeout(()=>{sparkle.remove();},1000);
    }
    lastX=e.pageX;lastY=e.pageY;
  }
});
    
