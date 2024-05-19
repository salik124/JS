let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let left = document.getElementById("left");
let center = document.getElementById("center")
let right = document.getElementById("right");
let para_text = document.getElementById("para-text");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let capitalize =document.getElementById("capitalize");

bold.addEventListener("click", function(){
    para_text.style.fontWeight="bold"
});
italic.addEventListener("click", function(){
    para_text.style.fontStyle="italic"
});
underline.addEventListener("click", function(){
    para_text.style.textDecoration="underline"
});
left.addEventListener("click",function(){
    para_text.style.textAlign="left"
});
center.addEventListener("click", function(){
    para_text.style.textAlign="center"
});
right.addEventListener("click", function(){
    para_text.style.textAlign="right"
});
uppercase.addEventListener("click", function(){
    para_text.style.textTransform="uppercase"
});
lowercase.addEventListener("click", function(){
    para_text.style.textTransform="lowercase"
});
capitalize.addEventListener("click", function(){
    para_text.style.textTransform="capitalize"
})