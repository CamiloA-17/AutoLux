import { Metadata } from "next"
import './style.css'

export const metadata : Metadata = {
    title: "Footer",
    description: "This is the footer of the page"
}
export default function Footer() {
  return (
    <footer>
        <section>
            <h2>Nuestras categorías</h2>
            <ul>
                <li>Sedán</li>
                <li>SUV</li>
                <li>Coupés</li>
                <li>Pick ups</li>
            </ul>
        </section>
        <section>
            <h2>Financiación</h2>
            <ul>
                <li>Crédito AutoLux</li>
                <li>Convenios bancarios</li>
                <li>Leasing</li>
            </ul>
        </section>
        <section> 
            <h2>Contáctanos</h2>
        </section>
        <section>
            <h2>Redes sociales</h2>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>
            </ul>
        </section>
    </footer>
  )
}
