import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './dots';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";


const benefits = [
 
  {
    title: "Cordyceps Various Grades",
    description: "Grades A++,A+,A,B,C",
    image: "/products/3.jpeg"
  },
  {
    title: "Bhutan Cordyceps Tea",
    description: "Bhutan Cordyceps Sinensus Tea",
    image: "/products/4.jpeg"
  },
  
];

const ProductsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla_products" ref={emblaRef}>
      <div className="embla__container_products grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
        <>
            <Card
            isFooterBlurred
            radius="sm"
            className="border-none embla_slide_products "
          >
            <div
            key={index}
            className="embla__slide "
            style={{ backgroundImage: `url(${benefit.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "400px", }}
          >  
        
          </div>
           
              <CardFooter>
                <div className='text-wrap'>
                  <p>
                    {benefit.title}
                  </p>
                    <p>
                      {benefit.description}
                    </p>
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
