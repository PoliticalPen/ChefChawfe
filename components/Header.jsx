import React, { useState, useEffect } from 'react'

import Link from 'next/link';

import { getCategories } from '@/services'

const Header = () => {
    const [categories, setCategories] = useState([]);

        useEffect(() => {
            getCategories()
            .then((newCategories) => setCategories(newCategories))
        }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-black py-8 md:py-6">
            <div className="md:pb-4 pt-5 flex justify-center align-middle lg:pb-4 lg:text-4xl">
                <Link href="/">
                    <span className="text-4xl grid cursor-pointer lg:text-4xl lg:block md:block">
                        Tabkhat <span className=' text-gray-900 lg:text-6xl md:text-5xl'> Chef Chawfe</span>
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents ">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`} >
                        <span className='md: mt-2 align-middle text-green-950 uppercase ml-8 text-xl font-normal cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header