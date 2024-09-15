import './layout.css'
import {Header, Footer} from '@/components';

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="auth">
            <Header />
            <section>
                {children}
            </section>
            <Footer />
        </main>
    );
}