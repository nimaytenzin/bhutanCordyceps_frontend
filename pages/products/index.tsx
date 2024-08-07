import { title } from "@/components/primitives";
import ProductCardTest from "@/components/productCard";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const products = [
    {
      backgroundImageUrl: "/products/cordycepstea/product_front.webp",
      title: "Bhutan Cordyceps Tea",
      description:
        "Bhutan Cordyceps Tea by Bhutan Cordyceps Sinensis is a blend of Bhutanese Wild Cordyceps, Tulsi and Green Tea.",
      link: "products/cordycepstea",
    },
    {
      backgroundImageUrl: "/products/picrorhiza/product_front.png",
      title: "Bhutan  Picrorhiza Tea",
      description:
        "Bhutan Picrorrhiza Tea by Bhutan Cordyceps Sinensis is a blend of  picrorrhiza, and black tea.",
      link: "products/picrorhizatea",
    },
    {
      backgroundImageUrl: "/products/wildcordyceps/product.png",
      title: "Bhutan  Wild Cordyceps",
      description: "Highest Quality Graded Cordyceps.",
      link: "products/wildcordyceps",
    },
    // Add more products as needed
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Products</h1>
        </div>

        <div className="flex flex-wrap gap-6 my-12">
          {products.map((product, index) => (
            <ProductCardTest
              key={index}
              backgroundImageUrl={product.backgroundImageUrl}
              description={product.description}
              link={product.link}
              title={product.title}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
