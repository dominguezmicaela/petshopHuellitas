import { useState, useEffect, useRef, useCallback } from "react";
//de prueba
export const RESENIAS = [
  { id: 1, nombre: "Valentina G.", mascota: "Perros", avatar: "🐶", estrellas: 5, texto: "Excelente atención y productos de muy buena calidad. Mi perro adora los snacks que compré, ¡ya pedí dos veces!" },
  { id: 2, nombre: "Martín R.",    mascota: "Gatos",  avatar: "🐱", estrellas: 5, texto: "Llegaron súper rápido y bien empaquetados. Los juguetes para mi gata son increíbles, los recomiendo 100%." },
  { id: 3, nombre: "Lucía P.",     mascota: "Perros", avatar: "🐕", estrellas: 4, texto: "Muy buena variedad de productos. El collar que compré es de excelente calidad y le queda perfecto a mi golden." },
  { id: 4, nombre: "Santiago M.",  mascota: "Gatos",  avatar: "🐈", estrellas: 5, texto: "La mejor tienda para mascotas que encontré online. Precios justos y envío rápido. ¡Mis gatos están felices!" },
  { id: 5, nombre: "Camila T.",    mascota: "Perros", avatar: "🦮", estrellas: 5, texto: "Compré alimento y accesorios, todo llegó en perfectas condiciones. La atención al cliente fue excelente." },
  { id: 6, nombre: "Nicolás F.",   mascota: "Gatos",  avatar: "😺", estrellas: 4, texto: "Muy contento con mi compra. Los productos son tal cual se muestran en las fotos. Volvería a comprar sin dudas." },
];

const CARD_W    = 334;
const INTERVALO = 4000;

export const useResenias = () => {
  const [activa, setActiva]   = useState(0);
  const [offset, setOffset]   = useState(0);
  const [pausado, setPausado] = useState(false);
  const viewportRef           = useRef(null);
  const timerRef              = useRef(null);
  const total                 = RESENIAS.length;

  const calcOffset = useCallback((idx) => {
    const vw = viewportRef.current?.offsetWidth ?? 800;
    return Math.max(0, CARD_W * idx - vw / 2 + CARD_W / 2);
  }, []);

  const irA = useCallback((idx) => {
    setActiva(idx);
    setOffset(calcOffset(idx));
  }, [calcOffset]);

  const siguiente = useCallback(() => {
    setActiva(a => {
      const next = (a + 1) % total;
      setOffset(calcOffset(next));
      return next;
    });
  }, [total, calcOffset]);

  const anterior = useCallback(() => {
    setActiva(a => {
      const prev = (a - 1 + total) % total;
      setOffset(calcOffset(prev));
      return prev;
    });
  }, [total, calcOffset]);

  // Auto-scroll — arranca siempre, se pausa/resume con pausado
  useEffect(() => {
    clearInterval(timerRef.current);
    if (!pausado) {
      timerRef.current = setInterval(siguiente, INTERVALO);
    }
    return () => clearInterval(timerRef.current);
  }, [pausado, siguiente]);

  // Recalcular offset al resize
  useEffect(() => {
    const onResize = () => setOffset(calcOffset(activa));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activa, calcOffset]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (!pausado) timerRef.current = setInterval(siguiente, INTERVALO);
  }, [pausado, siguiente]);

  return { resenias: RESENIAS, activa, offset, siguiente, anterior, irA, pausado, setPausado, resetTimer, viewportRef, total };
};

// Hook para animar un número de 0 a target
export const useCountUp = (target, duration = 1800, decimals = 0) => {
  const [value, setValue]     = useState(0);
  const [started, setStarted] = useState(false);
  const ref                   = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step  = (now) => {
      const p    = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(parseFloat((target * ease).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, decimals]);

  return { value, ref };
};