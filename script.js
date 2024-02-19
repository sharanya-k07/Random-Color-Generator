const getColor=()=>{
  const randomNo=Math.floor(Math.random()*16777215);
  const randomCode="#"+randomNo.toString(16);

  document.body.style.backgroundColor=randomCode;
  document.getElementById("color-code").innerText=randomCode;

  navigator.clipboard.writeText(randomCode);
}

let clickBtn=document.getElementById("click-me-btn");

clickBtn.addEventListener("click",getColor);

getColor();