import { Category, Product } from '@/sanity.types';

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
  // Add other props if needed
}

const ProductView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      {/* categories */}
      <div className="w-full sm:w-[200px]">
        {/* <CategorySelectorCompoment categories={categories} /> */}
      </div>
      {/* products */}
      <div className="flex-1">
        <div>
          {/* <ProductGrid products={products} /> */}

          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
