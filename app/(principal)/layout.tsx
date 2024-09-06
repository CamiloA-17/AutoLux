import './layout.css'
import Image from 'next/image';
import logo from "../../pixelcut-export.png"

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="auth">
            <section>
                <div className="header">
                    <nav>
                        <ul>
                            <li><a href="/home"><Image src={logo} alt="Logo" /></a></li>
                            <div className="options">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/store">Store</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/signup" className="signup-btn">Sign Up</a></li>
                                <li><a href="/login" className="login-btn">Login</a></li>
                            </div>
                        </ul>
                    </nav>
                </div>
                {children}
            </section>
        </main>
    );
}