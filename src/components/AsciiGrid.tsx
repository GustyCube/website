import { useEffect, useRef } from 'react';

const charPool = ['·','·','·','·','·','·','·','·','·','+',':','*','°','×'];
const gridSize = 30;
const baseAlpha = 0.17;
const mousePeak = 0.65;
const flickerPeak = 0.5;
const influenceRadius = 200;
const flickerDuration = 600;

interface Cell {
  x: number;
  y: number;
  char: string;
  currentAlpha: number;
  nextCharChange: number;
  nextFlicker: number;
  flickerStart: number;
}

export function AsciiGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let cells: Cell[] = [];
    let viewportW = 0;
    let viewportH = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let rafId = 0;

    function resize() {
      viewportW = window.innerWidth;
      viewportH = window.innerHeight;
      canvas!.width = viewportW * dpr;
      canvas!.height = viewportH * dpr;
      canvas!.style.width = viewportW + 'px';
      canvas!.style.height = viewportH + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    }

    function buildGrid() {
      cells = [];
      const cols = Math.ceil(viewportW / gridSize) + 2;
      const rows = Math.ceil(viewportH / gridSize) + 2;
      const offsetX = (viewportW - (cols - 1) * gridSize) / 2;
      const offsetY = (viewportH - (rows - 1) * gridSize) / 2;
      const now = performance.now();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          cells.push({
            x: offsetX + x * gridSize,
            y: offsetY + y * gridSize,
            char: '·',
            currentAlpha: baseAlpha,
            nextCharChange: now + Math.random() * 4500 + 1200,
            nextFlicker: now + Math.random() * 8000 + 2500,
            flickerStart: -Infinity,
          });
        }
      }
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, viewportW, viewportH);
      ctx!.font = '13px "JetBrains Mono", ui-monospace, monospace';
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';

      for (const c of cells) {
        if (time > c.nextCharChange) {
          c.char = charPool[Math.floor(Math.random() * charPool.length)];
          c.nextCharChange = time + Math.random() * 4500 + 1200;
        }
        if (time > c.nextFlicker) {
          c.flickerStart = time;
          c.nextFlicker = time + Math.random() * 8000 + 2500;
        }

        const dx = c.x - mouseX;
        const dy = c.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseBoost = Math.max(0, 1 - dist / influenceRadius);
        const mouseAlpha = (mousePeak - baseAlpha) * mouseBoost * mouseBoost;

        const flickerAge = time - c.flickerStart;
        let flickerBoost = 0;
        if (flickerAge >= 0 && flickerAge < flickerDuration) {
          const t = flickerAge / flickerDuration;
          flickerBoost = (flickerPeak - baseAlpha) * Math.sin(t * Math.PI);
        }

        const targetAlpha = baseAlpha + mouseAlpha + flickerBoost;
        c.currentAlpha += (targetAlpha - c.currentAlpha) * 0.18;

        ctx!.fillStyle = 'rgba(12,12,10,' + c.currentAlpha.toFixed(3) + ')';
        ctx!.fillText(c.char, c.x, c.y);
      }

      rafId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="ascii-grid" aria-hidden="true" />;
}
