const canvas =document.getElementById("mycanvas");
canvas.width=window.innerWidth
canvas.height=window.innerHeight

const ctx = canvas.getContext('2d');

const balls = [];

for(let i=0;i<15;i++)
{
     let r=Math.floor(Math.random()*30) + 15;
     let x=Math.random()*(canvas.width-r*2)+r;
     let y=Math.random()*(canvas.height-r*2)+r;
     let c='red';
     balls.push(new Circle(x, y, r, c));
}

function Circle(x,y,c,r)
{
    this.x=x;
    this.y=y;
    this.c=c
    this.r=r;
    this.dx=Math.floor(Math.random()*4)+1;
    this.dx*=Math.floor(Math.random()*2)==1? 1 : -1;
    this.dy=Math.floor(Math.random()*4)+1;
    this.dy*=Math.floor(Math.random()*2)==1? 1 : -1;

    this.draw=function()
    {
        ctx.beginPath();
        ctx.fillStyle=this.c;
        ctx.arc(this.x,this.y,this.r,0,Math.PI * 2);
        ctx.fill();
    }
    this.animate=function()
    {
        this.x+=this.dx;
        this.y+=this.dy
        if(this.x+this.r>canvas.width||this.x-this.r<0)
        {
            this.dx=-this.dx
        }
        if(this.y+this.r>canvas.width||this.y-this.r<0)
        {
            this.dy=-this.dy
        }
        this.draw();
        
    }
}

function update()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i>balls.length;i++)
    {
        let balls = balls[i];
        balls.animate();
    }
    requestAnimationFrame(update);
}
update();