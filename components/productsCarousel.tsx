import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardFooter } from "@nextui-org/card";

const benefits = [
  {
    title: "Cordyceps Various Grades",
    description: "Grades A++,A+,A,B,C",
    image: "/products/3.jpeg",
  },
  {
    title: "Bhutan Cordyceps Tea",
    description: "Bhutan Cordyceps Sinensus Tea",
    image: "/products/4.jpeg",
  },
];

const ProductsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="embla_products">
      <div className="embla__container_products grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <>
            <Card
              isFooterBlurred
              className="border-none embla_slide_products "
              radius="sm"
            >
              <div
                key={index}
                className="embla__slide "
                style={{
                  backgroundImage: `url(${benefit.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              />

              <CardFooter>
                <div className="text-wrap">
                  <p>{benefit.title}</p>
                  <p>{benefit.description}</p>
                </div>
              </CardFooter>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
