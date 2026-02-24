import { useEffect, useRef } from "react";

export default function TextParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = 2;
        this.density = Math.random() * 30 + 1;
      }

      draw() {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = "orange";
        ctx.shadowBlur = 10;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;

          this.x -= directionX * force * this.density;
          this.y -= directionY * force * this.density;
        } else {
          // Smooth return (lerp)
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }
      }
    }

    let particleArray = [];

    function getResponsiveFontSize(text) {
        const maxWidth = window.innerWidth * 0.9;  
        let fontSize = 300;
      
        ctx.font = `bold ${fontSize}px Arial`;
        let textWidth = ctx.measureText(text).width;
    
        while (textWidth > maxWidth) {
          fontSize -= 2;
          ctx.font = `bold ${fontSize}px Helvetica`;
          textWidth = ctx.measureText(text).width;
        }
      
        return fontSize;
      }

    function init() {
        const fontSize = getResponsiveFontSize("MARKET PROJECT");
      ctx.fillStyle = "white";
      ctx.font = `bold ${fontSize}px Helvetica`;
      ctx.textAlign = "center";

      ctx.fillText(
        "MARKET PROJECT",
        canvas.width / 2,
        canvas.height / 2 + fontSize / 2
      );

      const textCoordinates = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particleArray = [];

      for (let y = 0; y < textCoordinates.height; y += 4) {
        for (let x = 0; x < textCoordinates.width; x += 4) {
          const index = (y * textCoordinates.width + x) * 4;

          if (textCoordinates.data[index + 3] > 128) {
            const positionX = x;
            const positionY = y;
            particleArray.push(new Particle(positionX, positionY));
          }
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "#1A1A1A",
      }}
    />
  );
}