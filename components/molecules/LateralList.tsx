import { Brand } from "@/types/api";
import React from "react";

interface LateralListProps {
    filters: Brand[];
    onFilterClick?: (id: number) => void;
    title: string; 
}

export function LateralList({ filters, onFilterClick, title }: LateralListProps) {
    return (
        <>
            <h3 className="text-xl font-bold mb-6">{title}</h3>
            <ul className="flex flex-nowrap lg:flex-col lg:overflow-visible overflow-x-auto">
                {filters.map((filter) => (
                    <li
                        key={filter.id}
                        className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                        onClick={() => onFilterClick?.(filter.id)}
                    >
                        {filter.name}
                    </li>
                ))}
            </ul>
        </>
    );
}