import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './dots';


const benefits = [
   {
    title: "Strengthens the immune system",
    description: "Cordyceps Sinensis is rich in antioxidants and has been studied for its potential to strengthen the immune system. It may help the body defend against infections and maintain overall health.",
    background: "#f2f7eb"
  },
  {
    title: "Enhanced Energy Levels",
    description: "Cordyceps Sinensis is believed to boost energy levels by increasing the production of adenosine triphosphate (ATP), the primary energy carrier in cells. This can lead to improved stamina and endurance.",
    background: "#f2f7eb"
  },
  {
    title: "Improved Athletic Performance",
    description: " Athletes often use Cordyceps Sinensis for its potential to enhance oxygen utilization and reduce fatigue. It may help improve aerobic capacity and overall performance during physical activities.",
    background: "#f2f7eb"
  },
 
  {
    title: "Anti-inflammatory Effects",
    description: "Studies suggest that Cordyceps Sinensis may possess anti-inflammatory properties, which could help reduce inflammation in the body and support joint health.",
    background: "#f2f7eb"
  },
  {
    title: "Respiratory Health Support",
    description: "Traditional use and some research indicate that Cordyceps Sinensis may support respiratory function and help manage respiratory conditions like asthma and bronchitis.",
    background: "#f2f7eb"
  }
];

const CordycepsBenefitsCarousel = () => {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false },[Autoplay()])

     const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
    
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])


  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container grid grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="embla__slide p-4 rounded-md col-span-4"
            
          >
            <h2 className="text-xl font-bold mb-2">{benefit.title}</h2>
            <p className="text-gray-700 text-justify">{benefit.description}</p>
          </div>
        ))}
      </div>

       <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
    </div>
  );
};

export default CordycepsBenefitsCarousel;
