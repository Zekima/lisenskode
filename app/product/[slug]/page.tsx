import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {

    const products = [
        {
            title: "Windows 11 Pro Retail",
            image: "/wind11.avif",
            price: 349
        },
        {
            title: "Windows 11 Home Retail",
            image: "/wind11h.avif",
            price: 275
        },
        {
            title: "Office 2021 Professional Plus",
            image: "/off2021.jpg",
            price: 450
        }
    ]

    const product = products.find(product => product.title === decodeURI(params.slug))

    if (!product) return <p>Produktet finnes ikke</p>

    return (
        <div className="max-w-[1280px] flex flex-col bg-white w-full p-9 rounded-md">
            <Link href="/">← Gå Tilbake</Link>
            <h1 className="text-xl text-center font-medium mt-4">{product.title}</h1>

            <div className="flex gap-2 sm:flex-row flex-col">
                <div>

                    <div className="bg-white ml-0 mr-3 my-6 relative h-[320px] w-[300px] select-none">
                        <Image
                            src={product.image}
                            priority
                            fill
                            alt={product.title}
                        />
                    </div>
                    <h3></h3>
                </div>
                <div className="flex-col flex justify-center">
                    <p className="text-3xl mb-3 font-medium">{product.price} kr</p>
                    <label htmlFor="emailInput">Email (for levering)</label>
                    <input type="text" className="p-3 border border-black my-3 rounded-md" id="emailInput" />
                    <button className="bg-blue-600 py-4 px-10 text-white font-medium rounded-md">Kjøp Nå</button>
                </div>
                
            </div>


        </div>
    )
}