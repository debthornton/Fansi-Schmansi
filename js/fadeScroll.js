let hr = document.querySelector('hr');
    ScrollOut({
        threshold: 0.2
    });

    function NavUp() {
      Nav.className = 'nav-up';
      BookingLink.style.display = 'none';
      Header.style.display = 'none';
      Nav.style.animation = 'roll-up 0.5s forwards';
      for (let i = 0; i < NavItems.length; i++) {
        for (let i = 0; i < NavItems.length; i++) {
          NavItems[i].style.animation = `nav-fade-out 0.3s forwards ease-out`;
        }

        setTimeout(function() {
          for (let i = 0; i < NavItems.length; i++) {
            NavItems[i].style.display = 'none';
          }
        }, 700);
      }
      for (let i = 0; i < Icons.length; i++) {
        Icons[i].style.animation = 'icon-fade-out 0.1s forwards';
      }
      Address.style.animation = 'contact-fade-out 0.1s forwards';
      PhoneNumber.style.animation = 'contact-fade-out 0.1s forwards';
    }

    function NavUpStatic() {
      Nav.className = 'nav-up';
      BookingLink.style.display = 'none';
      Header.style.display = 'none';
      Nav.style.animation = 'roll-up-static 0.1s forwards';
      for (let i = 0; i < NavItems.length; i++) {
        NavItems[i].style.animation = 'nav-fade-out-static 0.6s forwards';
      }
      for (let i = 0; i < NavItems.length; i++) {
        NavItems[i].style.display = 'none';
      }
      for (let i = 0; i < Icons.length; i++) {
        Icons[i].style.animation = 'icon-fade-out-static 0.5s forwards';
      }
      Address.style.animation = 'contact-fade-out-static 0.5s forwards';
      PhoneNumber.style.animation = 'contact-fade-out-static 0.5s forwards';
    }

    function NavDown() {
      if (window.innerWidth > 992) {
        Nav.className = 'nav-down';
        Nav.style.animation = 'roll-down-static 1s forwards';
        for (let i = 0; i < NavItems.length; i++) {
          NavItems[i].style.display = 'block';
        }
        for (let i = 0; i < NavItems.length; i++) {
          NavItems[i].style.animation = 'nav-fade-in-static 1s forwards';
        }
        for (let i = 0; i < Icons.length; i++) {
          Icons[i].style.animation = 'icon-fade-in-static 1s forwards';
        }
        Address.style.animation = 'contact-fade-in-static 1s forwards';
        PhoneNumber.style.animation = 'contact-fade-in-static 1s forwards';
        Header.style.display = 'initial';
        Header.style.animation = 'header-static 1s forwards';
        BookingLink.style.display = 'initial';
        BookingLink.style.animation = 'booking-box-static 1s forwards';
        BorderDiv.style.animation = 'border-fade-static 1s forwards';
        BookATable.style.animation = 'booking-text-fade-static 1s forwards';
      } else {
        Header.style.display = 'none';
        Nav.className = 'nav-down';
        Nav.style.animation = 'roll-down 1.5s forwards';
        for (let i = 0; i < NavItems.length; i++) {
          NavItems[i].style.display = 'block';
        }
        for (let i = 0; i < NavItems.length; i++) {
          NavItems[i].style.animation = `nav-fade-in 0.6s forwards ease-out 0.${(i + 1) * 2}s`;
        }
        for (let i = 0; i < Icons.length; i++) {
          Icons[i].style.animation = `icon-fade-in 0.3s forwards ${(i + 1) - i * 0.8}s`;
        }
        Address.style.animation = 'contact-fade-in 0.9s forwards 1.3s';
        PhoneNumber.style.animation = 'contact-fade-in 0.9s forwards 1.6s';
      }
    }

    function NavDownOnLoad() {
      if (window.innerWidth > 992) {
        Nav.className = 'nav-down';
        Nav.style.animation = 'roll-down 1s forwards ease-in';
        for (let i = 0; i < NavItems.length; i++) {
          NavItems[i].style.animation = `nav-fade-in 0.6s forwards ease-out 1.${(i + 1) * 2}s`;
        }
        for (let i = 0; i < Icons.length; i++) {
          Icons[i].style.animation = `icon-fade-in 0.3s forwards 2.${(i + 2) * 2}s`;
        }
        Address.style.animation = 'contact-fade-in 0.9s forwards 2.5s';
        PhoneNumber.style.animation = 'contact-fade-in 0.9s forwards 2.7s';
        Header.style.display = 'initial';
        Header.style.animation = 'header-fade-in 1s forwards 0.8s';
        BookingLink.style.display = 'initial';
        BookingLink.style.animation = 'booking-box-fade 0.5s forwards 2.7s';
        BorderDiv.style.animation = 'border-fade-in 1s forwards 3s';
        BookATable.style.animation = 'booking-text-fade-in 0.3s forwards 3.2s';
      }
    }

