import React from "react";
import { BlurImage } from "./BlurImage";

export const Product = ({ product }: any) => {
  return (
    <div className="py-6 lg:py-10 flex flex-col lg:flex-row  my-20">
      <div className="pr-4">
        <h1 className="font-bold text-2xl text-slate-800">{product.title}</h1>
        <div className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          {product.description}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 lg:mt-0 space-y-6 sm:space-y-0 sm:space-x-6 overflow-x-auto flex-1">
        {product?.images.map((el: any, idx: number) => (
          <div
            key={`product-${product.id}-image-${idx}`}
            className="relative w-full h-52 sm:h-72 lg:h-[90%]  sm:w-[50%] lg:w-[45%] rounded-xl border border-gray-100"
          >
            <BlurImage
              src={el}
              layout="fill"
              className="object-cover object-left-top rounded-xl"
              alt={`Product Image`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
