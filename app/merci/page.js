"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Merci() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const [confettis, setConfettis] = useState([]);

  useEffect(() => {
    // Crée 30 confettis aléatoires
    const conf = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      size: 5 + Math.random() * 12 + "px",
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      rotateX: Math.random() * 360 + "deg",
      rotateY: Math.random() * 360 + "deg",
      duration: 1 + Math.random() * 2 + "s",
    }));
    setConfettis(conf);

    // Fade-out après 1.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);

    // Redirection après 2s
    const redirectTimer = setTimeout(() => router.push("/"), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold z-10">
        Merci pour ton message 🙌
      </h1>

      {/* Confettis */}
      {confettis.map((c) => (
        <span
          key={c.id}
          className="absolute rounded-full opacity-80 animate-fall3d"
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            transform: `rotateX(${c.rotateX}) rotateY(${c.rotateY})`,
            animationDuration: c.duration,
          }}
        ></span>
      ))}

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fall3d {
          0% {
            transform: translateY(0) rotateX(0deg) rotateY(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotateX(360deg) rotateY(720deg);
            opacity: 0;
          }
        }
        .animate-fall3d {
          animation-name: fall3d;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
