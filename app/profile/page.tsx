import { Metadata } from "next"
import { HeaderProfile } from '@/components';
import { Footer } from '@/components';
import { ProfileBody } from "@/components";

export const metadata: Metadata = {
  title: "Profile",
  description: "This is the place to see the user's profile"
}

export default function Profile() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeaderProfile />
        <main className="flex-1">
          <ProfileBody/>
        </main>
        <Footer />
      </div>
    </>
  )
}