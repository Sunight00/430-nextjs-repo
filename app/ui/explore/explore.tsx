import { getProducts } from "@/app/lib/actions"

//PROB
type query={
    query: string;
}

export  async function DisplayData({query}: query){
    const products = await getProducts(query);
    return(
        /*<div className="flex flex-row gap-7 mt-2 flex-wrap justify-center">
            {products.map((product) => (
                <div key={product.id} className="border rounded-xl text-center bg-cyan-50">
                    <img src={product.image_url} alt={product.title}width={128} height={128} className="w-32 h-32 md:h-50 md:w-50 object-cover border-t border-b rounded-xl" />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>By: {product.name}</p>
                </div>
            ))}
        </div>*/

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 p-1">
  {products.map(product => (
    <div
      key={product.id}
      className="border border-cyan-200 rounded-md bg-cyan-50 shadow-sm hover:shadow-md transition-shadow duration-150 p-2 flex flex-col items-center text-center"
    >
      {/* Image */}
      <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-md mb-1 border-t border-b border-cyan-200">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2 className="text-sm md:text-base font-semibold text-cyan-900 mb-1 truncate">
        {product.title}
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-xs md:text-sm mb-1 truncate">
        {product.description}
      </p>

      {/* Price */}
      <p className="font-bold text-cyan-800 text-xs md:text-sm mb-1">
        ${product.price}
      </p>

      {/* Author */}
      <p className="text-gray-600 text-[10px] truncate">By: {product.name}</p>
    </div>
  ))}
</div>

    )
}