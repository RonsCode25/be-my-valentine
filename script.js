document.querySelector("#n").addEventListener('click',function(){
    move();
});
document.querySelector("#n").addEventListener('mouseover',function(){
    move();
});

function move(){
    document.querySelector("#n").style.position="fixed";
    const vw=window.innerWidth;
    const vh=window.innerHeight;
    const btn=document.querySelector("#n");

    let curX, curY;

    window.addEventListener('mousemove', function(event){
        curX=event.clientX;
        curY=event.clientY;
    });

    const rdloc = (() => {
        let randX, randY;
        const btnW = btn.offsetWidth;
        const btnH = btn.offsetHeight;
    
        const maxX = (vw-btnW);
        const maxY = (vh-btnH);
    
        do {
            randX = (Math.random() * maxX)+10;
            randY = (Math.random() * maxY)+10;
        } while (Math.abs(randX - curX) < btnW && Math.abs(randY - curY) < btnH);
    
        return {
            x: randX,
            y: randY
        };
    })();
    
    const post=rdloc;

    btn.style.left=`${post.x}px`;
    btn.style.top=`${post.y}px`;
}

function change(){
    document.querySelector(".msg").textContent="I knew you would agree!";
    document.querySelector(".fnc").style.display="none";
}