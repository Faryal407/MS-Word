let size = document.getElementById('size');
let para = document.getElementById('para');
let bold = document.getElementById('bold');
let underline = document.getElementById('underline');
let italic = document.getElementById('italic');
let clear = document.getElementById('clear');
let color = document.getElementById('color');
let font = document.getElementById('font');
let bg = document.getElementById('bg');
let left = document.getElementById('left');
let right = document.getElementById('right');
let center = document.getElementById('center');
let justify = document.getElementById('justify');
let pdf = document.getElementById('pdf');

left.addEventListener('click' , ()=>{
  para.style.textAlign = 'left';
})

right.addEventListener('click' , ()=>{
  para.style.textAlign = 'right';
})

center.addEventListener('click' , ()=>{
  para.style.textAlign = 'center';
})

justify.addEventListener('click' , ()=>{
  para.style.textAlign = 'justify';
})

size.addEventListener('change' , ()=>{
  para.style.fontSize = size.value + "px";
})

bold.addEventListener('click' , ()=>{
  para.style.fontWeight = 'bold';
});

underline.addEventListener('click' , ()=>{
  para.style.textDecoration = 'underline';
});

italic.addEventListener('click' , ()=>{
  para.style.fontStyle = 'italic';
});

clear.addEventListener('click', ()=>{
    para.style = 'none';
})

color.addEventListener('input' , ()=>{
    para.style.color = color.value; 
})

font.addEventListener('click' , ()=>{
  para.style.fontFamily = font.value;
})

bg.addEventListener('input' , ()=>{
    para.style.backgroundColor = bg.value; 
})

pdf.addEventListener('click', () => {
  html2pdf().from(para).save("document.pdf");
});


