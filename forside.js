var mainOutput = document.getElementById("main-output");

//Lager saker til forsiden
var caseArray = [
    {
        title: "Gåten Orderud",
        imgUrl: "images/orderud.jpg",
        type: "DRAP",
        id: 1,
        solved: false
    },
    {
        title: "Nokas ranet",
        imgUrl: "images/nokas.jpg",
        type: "RAN",
        id: 2,
        solved: true
    },
    {
        title: "Jake Petterson",
        imgUrl: "images/jakepetterson.jpg",
        type: "KIDNAPPING",
        id: 2,
        solved: true
    }
];


function createCases() {
    var txt = "";

    for (var i = 0; i < caseArray.length; i++){
        txt += `
            <article class="col-xs-12 col-md-6 col-lg-4 solved-case unsolved-case">
                <h2 class="case-topic">${caseArray[i].title}</h2>
                <img class="img-fluid" src="${caseArray[i].imgUrl}">
                <p class="description">${caseArray[i].type}</p>
                <input class="case-btn" type="button" href="detaljer.html" value="Les mer">
            </article>`
    };
    
    if(caseArray.solved === true){
        createCases.className = "solved-case";
    }else{
        createCases.className = "unsolved-case";
    } 
    
    mainOutput.innerHTML = txt;               
}

createCases();



//Til detaljsiden
const toDetailPageBtn = document.getElementById("case-btn");

const moveToDetailPage = (e) => {
    
    window.location = "detaljer.html";
}

toDetailPageBtn.addEventListener("click", moveToDetailPage);



//GSAP til banner
const shoePicture = $("#shoe");
const policePicture = $("#police");
const logoPicture = $("#logo");


TweenMax.to(shoePicture, 5, {x: 600, rotation: 360, ease: Bounce.easeInOut });
                //Burger1, tid, hva skal skje
TweenMax.from(policePicture, 5, {x: 800, rotation: 180, delay: 2 });
        
TweenMax.staggerTo(logoPicture, 6,
                           {x: 700, y: function(){return -Math.floor( Math.random() * 1000) } },
                           0.4);



//Border til artiklene
/*    if(caseArray.solved === true){
        createCases.className = "solved-case";
    }else{
        createCases.className = "unsolved-case";
    } 

*/

        
      

            


    
    
        
            
        
        
       
        
        
    