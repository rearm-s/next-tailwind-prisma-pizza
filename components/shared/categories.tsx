"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";

interface Props {
  items: Category[];
  className?: string;
}

const Categories: React.FC<Props> = ({ items, className }) => {
  const activeId = useCategoryStore((state) => state.activeId);

  console.log(activeId, "activeId");

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map((category) => (
        <a
          key={category.id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === category.id &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
          href={`/#${category.name}`}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};

export { Categories };
