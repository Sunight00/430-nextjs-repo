"use client";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  name: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const openDialog = () => {
    (
      document.getElementById(`dialog-${product.id}`) as HTMLDialogElement
    ).showModal();
  };

  const closeDialog = () => {
    (
      document.getElementById(`dialog-${product.id}`) as HTMLDialogElement
    ).close();
  };

  return (
    <div className="border border-cyan-200 rounded-md bg-cyan-50 shadow-sm hover:shadow-md transition-shadow duration-150 p-2 flex flex-col items-center text-center">
            <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-md mb-1 border-t border-b border-cyan-200">
                <img src={product.image_url} alt={product.title} className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"/>
            </div>

            {/* Title */}
            <h2 className="text-sm md:text-base font-semibold text-cyan-900 mb-1 truncate">
                {product.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-xs md:text-sm mb-1 truncate">
                {product.description.length > 50 ? product.description.slice(0, 30) + "..."   : product.description}
            </p>

            {/* Price */}
            <p className="font-bold text-cyan-800 text-xs md:text-sm mb-1">
                ${product.price}
            </p>

            {/* Author */}
            <p className="text-gray-600 text-[10px] truncate">By: {product.name}</p>

            <button onClick={openDialog} className="text-xs border px-2 py-1 rounded">Review</button>

            <dialog id={`dialog-${product.id}`} className="mr-auto ml-auto rounded-lg p-4">
                <div className="flex flex-col items-center gap-2">
                    <img src={product.image_url} className="w-32 h-32 object-cover rounded-md" alt={product.title} />
                    <h2 className="font-semibold">{product.title}</h2>
                    <p>{product.description}</p>
                    <p className="font-bold text-cyan-800 text-xs md:text-sm mb-1">${product.price}</p>
                    <button onClick={closeDialog} className="border px-3 py-1 rounded">
                        Close
                    </button>
                </div>
            </dialog>
    </div>
  );
}
