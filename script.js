
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

//if i want to show up the boxes from the start
// checkBoxes();

function checkBoxes(){
    const triggerBottom  = window.innerHeight /5 *4;

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })

}