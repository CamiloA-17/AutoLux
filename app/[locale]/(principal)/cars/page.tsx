import { Metadata } from "next";
import { StoreManagement } from "@/components";

export const metadata: Metadata = {
  title: "Car",
  description: "This is the place were the information of the wiki is available",
};

export default function Store() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen p-4">
      <StoreManagement />
    </main>
  );
}
