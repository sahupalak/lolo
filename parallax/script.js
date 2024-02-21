var tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page1",
      start: "top top",
      pin: true,
      // markers: true,
      scrub: 2,
    },
  });
  tl
  .to(".box-container", {
    x: -2000,
  });
  // var boxes = document.querySelectorAll(".boxes");
  
  // boxes.forEach((e) => {
  //   e.addEventListener("click", function () {
  //     e.style.height = "100vh";
  //     e.style.width = "100%";
  //     e.style.zIndex = "999999";
  //     e.style.transition = "all ease 0.5s";
  //   });
  // });
  
  // var tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     scroller: "body",
  //     trigger: ".box-container",
  //     start: "top 50%", 
  //     markers: true,
  //     scrub: 2,
  //   },
  // });//   .to("#img1", {
  //     x: 230,
  
  //   },'elem')
  // tl2
  
  //   .to("#img2", {
  //     x: 230,
  
  //   },'elem')
  //   .to("#img3", {
  //     x: 230,
  
  //   },'elem')
  //   .to("#img4", {
  //     x: 230,
  
  //   },'elem')
  //   .to("#img5", {
  //     x: 230,
  
  //   },'elem')
  //   .to("#img6", {
  //     x: 230,
  
  //   },'elem')
  //   .to("#img7", {
  //     x: 230,
  
  //   },'elem')
  //   .to("#img8", {
  //     x: 230,
  
  //   },'elem');
  
  
  var tl2 = gsap.timeline({
    scrollTrigger:{
      scroller:'body',
      trigger:'.box-container',
      start:'top 50%',
      markers:true,
      scrub:2
    }
  })
  tl2
    
  .to('#img1',{
    x: 230,
  },'elem')
  .to('#img2',{
    x: 230,
  },'elem')
  .to('#img3',{
    x: 230,
  },'elem')
  .to('#img4',{
    x: 230,
  },'elem')
  .to('#img5',{
    x: 230,
  },'elem')
  .to('#img6',{
    x: 230,
  },'elem')
  .to('#img7',{
    x: 230,
  },'elem')