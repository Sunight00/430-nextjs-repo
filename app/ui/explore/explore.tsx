import { getProducts } from "@/app/lib/actions";
import ProductCard from "@/app/ui/explore/productcard";

type QueryProps = {
  query: string;
};

export async function DisplayData({ query }: QueryProps) {
const products = (await getProducts(query)) ;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
