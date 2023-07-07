import React,{useEffect} from 'react'
import './Carsole.scss'


const Carsole = () => {

  const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;
console.log(slider);



const fun = () =>{
  console.log(slider, "slide")
slider.addEventListener('mouseup', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', (e) => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', (e) => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});
}

useEffect(()=>{
  if(slider){
    console.log(slider);
    fun()
  }
},[slider])


  return (
    <ul className="gallery">
    <li style={{background: '#f6bd60'}}></li>
    <li style={{background: '#f7ede2'}}></li>
    <li style={{background: '#f5cac3'}}></li>
    <li style={{background: '#84a59d'}}></li>
    <li style={{background: '##f28482'}}></li>
   
    
  </ul>
  )
}

export default Carsole