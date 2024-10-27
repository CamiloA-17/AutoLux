import {Header, Footer} from '@/components';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home',
    description: 'This is the home page',
  };

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="auth">
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