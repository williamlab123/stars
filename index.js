// // var canvas = document.getElementById("canvas");
// // var ctx = canvas.getContext("2d");

// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;

// // var stars = [];

// // for (var i = 0; i < 1000; i++) {
// //     stars.push({
// //         x: Math.random() * canvas.width,
// //         y: Math.random() * canvas.height,
// //         size: Math.random() * 3,
// //         speed: Math.random() * 5 + 1
// //     });
// // }

// // function draw() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);

// //     ctx.fillStyle = "white";
// //     for (var i = 0; i < stars.length; i++) {
// //         var star = stars[i];
// //         ctx.beginPath();
// //         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
// //         ctx.fill();

// //         star.x -= star.speed / 2;
// //         star.y -= star.speed;

// //         if (star.x < -star.size || star.y < -star.size || star.y > canvas.height + star.size) {
// //             star.x = Math.random() * canvas.width;
// //             star.y = canvas.height + star.size;
// //         }
// //     }

// //     requestAnimationFrame(draw);
// // }

// // draw();

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var stars = [];

// for (var i = 0; i < 1000; i++) {
//     stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 3,
//         speed: Math.random() * 5 + 1
//     });
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "white";
//     for (var i = 0; i < stars.length; i++) {
//         var star = stars[i];
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//         ctx.fill();

//         star.x += star.speed / 2;
//         star.y += star.speed;

//         if (star.x < -star.size || star.y < -star.size || star.x > canvas.width + star.size) {
//             star.x = Math.random() * canvas.width;
//             star.y = -star.size;
//         }
//     }

//     requestAnimationFrame(draw);
// }



//////////////////////////////////////

 var starsContainer = document.getElementById("stars");

function createStar() {
   var star = document.createElement("div");
   star.classList.add("star");
   star.style.left = Math.random() * 100 + "%";
   star.style.top = Math.random() * 100 + "%";
   starsContainer.appendChild(star);
 }

 for (var i = 0; i < 1500; i++) {
   createStar();
 }

 var starsContainer = document.getElementById("stars");
 var zoom = 0;

 function animateStars() {
   zoom += 0.0010;
   starsContainer.style.transform = "scale(" + zoom + ")";

   if (zoom >= 4.1) {
     starsContainer.innerHTML = "";
     zoom = 1;
     for (var i = 0; i < 1500; i++) {
       createStar();
     }
   }

   window.requestAnimationFrame(animateStars);
 }

 animateStars();


//////////////////////////////