import DefaultLayout from "@/layouts/default";

export default function CordycepsTea() {
  const product = {
    backgroundImageUrl: "/products/picrorhiza/product_front.png",
    title: "Bhutan Picrorhiza Tea",
    description:
      "Bhutan Cordyceps Tea by Bhutan Cordyceps Sinensis is a blend of Bhutanese Wild Cordyceps, Tulsi and Green Tea.",
    link: "#",
    longDescription:
      "Bhutan Cordyceps Tea is a unique and exquisite blend crafted by Bhutan Cordyceps Sinensis. This tea combines the natural benefits of Bhutanese Wild Cordyceps, revered for its medicinal properties, with the soothing essence of Tulsi and the refreshing taste of premium Green Tea. The Wild Cordyceps, harvested from the pristine mountains of Bhutan, is known for its ability to boost energy, enhance stamina, and improve overall well-being. Tulsi, also known as Holy Basil, adds a calming and stress-relieving element to the blend, while the Green Tea provides antioxidants and a gentle caffeine boost. Together, these ingredients create a harmonious tea that not only delights the palate but also supports health and vitality. Perfect for any time of day, Bhutan Cordyceps Tea is a luxurious treat that embodies the purity and tradition of Bhutanese herbal wisdom. Enjoy a cup and experience the unique flavors and benefits of this remarkable tea.",
  };

  return (
    <DefaultLayout>
      <section className="py-8  md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                alt=""
                className="w-full dark:hidden"
                src={product.backgroundImageUrl}
              />
              <img
                alt=""
                className="w-full hidden dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product.title}
              </h1>
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                Nu. 450/Box
              </p>
              <p>Each box contains 50 Tea bags.</p>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {product.description}
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                {product.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
