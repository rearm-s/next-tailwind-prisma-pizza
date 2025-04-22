import React from "react";
import Link from "next/link";
import { Title } from "@/components/shared";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Курча, моцарела, сири чеддер і пармезан, сирний соус, томати, соус
          альфредо, часник
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            від <b>{price} грн.</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Додати
          </Button>
        </div>
      </Link>
    </div>
  );
};

export { ProductCard };
