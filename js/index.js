import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger);

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 'center',
    autoplay: 2000
}).mount();

const mobAnim = gsap.timeline({
    scrollTrigger: {
    trigger: ".first-single",
    start: "top bottom",
    end:"bottom center",
    scrub: 0.2
    }
});

mobAnim.from('.first-mob', {duration: 1, y:200, ease: "power4"});

const mobAnim2 = gsap.timeline({
    scrollTrigger: {
    trigger: ".second-single",
    start: "top bottom",
    end:"bottom center",
    scrub: 0.2
    }
});

mobAnim2.from('.second-mob', {duration: 1, y:200, ease: "power4"});

const streamBtns = gsap.timeline({
    scrollTrigger: {
    trigger: ".streaming-buttons",
    start: "top bottom"
    }
});
streamBtns.from('.strm-head', {stagger: 0.2, duration:1, opacity:0, ease:"power4"})
    .from('.streaming-btn', {duration:1, stagger:0.2, opacity:0, yPercent:-100, ease:"back"}, "-=1")
    .from('.arrow-1', {duration: 1, yPercent:-10, opacity:0, rotation: -15, ease: "elastic"}, "-=0.75")
    .from('.arrow-2', {duration: 1, yPercent:-10, opacity:0, rotation: 15, ease: "elastic"}, "-=0.75")
    .from('.missing-cover', {duration: 2, opacity:0, xPercent:-30, yPercent:-5, rotation: -15, ease: "power4"}, "-=1.5")
    .from('.sirens-cover', {duration: 2, opacity:0, xPercent:30, yPercent:10, rotation: 10, ease: "power4"}, "-=1.5");

const epAnim = gsap.timeline({
    scrollTrigger: {
    trigger: ".ep-container",
    start: "top center",
    end: "bottom center",
    scrub: true
    }
});
epAnim.to('.ep-container img:nth-of-type(1)', {duration: 1, x:-70})
    .to('.ep-container img:nth-of-type(2)', {x:70}, "-=1");