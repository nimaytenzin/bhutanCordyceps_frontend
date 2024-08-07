import { Image } from "@nextui-org/image";
// import useEmblaCarousel from "embla-carousel-react";

import DefaultLayout from "@/layouts/default";
import CordycepsBenefitsCarousel from "@/components/carousel";
import IntroText from "@/components/introText";
import ProductCardTest from "@/components/productCard";

const products = [
  {
    backgroundImageUrl: "/products/cordycepstea/product_front.webp",
    title: "Bhutan Cordyceps Tea",
    description:
      "Bhutan Cordyceps Tea by Bhutan Cordyceps Sinensis is a blend of Bhutanese Wild Cordyceps, Tulsi and Green Tea.",
    link: "#",
  },
  {
    backgroundImageUrl: "/products/picrorhiza/product_front.png",
    title: "Bhutan  Picrorhiza Tea",
    description:
      "Bhutan Picrorrhiza Tea by Bhutan Cordyceps Sinensis is a blend of  picrorrhiza, and black tea.",
    link: "#",
  },
  {
    backgroundImageUrl: "/products/wildcordyceps/product.png",
    title: "Bhutan  Wild Cordyceps",
    description:
      "Bhutan Picrorrhiza Tea by Bhutan Cordyceps Sinensis is a blend of  picrorrhiza, and black tea.",
    link: "#",
  },
  // Add more products as needed
];

export default function IndexPage() {
  const styles = {
    transform: "rotate(-6deg)",
    border: "5px solid red", // Adjust the border width as needed
    borderImage:
      "linear-gradient(2deg, rgba(255,255,255,1) 0%, rgba(219,245,191,1) 50%, rgba(255,255,255,1) 100%) 1",
  };
  // const [emblaRef] = useEmblaCarousel({
  //   loop: true,
  // });

  return (
    <DefaultLayout>
      <section
        className={`flex flex-col items-center justify-center gap-4 py-12 md:py-10 px-[10rem]`}
      >
        <div className="flex gap-2">
          <IntroText />
          <div className="w-2/6 flex justify-center">
            <Image
              alt="NextUI hero Image"
              className="my-4"
              src="/cordyceps.png"
              style={styles}
              width={200}
            />
          </div>
          <div className="w-2/6 p-4  ">
            <CordycepsBenefitsCarousel />
          </div>
        </div>
        <div className="my-12 text-xl">
          <p>
            The
            <span className=" curved-underline">
              {" "}
              Wild Cordyceps Sinensis
            </span>{" "}
            from Bhutan is a powerful medicinal fungus that grows off the ghost
            moth caterpillar in rich Himalayan soil at altitudes above 3,800
            meters. It has been a part of traditional Asian medicine for
            centuries and is used for its immune-boosting properties and
            providing increased stamina.
          </p>
          <p>
            In Bhutan, Tibet and Nepal, indigenous peoples have witnessed the
            curative power of Cordyceps first-hand for generations, and
            centuries-old Traditional Chinese Medicine texts like the Ben Cao
            Cong Xin praise the fungus’s innumerable abilities. In the region,
            it is also known as the Himalayan Viagra “Yarsa gumba,” which
            translates as “winter worm, summer grass.
          </p>
        </div>
      </section>

      <section id="products">
        <div className="flex flex-wrap gap-4">
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
