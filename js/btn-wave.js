var buttons = document.body.getElementsByClassName("Mavericksbtn");

Array.prototype.forEach.call(buttons, function (Mavericksbtn) {
    Mavericksbtn.addEventListener('click', createRipple);
});

function createRipple(e) {
    var children = this.getElementsByClassName('wave-ripple');
    while(children.length > 0){
        children[0].parentNode.removeChild(children[0]);
    };
                
    var circle = document.createElement('div');
    circle.style["position"] = 'absolute';  
    this.appendChild(circle);      
            
    var d = Math.max(this.clientWidth, this.clientHeight);
    var eRect = this.getBoundingClientRect()
                
    circle.style.width = circle.style.height = d + 'px';
    circle.style.left = e.clientX - eRect.left - d / 2 + 'px';
    circle.style.top = e.clientY - eRect.top - d / 2 + 'px';
    circle.classList.add('wave-ripple');
}