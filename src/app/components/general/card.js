"use client";
import { useState } from "react";
import Image from "next/image";
import DetailsCard from "./detailsCard";
export function Card({id, name, price, cardImage, isNew, toggleFavorite, favorites, imagepng}) {
  const [details, setDetails] = useState(false);
  const closeDetails = () => {
    setDetails(false);
  }
  const openDetails = () => {
    setDetails(true);
  }

    return(<>
        <div key={id} className="relative dark:bg-black p-4 rounded-xl shadow-sm shadow-amber-50 hover:shadow-md transition-all duration-300 cursor-pointer" onClick={() => openDetails()}>
            {/* Etiqueta "NEW" */}
            {isNew && (
              <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded-full"> NEW </span>
            )}

            {/* Botón de favorito */}
            <button
              onClick={() => toggleFavorite(id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-all duration-300"
            >
              {favorites[id] ? "❤️" : "🤍"}
            </button>

            {/* Imagen del producto */}
            <div className="top-8 w-full h-40 relative mb-4">
              <Image src={cardImage} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>

            {/* Nombre del producto */}
            <h3 className="text-lg font-medium mt-10 text-center">{name}</h3>

            {/* Precio */}
            <p className="text-gray-400 text-center">{price}</p>
            <DetailsCard id={id} name={name} price={price} cardImages={imagepng} isNew={isNew} toggleFavorite={toggleFavorite} favorites={favorites} details={details} closeDetails={closeDetails}/>
        </div>
    </>)
}