import React from "react";

// generate ramdom color balls based on counts and background color
function Balls(props) {
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    var tx = window.innerWidth-20;
    var ty = (window.innerHeight -70)-20;
    canvas.width = tx;
    canvas.height = ty;
    //c.lineWidth= 5;
    //c.globalAlpha = 0.5;
    // console.log("Count:"+ props.count+ " Color:"+props.color);
  
    canvas.style.backgroundColor =props.color;
    var top= (window.innerHeight -70 )*0.5+70+'px';
    var left= window.innerWidth*0.5+'px';
    canvas.style.position ="absolute";
    canvas.style.top = top;
    canvas.style.left = left;
    console.log("Left "+ canvas.style.left +" and top "+ canvas.style.top );
    canvas.style.transform = "translate(-50%, -50%)";
  
    var mousex = 0;
    var mousey = 0;
  
    document.addEventListener("mousemove", function (event) {
      mousex = event.clientX;
      mousey = event.clientY;
    });
  
    var grav = 0.99;
    c.strokeWidth = 5;
  
    function randomColor() {
      return (
        "rgba(" +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.ceil(Math.random() * 10) / 10 +
        ")"
      );
    }
  
    function Ball() {
      this.color = randomColor();
      this.radius = Math.random() * 20 + 14;
      this.startradius = this.radius;
      this.x = Math.random() * (tx - this.radius * 2) + this.radius;
      this.y = Math.random() * (ty - this.radius);
      this.dy = Math.random() * 2;
      this.dx = Math.round((Math.random() - 0.5) * 10);
      this.vel = Math.random() / 5;
      this.update = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
        //c.stroke();
      };
    }
  
    var bal = [];
    for (var i = 0; i < props.count; i++) {
      bal.push(new Ball());
    }
  
    function animate() {
      if (tx !== window.innerWidth || ty !== window.innerHeight) {
        tx = window.innerWidth-20;
        ty = (window.innerHeight -70)-20;
        canvas.width = tx;
        canvas.height = ty;
  
        var top= (window.innerHeight -70 )*0.5+70+'px';
        var left= window.innerWidth*0.5+'px';
        canvas.style.position ="absolute";
        canvas.style.top = top;
        canvas.style.left = left;
        console.log("Left "+ canvas.style.left +" and top "+ canvas.style.top );
  
        canvas.style.transform = "translate(-50%, -50%)";
      
      }
      requestAnimationFrame(animate);
  
      //clean the whole canvas for redrawing balls in next round
      c.clearRect(0, 0, tx, ty);
  
      for (var i = 0; i < bal.length; i++) {
        bal[i].update();
        bal[i].y += bal[i].dy;
        bal[i].x += bal[i].dx;
        if (bal[i].y + bal[i].radius >= ty) {
          bal[i].dy = -bal[i].dy * grav;
        } else {
          bal[i].dy += bal[i].vel;
        }
        if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
          bal[i].dx = -bal[i].dx;
        }
        if (
          mousex > bal[i].x - 20 &&
          mousex < bal[i].x + 20 &&
          mousey > bal[i].y - 50 &&
          mousey < bal[i].y + 50 &&
          bal[i].radius < 70
        ) {
          //bal[i].x += +1;
          bal[i].radius += 5;
        } else {
          if (bal[i].radius > bal[i].startradius) {
            bal[i].radius += -5;
          }
        }
      }
    }
  
    animate();
  
    setInterval(function () {
      bal.push(new Ball());
      bal.splice(0, 1);
    }, 400);
  }
export default Balls