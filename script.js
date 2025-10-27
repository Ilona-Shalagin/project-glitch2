const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        //console.log("clicked!!!");
        item.classList.add('selected');   
    })
    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
}) 