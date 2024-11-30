import { Metadata } from "next";
import { StoreManagement } from "@/components";

export const metadata: Metadata = {
  title: "Store",
  description: "This is the place to sell the cars",
};

export default function Store() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen p-4">
      <StoreManagement />
    </main>
  );
}
