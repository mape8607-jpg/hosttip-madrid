import DepaCard from "./components/DepaCard";
import GoldButton from "./components/GoldButton";
import { MapPin, Shield, Zap } from "lucide-react";

const WHATSAPP = "524772288041";

const depas = [
  {
    nombre: "Almansa 55",
    direccion: "Calle de Almansa 55, Tetuán, Madrid",
    precio: "1,499€",
    precioDetalle: "piso completo / mes",
    notaServicios: "Servicios ~120€/mes · Comunidad incluida",
    metros: "78 m²",
    planta: "Bajo",
    habitaciones: 3,
    descripcion:
      "Piso luminoso de 78 m² en Tetuán, ideal para 3 estudiantes internacionales. A 10 min caminando de Ciudad Universitaria (Complutense, Politécnica, CUNEF) y 3 min de supermercado, gym y farmacias.",
    caracteristicas: [
      { icono: "key", texto: "Cerradura individual" },
      { icono: "bed", texto: "Cama, escritorio y armario" },
      { icono: "kitchen", texto: "Nevera, horno, microondas" },
      { icono: "kitchen", texto: "Lavadora incluida" },
      { icono: "wifi", texto: "Internet incluido" },
      { icono: "key", texto: "Comunidad incluida" },
    ],
    metro: ["Cuatro Caminos L1/L2/L6"],
    fotos: [
      "/depas/almansa/fb1.jpeg",
      "/depas/almansa/fb2.jpeg",
      "/depas/almansa/fb3.jpeg",
      "/depas/almansa/fb4.jpg",
      "/depas/almansa/fb5.jpeg",
      "/depas/almansa/fb6.jpeg",
      "/depas/almansa/fb7.jpg",
      "/depas/almansa/fb8.jpeg",
      "/depas/almansa/fb9.jpg",
    ],
    disponible: true,
    disponibleDesde: "15 de agosto de 2026",
    disponibleFecha: "2026-08-15",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=C.+de+Almansa,+55,+Tetuán,+28039+Madrid,+España",
    whatsappMsg:
      "Hola, me interesa información sobre el piso en Calle Almansa 55, Madrid. ¿Hay disponibilidad a partir del 15 de agosto de 2026?",
  },
  {
    nombre: "Eguilaz 3",
    direccion: "Calle Eguilaz 3, Chamberí, Madrid",
    precio: "2,700€",
    precioDetalle: "piso completo / mes",
    notaServicios: "Servicios aparte: aprox. €130/mes",
    metros: "75 m²",
    planta: "Bajo",
    habitaciones: 3,
    descripcion:
      "Piso recién reformado en una de las mejores ubicaciones de Madrid. A 10 min de ICADE y 15 min de Gran Vía. Comunidad e impuestos incluidos.",
    caracteristicas: [
      { icono: "key", texto: "Cerradura individual" },
      { icono: "wifi", texto: "Internet incluido" },
      { icono: "bed", texto: "Cama matrimonial y escritorio" },
      { icono: "kitchen", texto: "Electrodomésticos nuevos" },
    ],
    metro: ["Bilbao L1/L4", "Alonso Martínez L4/L5/L10"],
    fotos: [
      "/depas/eguilaz/sala.jpg",
      "/depas/eguilaz/comedor.jpg",
      "/depas/eguilaz/recamara1.jpeg",
      "/depas/eguilaz/cocina.jpg",
      "/depas/eguilaz/bano.jpg",
    ],
    disponible: true,
    disponibleDesde: "1 de febrero de 2027",
    disponibleFecha: "2027-02-01",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=C.+de+Eguilaz,+3,+Chamberí,+28010+Madrid,+España",
    whatsappMsg:
      "Hola, me interesa información sobre el piso en Calle Eguilaz 3, Madrid. ¿Hay disponibilidad a partir del 1 de febrero de 2027?",
  },
  {
    nombre: "Princesa 8",
    direccion: "C. de la Princesa, 8, Centro, 28008 Madrid",
    precio: "3,600€",
    precioDetalle: "piso completo / mes",
    notaServicios: "Servicios aparte: aprox. €190/mes",
    metros: "120 m²",
    planta: "PH",
    habitaciones: 2,
    descripcion:
      "Piso en una de las mejores ubicaciones de Madrid, a pasos de Plaza España y el Parque del Oeste. Ideal para estudiantes internacionales que buscan estar en el centro de todo.",
    caracteristicas: [
      { icono: "key", texto: "Cerradura individual" },
      { icono: "wifi", texto: "Internet incluido" },
      { icono: "bed", texto: "Cama, armario y escritorio" },
      { icono: "kitchen", texto: "Cocina equipada" },
    ],
    metro: ["Plaza de España L3/L10", "Ventura Rodríguez L3"],
    fotos: [
      "/depas/princesa/foto1.jpeg",
      "/depas/princesa/foto2.jpeg",
      "/depas/princesa/foto3.jpeg",
      "/depas/princesa/foto4.jpeg",
      "/depas/princesa/foto5.jpeg",
      "/depas/princesa/foto6.jpeg",
      "/depas/princesa/foto7.jpeg",
      "/depas/princesa/foto8.jpeg",
      "/depas/princesa/foto9.jpeg",
      "/depas/princesa/foto10.jpeg",
      "/depas/princesa/foto11.jpeg",
    ],
    disponible: true,
    disponibleDesde: "1 de febrero de 2027",
    disponibleFecha: "2027-02-01",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=C.+de+la+Princesa,+8,+28008+Madrid,+España",
    whatsappMsg:
      "Hola, me interesa información sobre el piso en Calle de la Princesa 8, Madrid. ¿Hay disponibilidad a partir del 1 de febrero de 2027?",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0E] overflow-x-hidden">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2A30]/80 px-6 py-4 flex items-center justify-between backdrop-blur-md" style={{ background: "rgba(12,12,14,0.85)" }}>
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold tracking-tight" style={{ color: "#C9A55A" }}>Hosttip</span>
          <span className="text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border border-[#2A2A30] text-[#52525C]">Madrid</span>
        </div>
        <GoldButton href={`https://wa.me/${WHATSAPP}`} className="py-2 px-4 text-sm" testId="btn-contactar-header">
          Contactar
        </GoldButton>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse, #C9A55A 0%, transparent 70%)", filter: "blur(80px)" }} />

        <p className="relative text-[11px] uppercase tracking-[0.15em] text-[#52525C] mb-5">
          Pisos para estudiantes internacionales
        </p>
        <h1 className="relative text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-[#F2EFE8] mb-6 max-w-3xl">
          Tu hogar en<br />
          <span style={{ color: "#C9A55A" }}>Madrid</span>
        </h1>
        <p className="relative text-base text-[#F2EFE8] max-w-md leading-relaxed mb-10">
          Pisos totalmente equipados, con todo lo necesario para tu vida universitaria en la capital española.
        </p>

        {/* Stats bar */}
        <div className="relative flex items-center gap-0 rounded-2xl overflow-hidden border border-[#2A2A30]" style={{ background: "#141416" }}>
          {[
            { valor: "1", label: "Piso disponible" },
            { valor: "Madrid", label: "España" },
            { valor: "1,499€", label: "Desde / mes" },
          ].map((s, i) => (
            <div key={i} className={`px-8 py-4 flex flex-col items-center ${i < 2 ? "border-r border-[#2A2A30]" : ""}`}>
              <span className="text-xl font-light text-[#C9A55A]" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "-0.02em" }}>{s.valor}</span>
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#52525C] mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Ventajas */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <Shield size={18} />, titulo: "Contrato formal", desc: "Gestión profesional, contrato en regla y total transparencia en precios." },
            { icon: <MapPin size={18} />, titulo: "Ubicación estratégica", desc: "A minutos del metro, universidades, supermercados y zonas de ocio." },
            { icon: <Zap size={18} />, titulo: "Todo incluido", desc: "Pisos completamente amueblados y equipados. Solo llega con tu maleta." },
          ].map((v) => (
            <div key={v.titulo} className="flex gap-4 p-5 rounded-[12px] border border-[#2A2A30]" style={{ background: "#141416" }}>
              <span className="text-[#C9A55A] mt-0.5 shrink-0">{v.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[#F2EFE8] mb-1">{v.titulo}</p>
                <p className="text-[13px] text-[#8A8A96] leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divisor */}
      <div className="max-w-5xl mx-auto px-6 mb-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-[#2A2A30]" />
        <span className="text-[11px] uppercase tracking-[0.12em] text-[#52525C]">Pisos disponibles</span>
        <div className="flex-1 h-px bg-[#2A2A30]" />
      </div>

      {/* Grid de depas */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depas.map((depa) => (
            <DepaCard key={depa.nombre} depa={depa} whatsapp={WHATSAPP} />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-[#C9A55A]/20 p-10 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #141416 0%, #1C1C20 100%)" }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #C9A55A 0%, transparent 70%)" }} />
          <p className="relative text-[11px] uppercase tracking-[0.12em] text-[#52525C] mb-3">¿Tienes dudas?</p>
          <h2 className="relative text-3xl font-semibold text-[#F2EFE8] mb-3">Escríbenos por WhatsApp</h2>
          <p className="relative text-[#8A8A96] mb-8 max-w-sm mx-auto">Te respondemos en menos de 24 horas con toda la información que necesitas.</p>
          <GoldButton href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, me interesa información sobre los pisos de Hosttip Madrid.")}`} testId="btn-cta-final">
            Iniciar conversación
          </GoldButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2A2A30] px-6 py-8 text-center" style={{ background: "#0C0C0E" }}>
        <p className="text-[12px] text-[#52525C]">© {new Date().getFullYear()} Hosttip · Madrid, España</p>
      </footer>

    </main>
  );
}
