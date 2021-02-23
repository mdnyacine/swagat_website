import '/styles/main.scss'
import ScrollMagic from "scrollmagic"
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {
    TweenMax,
    TimelineMax,
    gsap,
    Expo,
    TweenLite
} from 'gsap'
import {
    ScrollMagicPluginGsap
} from 'scrollmagic-plugin-gsap'

gsap.registerPlugin(ScrollToPlugin);
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


const link = document.querySelectorAll('.nav__el a')

for (let i = 0; i < link.length; i++) {
    const el = link[i];

    el.addEventListener('click', function (e) {
        e.preventDefault()
        const linkTo = this.getAttribute('href')

        gsap.to(window, {
            duration: 1.3,
            scrollTo: {
                y: linkTo,
                offsetY: 100
            }
        })

    })
}


var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

tl.set(".container_story, .container_menu", {
    opacity: 0,
    y: 80
})
tl.set("h1, header p, header .btn", {
    opacity: 0,
})
tl.set("header .btn", {
    opacity: 0,
    y: 200
})
tl.set(".container_speciality", {
    opacity: 0,
    x: -200
})
tl.set("aside", {
    x: '100%',
})

tl.to("h1", 2, {
        opacity: 1,
        ease: Expo.easeOut,
    }, 0.5)

    .addLabel("blueGreenSpin", "0")
    .to("header p", 2, {
        opacity: 1,
        ease: Expo.easeOut,
    }, "blueGreenSpin+=1")
    .to("header .btn", 2, {
        y: 0,
        opacity: 1,
        ease: Expo.easeOut,
    }, "blueGreenSpin+=1.5");

var btnInfo = document.getElementById('btn_info');
var btnClose = document.getElementById('btn_close');

btnInfo.addEventListener("click", function info() {
    var tl = new TimelineMax();

    tl.to("aside", 0.5, {
        x: 0,
        ease: Expo.easeOut,
    })
});

btnClose.addEventListener("click", function info() {
    var tl = new TimelineMax();

    tl.to("aside", 0.5, {
        x: '100%'
    })
});




var scene = new ScrollMagic.Scene({
        triggerElement: '#story',
        offset: 150,
        reverse: false,
    })
    .addIndicators({
        name: "story (duration: 0)"
    })
    .setTween(new TimelineMax().add([
        TweenLite.to(".container_story", 0.7, {
            opacity: 1,
            y: 0,
        }),
        TweenLite.from(".illu_right", 0.7, {
            y: '100%',
            x: '50%'
        }),
        TweenLite.from(".illu_left", 0.7, {
            y: '100%',
            x: '-50%'
        }),
    ]));

// .addIndicators({
//     name: "story (duration: 0)"
// })

scene.addTo(controller);


var scene2 = new ScrollMagic.Scene({
        triggerElement: '#speciality',
        offset: 150,
        reverse: false,
    })
    .setTween(".container_speciality", 0.7, {
        opacity: 1,
        x: 0
    })

    .addIndicators({
        name: "spécialités (duration: 0)"
    })

    .addTo(controller);


var scene3 = new ScrollMagic.Scene({
        triggerElement: '#menu',
        offset: 150,
        reverse: false,
    })
    .setTween(new TimelineMax().add([
        TweenLite.to(".container_menu", 0.7, {
            opacity: 1,
            y: 0,
        }),
        TweenLite.from(".illu_right2", 0.7, {
            y: '100%',
            x: '50%'
        }),
        TweenLite.from(".illu_left2", 0.7, {
            y: '100%',
            x: '-50%'
        }),
    ]));

// .addIndicators({
//     name: "menu (duration: 0)"
// })

scene3.addTo(controller);



function Tabs() {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();