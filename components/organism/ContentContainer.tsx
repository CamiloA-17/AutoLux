"use client";

import React from "react";
import { LateralList } from "../molecules/LateralList";
import { StoreManagement } from "./Store";

export function ContentContainer() {
  const filters = [
    { id: "1", label: "Ferrari" },
    { id: "2", label: "Mercedes" },
    { id: "3", label: "McLaren" },
    { id: "4", label: "BMW" },
    { id: "5", label: "Audi" },
    { id: "6", label: "Porsche" },
    { id: "7", label: "Lamborghini" }
  ];

  return (
    <main className="flex flex-col lg:flex-row min-h-screen p-4">
      <aside className=" bg-gray-100 p-6">
        <LateralList filters={filters} title="Marcas"/>
      </aside>

      <section className="w-full">
        <StoreManagement />
      </section>
    </main>
  );
}
