import Image from "next/image";

// Componente DetailsCard recibe varias props para mostrar detalles de un producto específico.
export default function DetailsCard({id, name, price, cardImage, isNew, imagepng, type, sale, description, size, color, material , details, closeDetails }) {
    // Si no hay detalles (details === false o null), no renderiza nada.
    if (!details) return null; 
    return (
        <div className="overflow-x-hidden fixed inset-0 flex items-center justify-center bg-black/80 z-10 cursor-default overflow-y-auto touch-none" >
            <div className="bg-[#181818] overflow-x-hidden p-5 rounded-lg relative z-20 text-white w-5xl max-md:w-4xl max-h-[150vh] overflow-y-auto flex justify-center items-center max-sm:flex-col max-sm:h-full max-sm:bg-black" onClick={(e) => e.stopPropagation()}>
                
                {/* Columna izquierda: imagen, botón volver, precio */}
                <div className="flex flex-col justify-center w-1/3 h-full mr-2 max-sm:h-[70%] max-sm:w-full">
                    
                    {/* 
                      Botón volver con icono material-symbols
                    */}
                    <span 
                      className="material-symbols-outlined bg-white text-black px-1 py-1 rounded-4xl cursor-pointer w-8 flex items-center justify-center" 
                      onClick={(e) => { e.stopPropagation(); closeDetails(); }}
                    >
                      arrow_back
                    </span>

                    {/* Imagen principal del producto */}
                    <Image 
                      width={100} 
                      height={100} 
                      className="w-[90%] mx-auto max-sm:w-[80%] max-sm:border-amber-50 max-sm:rounded-2xl max-sm:p-3" 
                      src={imagepng} 
                      alt={name}
                    />

                    {/* Precio del producto */}
                    <h2 className="text-2xl font-bold mx-auto mt-5">{price}</h2>

                    {/* 
                      Barra inferior con botones para navegar o agregar al carrito
                      - En móviles (max-sm) está fija en la parte inferior con fondo oscuro
                      - Espaciado y diseño responsivo
                    */}
                    <div className="flex justify-between items-center mt-2 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:bg-[#181818] max-sm:p-2 max-sm:rounded-t-lg w-full max-sm:h-16 max-sm:gap-2">
                        
                        {/* Botón flecha atrás */}
                        <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer mr-5">
                          <span className="material-symbols-outlined text-[24px] leading-none">arrow_back</span>
                        </span>

                        {/* Botón ingresar al carrito con texto y flecha adelante */}
                        <div className="flex gap-1 pr-2 items-center rounded-full border-3 border-green-500 ">
                            <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                                <span className="material-symbols-outlined text-[24px] leading-none">arrow_forward</span>
                            </span>
                            <p className="text-[12px] text-bold ">Ingresar al carrito</p>
                        </div>

                        {/* Botón flecha adelante */}
                        <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer ml-5">
                          <span className="material-symbols-outlined text-[24px] leading-none">arrow_forward</span>
                        </span>

                    </div>
                </div>

                {/* Columna derecha: detalles del producto */}
                <div className="flex flex-col justify-between w-2/3 h-[90%] p-10 border-l-4 border-white/60 max-sm:w-full max-sm:h-[30%] max-sm:p-2 max-sm:border-l-0 max-sm:border-t-4 max-sm:border-t-white/60 max-sm:pb-32 mx-10">

                    {/* Nombre del producto */}
                    <h1 className="text-3xl font-bold uppercase max-sm:text-xl mb-5">{name}</h1>

                    {/* Descripción de ejemplo (placeholder) */}
                    <p className="text-xs mb-2 max-md:text-[10px] max-md:mb-2">
                      {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>

                    {/* Sección tallas disponibles */}
                    <h3 className="text-2xs max-sm:text-xs">SIZE</h3>
                    <ul className="flex gap-2 my-2 mb-2 w-full text-xs">
                        {size.map((s, index) => (
                            <li 
                              key={index} 
                              className="cursor-pointer px-2 py-1 border border-white/60 rounded hover:bg-white/20 transition-colors"
                              onClick={() => console.log(`Selected size: ${s}`)}
                            >
                                {s}
                            </li>
                        ))}
                    </ul>

                    {/* Sección colores disponibles */}
                    <h3>COLOR</h3>
                    <ul className="flex gap-2 my-2 max-sm:pb-30">
                        {color.map((c, index) => (
                            <li 
                              key={index} 
                              className="cursor-pointer px-2 py-1 border border-white/60 rounded hover:bg-white/20 transition-colors"
                              onClick={() => console.log(`Selected color: ${c}`)}
                            >
                                {c}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}
