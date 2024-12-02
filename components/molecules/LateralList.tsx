import React from "react";

interface LateralListProps<T extends { id: number; name: string }> {
    filters: T[];
    onFilterClick?: (id: number) => void;
    title: string;
}

export function LateralList<T extends { id: number; name: string }>({
    filters,
    onFilterClick,
    title,
}: LateralListProps<T>) {
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
