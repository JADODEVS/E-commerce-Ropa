"use client"; // Indica que este componente se ejecuta en el cliente (Next.js App Router)

// Importación de hooks y componentes
import { useState } from "react";
import { Card } from "../general/card"; // Componente que representa una tarjeta de producto
import { products } from "@/app/[locale]/products.test"; // Datos de productos de prueba
import { useTranslations } from "use-intl"; // Hook para traducciones multilingües

// Componente principal que muestra productos destacados
export default function Catalog({ isOpenF }) {
  // Estado para almacenar productos marcados como favoritos (por id)
  const [favorites, setFavorites] = useState({});

  // Estado para controlar cuántos grupos de productos mostrar (multiplicado por 8)
  const [showMore, setShowMore] = useState(1);

  // Número de productos visibles, basado en showMore
  const productsToShow = 8 * showMore;

  // Traducciones del archivo "catalog" (por ejemplo, para el botón "Mostrar más")
  const t = useTranslations("catalog");

  // Función que alterna el estado de favorito de un producto según su id
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-10 text-white">
      {/* Grilla de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) => isOpenF === "none" || product.type === isOpenF)
          .slice(0, productsToShow)
          .map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              cardImage={product.image}
              isNew={product.isNew}
              imagepng={product.imagepng}
              type={product.type}
              sale={product.sale}
              description={product.description}
              size={product.size}
              color={product.color}
              material={product.material}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
        ))}
      </div>

      {(productsToShow < products.filter((product) => isOpenF === "none" || product.type === isOpenF).length || showMore > 1) && (
        <div className="flex justify-center gap-4 m-10 max-sm:flex-col max-sm:items-center">
          {/* Botón "Ver más" */}
          {productsToShow < products.filter((product) => isOpenF === "none" || product.type === isOpenF).length && (
            <button
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-all"
              onClick={() => setShowMore((prev) => prev + 1)}
            >
              {t("showMore")}
            </button>
          )}

          {/* Botón "Ver menos" */}
          {showMore > 1 && (
            <button
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-500 transition-all"
              onClick={() => setShowMore((prev) => Math.max(prev - 1, 1))}
            >
              {t("showLess") ?? "Ver menos"}
            </button>
          )}
        </div>
      )}

    </section>
  );
}
