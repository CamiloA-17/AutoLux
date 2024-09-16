import {Header, Footer} from '@/components';

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="auth">
            <Header />
            <section className='flex-1'>
                {children}
            </section>
            <Footer />
        </main>
    );
}