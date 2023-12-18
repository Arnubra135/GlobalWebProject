const div = document.querySelector('.paragrafos');
const ps = div.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const estilosContainer = getComputedStyle(document.querySelector('.container'))
const backgroundColorBody = estilosBody.backgroundColor;
const letterCollor = estilosContainer.backgroundColor;

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = letterCollor;
};