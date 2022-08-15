'use strict';
{
   const $box1=document.getElementById('box1')
   window.addEventListener('scroll',() => {
    let scrollY = window.scrollY;
    // console.log(window.scrollY);
    if (1000 < scrollY){
        $box1.classList.add('on');
    }

    

   });
}
