function Slide(text, img, button, index, innerImg) {
    this.active = false;
    this.text = text;
    this.img = img;
    this.button = button;
    this.index = index;
    this.innerImg = innerImg;
 
    this.makeActive = function() {
        innerImg.style.width = screen.width + 'px';
        this.active = true;
        this.img.classList.remove('inactive');
        this.img.classList.add('active');
        this.img.classList.add('z-index');
        this.button.children[0].classList.add('full');
        this.text.classList.remove('inactive-slide-text');
        this.text.classList.add('active-slide-text');
    }
    
    this.makeInactive = function() {       
        this.button.children[0].classList.remove('full');
        innerImg.style.width = screen.width + 'px';
        if(this.active === true) {  
            let img = this.img;
            let text = this.text;
            setTimeout(function() {
                setTimeout(function() {
                    img.classList.remove('active');
                }, 600);        
                img.classList.remove('z-index');
                img.classList.add('becoming-inactive');
            }, 400);
            
            setTimeout(function() {
                text.classList.remove('active-slide-text');
                text.classList.add('inactive-slide-text');
            }, 1500);
            
            setTimeout(function() {
                img.classList.remove('becoming-inactive');
                img.classList.add('inactive');
            }, 1200);
        } 
        this.active = false;
    }
}

let slideImages = document.getElementsByClassName('slide-image');

let slide1 = new Slide(document.getElementById('slide-1-text'), document.getElementById('slide-1'), document.getElementById('slide-button-1'), 1, slideImages[0]);

let slide2 = new Slide(document.getElementById('slide-2-text'), document.getElementById('slide-2'), document.getElementById('slide-button-2'), 2, slideImages[1]);

let slide3 = new Slide(document.getElementById('slide-3-text'), document.getElementById('slide-3'), document.getElementById('slide-button-3'), 3, slideImages[2]);

let slide4 = new Slide(document.getElementById('slide-4-text'), document.getElementById('slide-4'), document.getElementById('slide-button-4'), 4, slideImages[3]);

let slide5 = new Slide(document.getElementById('slide-5-text'), document.getElementById('slide-5'), document.getElementById('slide-button-5'), 5, slideImages[4]);

let slides = [slide1, slide2, slide3, slide4, slide5];

let buttons = [];

slides.forEach(function(slide) {
    buttons.push(slide.button);
})

function slideSwipe(index) { 
    slides.forEach((slide) => {
        if(index === slide.index) {
            if(slide.active === false) {
                slide.makeActive();
            }  
        }else {
            slide.makeInactive();
        }
    });  
}
slideSwipe(1);

let count = 2;
const INTERVAL = setInterval(function() {
                if (count > 5) {
                    count = 1;
                }   
                slideSwipe(count);
                count++;           
            }, 10000);

function buttonSwipe(index) {
    slideSwipe(index);
    clearInterval(INTERVAL);
    buttons.forEach(function(button) {
        button.style.pointerEvents = 'none';
        console.log(button);
        setTimeout(function() {
            button.style.pointerEvents = 'auto';
        }, 1300); 
    });
}

function Menu(button, menu, index) {
    this.active = false;
    this.menu = menu;
    this.button = button;
    this.index = index;
    
    
    this.activeMenu = function() {
        let menu = this.menu;
    let button = this.button;
        this.active = true;
        setTimeout(function() {
            menu.classList.remove('hide');
            menu.classList.add('reveal');
            button.classList.add('selected');    
        }, 1600);    
    }
    
    this.inactiveMenu = function() {
        let menu = this.menu;
        let button = this.button;
        this.active = false;
        setTimeout(function() {
            menu.classList.remove('reveal');
            menu.classList.add('hide');
            button.classList.remove('selected');           
        }, 500);     
    }
}

let lunchMenu = new Menu(document.getElementById('lunch-button'), document.getElementById('lunch-menu'), 1);
let eveningMenu = new Menu(document.getElementById('evening-button'), document.getElementById('evening-menu'), 2);
let drinkMenu = new Menu(document.getElementById('drink-button'), document.getElementById('drinks-menu'), 3);

let menus = [lunchMenu, eveningMenu, drinkMenu];

function menuSwitch(index) {
    console.log(index);
    menus.forEach((menu) => {
        if(index === menu.index) {
            if(menu.active === false) {
                menu.activeMenu();
            }  
        }else {
            menu.inactiveMenu();
        }
    });
}

menuSwitch(1);

function heightChange() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', () => {
    heightChange();
});

window.addEventListener('resize', () => {  
    setTimeout( () => {
        heightChange();
    }, 300)
});