import { Button } from '@/components/ui/button';
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';

export default async function Home() {
  const products = await getAllProducts;

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //     `>>>Rendered the home page cache with ${products.length} products and ${categories.length} categories`
  // );

  return (
    <div>
      <h1>Hello world 1234</h1>
      <Button>Click Me</Button>
    </div>
  );
}
