"use client";
import { Card } from "../general/card";
import { useState, useEffect } from "react";
import { useTranslations } from "use-intl";
import { products } from "@/app/[locale]/products.test";

export function WeeklyTopSelling() {
  const [favorites, setFavorites] = useState({});
  const t = useTranslations("weeklyTopSelling");
  const [shuffled, setShuffled] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
      const copy = [...products];
      const shuffledArray = copy.sort(() => Math.random() - 0.5).slice(0, 4);
      setShuffled(shuffledArray);
    }, [products]);

  return (
    <section className="py-10 text-white">
      {/* Título */}
      <h2 className="text-center text-2xl font-semibold mb-6">#{t("weekly")}</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shuffled.map((product) => (
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
    </section>
  );
}
