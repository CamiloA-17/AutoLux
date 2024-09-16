import { StoreManagement } from "@/components"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Store",
  description: "This is the place to sell the cars"
}

export default function store() {

  return (
    <StoreManagement />
  );
}

