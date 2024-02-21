// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true,
//     lerp:0.1
// });


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start: 'top top',
        scrub:1,
        pin:true,
    }
});

tl
.to(".box-container",{
    x:'-2200',
});

var tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:'body',
        trigger:'.box-container',
        start:'top 50%',
        scrub:2,
        // markers:true,
    }
})
tl2

.to('#img-1',{
    x:300,
},'val')

.to('#img-2',{
    x:300,
},'val')

.to('#img-3',{
    x:300,
},'val')

.to('#img-4',{
    x:300,
},'val')

.to('#img-5',{
    x:300,
},'val')

.to('#img-6',{
    x:300,
},'val')

.to('#img-7',{
    x:300,
},'val')

.to('#img-8',{
    x:300,
},'val')
