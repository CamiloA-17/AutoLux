import { Metadata } from "next"
import Image from "next/image"
import instagram from '../../app/assets/images/instagram.svg'
import facebook from '../../app/assets/images/facebook.svg'
import twitter from '../../app/assets/images/twitter.svg'
import youtube from '../../app/assets/images/youtube.svg'

export const metadata: Metadata = {
    title: "Footer",
    description: "This is the footer of the page"
}

export function Footer() {
    return (
        <footer className="bg-custom-gray text-gray-200 py-6 w-full relative bottom-0">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Categorías</h3>
                        <ul className="list-none">
                            <li>
                                <a href="#" className="text-sm hover:underline">Sedan</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline">SUV</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline">Pick-up</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline">Deportivo</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Financiación</h3>
                        <ul className="list-none">
                            <li>
                                <a href="#" className="text-sm hover:underline">Crédito AutoLux</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline">Bancos aliados</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline">Descuentos a clientes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
                        <p className="text-sm">
                            Email: <a href="mailto:autolux@example.com" className="hover:underline">autolux@example.com</a>
                        </p>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-2">Únete a nosotros</h3>
                        <div className="flex space-x-4"> 
                            <Image src={instagram} width={30} height={30} alt="Instagram" />
                            <Image src={facebook} width={30} height={30} alt="Facebook" />
                            <Image src={twitter} width={30} height={30} alt="Twitter" />
                            <Image src={youtube} width={30} height={30} alt="Youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
