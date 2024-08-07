import React from "react";

interface ProductCardProps {
  backgroundImageUrl: string;
  title: string;
  description: string;
  link: string;
}

const ProductCardTest: React.FC<ProductCardProps> = ({
  backgroundImageUrl,
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden">
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
      </div>

      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          href={link}
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCardTest;