let scrollpos;
const Header = document.querySelector('header');
const NarrowHeader = document.querySelector('#narrow-screen-header');
const HeaderButton = document.querySelector('#narrow-header-button');
const Nav = document.querySelector('nav');
const Nav1 = document.querySelector('#nav-1');
const Nav2 = document.querySelector('#nav-2');
const Nav3 = document.querySelector('#nav-3');
const Nav4 = document.querySelector('#nav-4');
const NavItems = [Nav1, Nav2, Nav3, Nav4];
const FacebookIcon = document.querySelector('#fb-icon');
const InstagramIcon = document.querySelector('#insta-icon');
const Icons = [FacebookIcon, InstagramIcon];
const Address = document.querySelector('#address');
const PhoneNumber = document.querySelector('#phone-number');
const SmallNav = document.querySelector(".small-nav-container");
const BookingLink = document.querySelector('#booking-link');
const BorderDiv = document.querySelector('#border-div');
const BookATable = document.querySelector('#book-a-table');
const Main = document.querySelector("main"); 
const MainTop = (Main.offsetTop - 250);

const Section = document.querySelector('#gallery');
const SectionTop = (Section.offsetTop - 500);
const SectionBottom = (Section.offsetHeight - 200);
const SecondSection = document.querySelector('#second-section');
const SecondSectionTop = (SecondSection.offsetTop);

const FirstImageContainer = document.querySelector("#first-container");
const FirstImageContainerTop = (FirstImageContainer.offsetTop);
const FirstImage = document.querySelector("#first-image");
const SecondImageContainer = document.querySelector("#second-container");
const SecondImageContainerTop = (SecondSectionTop + SecondImageContainer.offsetTop);
const SecondImage = document.querySelector("#second-image");

function navPosition() {
  scrollpos = window.scrollY;

  if (window.innerWidth < 1440 && window.innerWidth > 992) {
    if (scrollpos >= MainTop && scrollpos <= SectionTop) {
      SmallNav.style.left = 200 + 'px';
    } else {
      SmallNav.className = 'small-nav-container';
      SmallNav.style.left = 0 + 'px';
    }
  }else if (window.innerWidth <= 992) {
    if (scrollpos >= MainTop && scrollpos <= SectionTop) {
      SmallNav.style.left = 0 + 'px';
    } else if (scrollpos >= SectionTop) {
      SmallNav.className = 'small-nav-container';
      SmallNav.style.left = 0 + 'px';
    } else {
      SmallNav.className = 'small-nav-container nav-invisible';
      SmallNav.style.left = 0 + 'px';
    }
  } else {    
    if (scrollpos >= MainTop && scrollpos <= SectionTop) {
      SmallNav.style.left = 315 + 'px';
    } else {
      SmallNav.className = 'small-nav-container';
      SmallNav.style.left = 0 + 'px';
    }    
  } 
}

window.addEventListener('resize', function() {
    if (scrollpos >= MainTop && scrollpos <= SectionTop) {
      SmallNav.className = 'small-nav-container';
      navPosition();
    }
    else {
      navPosition();
    }

    if (window.innerWidth <= 992) {
      
      if (NarrowHeader.className === 'stay-down') {
        NavDown();
      } else {
        NavUpStatic();
      }   
    } else {
     
      NavDown();
    } 
});

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    
    // adding class to small vertical navbar on scroll
    if (scrollpos >= MainTop && scrollpos <= SectionTop) {
        if (SmallNav.className !== 'small-nav-container') {
          SmallNav.className = 'small-nav-container nav-grow';
        }        
    } else if (scrollpos > SectionTop) {
        if (SmallNav.className !== 'small-nav-container') {
          SmallNav.className = 'small-nav-container nav-shrink';
        }else {
          SmallNav.className = 'small-nav-container nav-shrink';
        }       
      } else {
          SmallNav.className = 'small-nav-container nav-invisible';
      }
          
    // adding class to first section image on scroll
    if (scrollpos >= SectionTop) {    
        if (scrollpos >= (FirstImageContainerTop - 400)) { 
            FirstImage.className = 'image image-grow';
        }
    } else if (scrollpos <= (SectionTop - 550)) {
        FirstImage.className = 'image image-shrink';
      }
    
    // adding class to second section image on scroll
    if (scrollpos >= (SectionTop + SectionBottom)) {         
        if (scrollpos >= (SecondImageContainerTop - 600)) { 
            SecondImage.className = 'image image-grow';
        }  
    } else if (scrollpos <= (SecondImageContainerTop - 1200)) {
        SecondImage.className = 'image image-shrink';
      }
});

function navHeight() {
  if (Nav.className !== 'nav-up') {
    NavUp();
    NarrowHeader.className = 'stay-up';
  } else {
    NavDown();
    NarrowHeader.className = 'stay-down';
  }
}

window.addEventListener('load', function() {
  if (window.innerWidth > 992) {
    setTimeout(NavDownOnLoad, 1700);
  } else {
    NavUpStatic();
  }
});


  for (let i = 0; i < NavItems.length; i++) {
    NavItems[i].addEventListener('click', function() {
      if (window.innerWidth <= 992) {
        NavUp();
      }
    });
  }
