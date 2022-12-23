import React from 'react';
import Claquette from '../assets/1-removebg-preview.png';
import Card from '../components/Card';

// TODO Erase the sample end get the real data from the backend using reduxtoolkit

const Landing = () => {
    const sample = {
        title: 'Nike Claquettes Lifestyle',
        desc: 'The Nike Benassi JDI tap dance offers optimal comfort in a classic and lightweight design.',
        price: 250.15,
        images: [Claquette]
    };
    const topSellers = [
        {
            title: 'Nike Claquettes Lifestyle',
            desc: 'The Nike Benassi JDI tap dance offers optimal comfort in a classic and lightweight design.',
            price: 250.15,
            images: [Claquette]
        },
        {
            title: 'Nike Claquettes Lifestyle',
            desc: 'The Nike Benassi JDI tap dance offers optimal comfort in a classic and lightweight design.',
            price: 250.15,
            images: [Claquette]
        },
        {
            title: 'Nike Claquettes Lifestyle',
            desc: 'The Nike Benassi JDI tap dance offers optimal comfort in a classic and lightweight design.',
            price: 250.15,
            images: [Claquette]
        },
        {
            title: 'Nike Claquettes Lifestyle',
            desc: 'The Nike Benassi JDI tap dance offers optimal comfort in a classic and lightweight design.',
            price: 250.15,
            images: [Claquette]
        },
        {
            title: 'Nike Claquettes Lifestyle',
            desc: 'The Nike Benassi JDI tap dance offers optimal comfort in a classic and lightweight design.',
            price: 250.15,
            images: [Claquette]
        }
    ];
    return (
        <div className="p-[10rem] text-tertiary bg-primary min-w-screen min-h-screen">
            <div className="grid grid-cols-[40rem] gap-y-4 gap-x-16 grid-cols-2 grid-rows-2 justify-center items-center">
                <Card
                    product={sample}
                    titleStyle={'text-3xl'}
                    generalStyle={'bg-tertiary w-[40rem] h-[25rem] w-full row-span-2'}
                    descColor={'opacity-50'}
                    priceStyle={'text-[2rem]'}
                    btnStyle={
                        'text-3xl h-2/3 w-2/3 rounded-3xl from-[#43CBFF] to-[#9708CC]'
                    }
                />
                <Card
                    product={sample}
                    titleStyle={''}
                    generalStyle={
                        'w-[20rem] h-[12rem] bg-gradient-to-r from-[#5EFCE8] to-[#736EFE] col-start-2 col-span-1'
                    }
                    descColor={'text-[0.5rem] opacity-100 text-white'}
                    priceStyle={'text-[1rem]'}
                    btnStyle={
                        'text-md h-2/3 w-2/3 rounded-xl from-[#FFE143] to-[#9708CC]'
                    }
                />
                <Card
                    product={sample}
                    titleStyle={''}
                    generalStyle={
                        'w-[20rem] h-[12rem] bg-gradient-to-r from-[#EEAD92] to-[#6018DC] col-start-2 col-span-1'
                    }
                    descColor={'text-[0.5rem] opacity-100 text-white'}
                    priceStyle={'text-[1rem]'}
                    btnStyle={
                        'text-md h-2/3 w-2/3 rounded-xl from-[#FFE143] to-[#9708CC]'
                    }
                />
            </div>
            <div className='p-5 mt-14 rounded-lg bg-gradient-to-r from-[#FCFF00] via-[#E5AE5C] to-[#12A4C3]'>
                <h1 className='pb-1 pl-3 text-primary text-2xl font-bold'>Our Top Sellers Items</h1>
                <div className="grid gap-x-2 grid-cols-5 pl-3">
                    {topSellers.map((product, index) => (
                        <Card
                            key={product.title}
                            product={product}
                            titleStyle={'text-sm text-secondary'}
                            generalStyle={
                                'bg-primary w-[14rem] h-[12rem]'
                            }
                            descColor={'text-[0.5rem] opacity-100 text-white'}
                            priceStyle={'pt-2 text-secondary text-[1rem]'}
                            btnStyle={
                                'text-[0.8rem] h-2/3 w-2/3 rounded-md from-[#5ee09f] to-[#12A4C3]'
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Landing;
