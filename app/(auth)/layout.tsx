export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="auth">
            <section></section>
            <section>
                {children}
            </section>
        </main>
    );
}
