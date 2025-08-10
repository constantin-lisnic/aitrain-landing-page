import React from "react";
import { BlurImage } from "./BlurImage";

export const Product = ({ product }: any) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <div className="w-full h-[280px] rounded-xl border border-gray-100 overflow-hidden">
          <BlurImage
            src={product.images[0]}
            width={500}
            height={350}
            className="w-full h-full object-cover"
            alt={`${product.title} image`}
          />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl text-slate-800 mb-3">
          {product.title}
        </h1>
        <div className="text-sm text-slate-600 leading-6">
          {product.description}
        </div>
      </div>
    </div>
  );
};
