"use client";

import { useEffect, useRef } from "react";

/*
  A night sky behind the hero, ported from degreeint.com: a far layer of small
  neutral stars that twinkle, and a near layer of brand-accent nodes that
  drift, link to neighbours, and reach toward the pointer. Pure canvas.
  Theme-aware via the resolved colour scheme; respects reduced motion.
*/
const ACCENTS: Array<[number, number, number]> = [
  [217, 228, 168], // lime
  [79, 216, 200], // teal
  [110, 168, 255], // blue
];

type Node = { x: number; y: number; vx: number; vy: number; r: number; color: [number, number, number] };
type Star = { x: number; y: number; r: number; phase: number; rate: number; base: number };

const STAR_PARALLAX = 0.35;
const CONNECT_DIST = 130;
const POINTER_DIST = 170;

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const nodes: Node[] = [];
    const stars: Star[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    const parallax = { x: 0, y: 0, tx: 0, ty: 0 };

    const isDark = () => getComputedStyle(document.documentElement).colorScheme.includes("dark");

    function buildNodes() {
      nodes.length = 0;
      const target = Math.round(Math.min(80, Math.max(40, (width * height) / 16000)));
      for (let i = 0; i < target; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 0.8 + Math.random() * 1.6,
          color: ACCENTS[(Math.random() * ACCENTS.length) | 0],
        });
      }
      stars.length = 0;
      const starTarget = Math.round(Math.min(260, Math.max(90, (width * height) / 4200)));
      for (let i = 0; i < starTarget; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.35 + Math.random() * 0.75,
          phase: Math.random() * Math.PI * 2,
          rate: 0.6 + Math.random() * 1.5,
          base: 0.35 + Math.random() * 0.5,
        });
      }
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    function draw(t: number) {
      const dark = isDark();
      parallax.x += (parallax.tx - parallax.x) * 0.06;
      parallax.y += (parallax.ty - parallax.y) * 0.06;
      ctx!.clearRect(0, 0, width, height);

      const lineBase = dark ? 0.5 : 0.3;
      const dotBase = dark ? 0.85 : 0.6;
      const starAlpha = dark ? 1 : 0.55;
      const sx0 = parallax.x * STAR_PARALLAX;
      const sy0 = parallax.y * STAR_PARALLAX;
      for (const st of stars) {
        const twinkle = 0.72 + 0.28 * Math.sin(t * 0.001 * st.rate + st.phase);
        const a = st.base * twinkle * starAlpha;
        ctx!.beginPath();
        ctx!.arc(st.x + sx0, st.y + sy0, st.r, 0, Math.PI * 2);
        ctx!.fillStyle = dark ? `rgba(226,232,240,${a.toFixed(3)})` : `rgba(71,85,105,${a.toFixed(3)})`;
        ctx!.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const ax = a.x + parallax.x;
        const ay = a.y + parallax.y;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const bx = b.x + parallax.x;
          const by = b.y + parallax.y;
          const dx = ax - bx;
          const dy = ay - by;
          const d2 = dx * dx + dy * dy;
          if (d2 < CONNECT_DIST * CONNECT_DIST) {
            const k = 1 - Math.sqrt(d2) / CONNECT_DIST;
            const c = a.color;
            ctx!.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${(k * lineBase * 0.5).toFixed(3)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(ax, ay);
            ctx!.lineTo(bx, by);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        const nx = n.x + parallax.x;
        const ny = n.y + parallax.y;
        let boost = 0;
        if (pointer.active) {
          const dx = nx - pointer.x;
          const dy = ny - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < POINTER_DIST) {
            boost = 1 - dist / POINTER_DIST;
            const c = n.color;
            ctx!.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${(boost * (dark ? 0.6 : 0.4)).toFixed(3)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(nx, ny);
            ctx!.lineTo(pointer.x, pointer.y);
            ctx!.stroke();
          }
        }
        const c = n.color;
        const alpha = Math.min(1, dotBase + boost * 0.6);
        ctx!.beginPath();
        ctx!.arc(nx, ny, n.r + boost * 1.4, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(3)})`;
        ctx!.shadowBlur = boost > 0.2 ? 8 * boost : 0;
        ctx!.shadowColor = `rgba(${c[0]},${c[1]},${c[2]},${(boost * 0.9).toFixed(3)})`;
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }

    let raf = 0;
    function step(t: number) {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        else if (n.y > height + 20) n.y = -20;
      }
      draw(t);
      raf = requestAnimationFrame(step);
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
      parallax.tx = (pointer.x / width - 0.5) * -28;
      parallax.ty = (pointer.y / height - 0.5) * -28;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
      parallax.tx = 0;
      parallax.ty = 0;
    };

    resize();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => resize()) : null;
    ro?.observe(canvas);
    if (!ro) window.addEventListener("resize", resize);

    if (reduceMotion) {
      draw(0);
      return () => {
        ro?.disconnect();
        window.removeEventListener("resize", resize);
      };
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 h-full w-full" />;
}
