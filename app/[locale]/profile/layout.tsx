import { Footer, Header } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "This is the place to see the user's profile"
}

export default function ProfileLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        quantity={0}
        showSearch={true}
      />
      <main className="flex-1">
        <section>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
