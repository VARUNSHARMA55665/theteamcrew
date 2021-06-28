

var links = document.querySelectorAll('.nav-menu a');

for(var i = 0; i<links.length; i++){
    links[i].addEventListener('click',function(event){
        event.preventDefault();
        var eventId = this.textContent.trim().toLowerCase();

        var pos = document.getElementById(eventId).offsetTop;

        var move = setInterval(scrollEvent,50);
        
        var currPos = 0;
        function scrollEvent(){
            
            if(currPos >= pos){
                clearInterval(move);
                return;
            }
            currPos += 50;
            scrollBy(0,50);
        }

    })
}


var sections = document.querySelectorAll('.each-skill div');
// function removeFill(){
// for(let i = 0; i<sections.length; i++){

//     sections[i].style.width = 0 + '%';

// }
// }

var skillSection = document.getElementById('skills');

document.addEventListener('scroll',check);
var animationDone = new Array();
for(let i = 0; i<sections.length; i++){
    animationDone[i] = false;
}

function check(){
    for(let i = 0; i<sections.length; i++){
        if(!animationDone[i] && sections[i].getBoundingClientRect().top<window.innerHeight){
            animationDone[i] = true;
            sections[i].style.width = 0 + '%';
            let targetWidth = sections[i].getAttribute('data-knowledge');
            let currWidth = 0;

            let fill = setInterval(completeFill,20);
        function completeFill(){
            if(currWidth>=targetWidth){
                clearInterval(fill)
                return;
            }
            currWidth++;
            sections[i].style.width = currWidth + '%';
        }

        }
        else if(sections[i].getBoundingClientRect().top>window.innerHeight){
                animationDone[i] = false;
                sections[i].style.width = 0 + '%';
            }
    }
}