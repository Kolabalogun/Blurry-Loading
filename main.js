const loadText = document.querySelector('.loading-effect');
const backgroundPic = document.querySelector('.bg');

let load = 0;


let countInterval = setInterval(bluring , 40);


function bluring(params) {
    load++;

    if (load > 99) {
        clearInterval(countInterval)
    }
    

    loadText.innerHTML = `${load}%`

    // Mapping number onto another 
    // like 1 to 100 == 1 to 0  

   const scale = (num, in_min, in_max, out_min, out_max)=> {
       return (num - in_min) * (out_max - out_min) / (in_max- in_min) + out_min;
   }

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    backgroundPic.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}