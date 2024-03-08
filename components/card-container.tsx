import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardContainer = () => {

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



    return (
        <>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-[100px]">
                {products.map((product) => (
                    <Link key={product.title} href={`/product/${product.title}`}>
                    <div  className="border p-4 rounded-md bg-white transistion hover:scale-105 duration-150 cursor-pointer">
                        <div className="w-[200px] h-[200px] p-4 justify-center flex items-center relative">

                            <Image
                                src={product.image}
                                height={200}
                                width={200}
                                priority
                                alt={product.title}
                            />
                        </div>
                        <p className="">{product.title}</p>
                        <p className="text-xl text-black font-bold">{product.price} kr</p>
                    </div>
                    </Link>
                ))}


            </div>
        </>
    );
}

export default CardContainer;