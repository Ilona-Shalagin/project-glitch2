const next = document.querySelector("#next");
const back = document.querySelector("#back");
const photos = ["https://cdn.glitch.com/b429c750-9053-4503-9c9e-796f793d4ff7%2Fbaloon1.jpg?v=1631301369245.jpg", "https://cdn.glitch.com/b429c750-9053-4503-9c9e-796f793d4ff7%2Fbaloon2.jpg?v=1631301376332.jpg", "https://cdn.glitch.com/b429c750-9053-4503-9c9e-796f793d4ff7%2Fbaloon3.jpg?v=1631301380690.jpg", "https://cdn.glitch.com/b429c750-9053-4503-9c9e-796f793d4ff7%2Fbaloon4.jpg?v=1631301396346.jpg","https://cdn.glitch.com/b429c750-9053-4503-9c9e-796f793d4ff7%2Fbaloon5.jpg?v=1631301402840.jpg"];
//console.log(photos[1]);
let i = 0;

next.addEventListener("click", () =>{
    i++;
    if(i>photos.length-1){
        i=0;
    }
    document.querySelector("#picture").src = photos[i];
})

back.addEventListener("click", () =>{
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector("#picture").src = photos[i];
})