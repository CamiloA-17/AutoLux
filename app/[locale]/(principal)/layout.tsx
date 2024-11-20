import {Header, Footer} from '@/components';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home',
    description: 'This is the home page',
  };

export default function HomeLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='flex flex-col min-h-screen'>
            <Header 
                quantity={0}
                showSearch={false}
            />
            <section className='flex-1'>
                {children}
            </section>
            <Footer />
        </main>
    );
}