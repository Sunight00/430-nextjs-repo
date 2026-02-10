import { getProducts } from "@/app/lib/actions"

//PROB
type query={
    query: string;
}

export  async function DisplayData({query}: query){
    const products = await getProducts(query);
    return(
        <div className="flex flex-row gap-7 mt-2 flex-wrap justify-center">
            {products.map((product) => (
                <div key={product.id} className="border rounded-xl text-center bg-cyan-50">
                    <img src={product.image_url} alt={product.title}width={128} height={128} className="w-32 h-32 md:h-50 md:w-50 object-cover border-t border-b rounded-xl" />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>By: {product.name}</p>
                </div>
            ))}
        </div>
    )
}