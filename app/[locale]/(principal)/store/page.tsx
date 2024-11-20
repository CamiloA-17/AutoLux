import { Metadata } from "next";
import { ContentContainer } from "@/components/organism/ContentContainer";

export const metadata: Metadata = {
  title: "Store",
  description: "This is the place to sell the cars",
};

export default function Store() {
  return (
    <main>
      <ContentContainer />
    </main>
  );
}
