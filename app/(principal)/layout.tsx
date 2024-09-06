import './layout.css'
import Header from './header/page';
import Footer from './footer/page';

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