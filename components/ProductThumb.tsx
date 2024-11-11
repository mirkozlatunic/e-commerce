import { imageUrl } from '@/lib/imageUrl';
import { Product } from '@/sanity.types';
import Image from 'next/image';
import Link from 'next/link';

function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? 'opacity-50' : ''}`}
    >
      {' '}
      hello
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {product.image && (
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-500"
            src={imageUrl(product.image).url()}
            alt={product.name || 'Product Name'}
            fill
            sizes="(max-width: 768px) 100vw, (max-1200px) 50vw, 33vw"
          />
        )}
        {isOutOfStock && (
          <div className="absolut inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductThumb;