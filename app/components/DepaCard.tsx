"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Wifi, Key, BedDouble, Utensils, Train, MessageCircle, MapPin } from "lucide-react";

interface Depa {
  nombre: string;
  direccion: string;
  precio: string;
  precioDetalle: string;
  notaServicios?: string;
  metros: string;
  planta?: string;
  habitaciones: number;
  descripcion: string;
  caracteristicas: { icono: string; texto: string }[];
  metro: string[];
  fotos: string[];
  disponible: boolean;
  disponibleDesde?: string;
  disponibleFecha?: string; // ISO YYYY-MM-DD para calcular proximidad
  mapsUrl?: string;
  whatsappMsg: string;
}

const iconMap: Record<string, React.ReactNode> = {
  wifi: <Wifi size={14} />,
  key: <Key size={14} />,
  bed: <BedDouble size={14} />,
  kitchen: <Utensils size={14} />,
  train: <Train size={14} />,
};

function esMenos30Dias(fechaISO?: string): boolean {
  if (!fechaISO) return true;
  const diff = new Date(fechaISO).getTime() - Date.now();
  return diff <= 30 * 24 * 60 * 60 * 1000;
}

export default function DepaCard({ depa, whatsapp }: { depa: Depa; whatsapp: string }) {
  const [fotoActual, setFotoActual] = useState(0);
  const cercano = esMenos30Dias(depa.disponibleFecha);

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(depa.whatsappMsg)}`;

  if (!depa.disponible) {
    return (
      <div
        className="flex flex-col rounded-[12px] border border-[#2A2A30] overflow-hidden opacity-50"
        style={{ background: "#141416" }}
        data-testid="depa-card-proxima"
      >
        <div className="h-64 bg-[#1C1C20] flex items-center justify-center">
          <span className="text-[#52525C] text-sm uppercase tracking-[0.08em] font-semibold">Próximamente</span>
        </div>
        <div className="p-6">
          <p className="text-[11px] uppercase tracking-[0.08em] text-[#52525C] mb-1">Disponible pronto</p>
          <h3 className="text-lg font-semibold text-[#F2EFE8]">{depa.nombre}</h3>
          <p className="text-[#8A8A96] text-sm mt-1">{depa.direccion}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col rounded-[12px] overflow-hidden transition-transform duration-200 hover:-translate-y-1"
      style={{
        background: "#141416",
        border: cercano ? "2px solid #3D9B6E" : "1px solid #2A2A30",
      }}
      data-testid="depa-card"
    >
      {/* Galería */}
      <div className="relative h-64 bg-[#1C1C20] group">
        <Image
          src={depa.fotos[fotoActual]}
          alt={`${depa.nombre} — foto ${fotoActual + 1}`}
          fill
          className="object-cover transition-all duration-200"
          style={!cercano ? { filter: "grayscale(0.65) brightness(0.7)" } : {}}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={fotoActual === 0}
        />
        {depa.fotos.length > 1 && (
          <>
            <button
              onClick={() => setFotoActual((p) => (p - 1 + depa.fotos.length) % depa.fotos.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#0C0C0E]/70 hover:bg-[#0C0C0E]/90 text-[#F2EFE8] rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Foto anterior"
              data-testid="btn-foto-anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setFotoActual((p) => (p + 1) % depa.fotos.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0C0C0E]/70 hover:bg-[#0C0C0E]/90 text-[#F2EFE8] rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-label="Siguiente foto"
              data-testid="btn-foto-siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {depa.fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setFotoActual(i)}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
              style={{ background: i === fotoActual ? "#C9A55A" : "rgba(242,239,232,0.4)" }}
              data-testid={`dot-foto-${i}`}
            />
          ))}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1 gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] mb-0.5" style={{ color: cercano ? "#3D9B6E" : "#C94A4A" }}>
              {depa.disponibleDesde
                ? cercano
                  ? `Disponible a partir del ${depa.disponibleDesde}`
                  : `No disponible hasta el ${depa.disponibleDesde}`
                : "Disponible"}
            </p>
            <h3 className="text-lg font-semibold text-[#F2EFE8]">{depa.nombre}</h3>
            <p className="text-[#8A8A96] text-sm">{depa.direccion}</p>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-2xl font-light tracking-tight text-[#C9A55A]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "-0.02em" }}
            >
              {depa.precio}
            </p>
            <p className="text-[11px] text-[#52525C] uppercase tracking-[0.08em]">{depa.precioDetalle}</p>
            {depa.notaServicios && (
              <p className="text-[10px] text-[#52525C] mt-0.5 max-w-[140px] leading-tight">{depa.notaServicios}</p>
            )}
          </div>
        </div>

        {/* Badges metros, hab y planta */}
        <div className="flex gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[12px] px-3 py-1 rounded-full border border-[#2A2A30] text-[#8A8A96]">
            {depa.metros}
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] px-3 py-1 rounded-full border border-[#2A2A30] text-[#8A8A96]">
            {depa.habitaciones} habitaciones
          </span>
          {depa.planta && (
            <span className="inline-flex items-center gap-1 text-[12px] px-3 py-1 rounded-full border border-[#2A2A30] text-[#8A8A96]">
              Planta {depa.planta}
            </span>
          )}
        </div>

        <p className="text-[#8A8A96] text-sm leading-relaxed">{depa.descripcion}</p>

        {/* Características */}
        <ul className="grid grid-cols-2 gap-2">
          {depa.caracteristicas.map((c) => (
            <li key={c.texto} className="flex items-center gap-2 text-sm text-[#F2EFE8]">
              <span className="text-[#C9A55A]">{iconMap[c.icono]}</span>
              {c.texto}
            </li>
          ))}
        </ul>

        {/* Metro */}
        <div className="flex flex-wrap gap-1.5">
          {depa.metro.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full uppercase tracking-[0.06em]"
              style={{ background: "rgba(74,127,201,0.15)", color: "#4A7FC9" }}
            >
              <Train size={11} />
              {m}
            </span>
          ))}
        </div>

        {/* Botón Maps */}
        {depa.mapsUrl && (
          <a
            href={depa.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-[8px] border border-[#C9A55A] text-[#C9A55A] hover:bg-[#C9A55A]/10 transition-colors duration-200 text-sm"
            data-testid="btn-maps"
          >
            <MapPin size={16} />
            Ver ubicación en Maps
          </a>
        )}

        {/* CTA WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-[8px] text-[#0C0C0E] transition-colors duration-200"
          style={{ background: "#C9A55A" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#8A6F3A")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A55A")}
          data-testid="btn-whatsapp"
        >
          <MessageCircle size={18} />
          Consultar disponibilidad
        </a>
      </div>
    </div>
  );
}
