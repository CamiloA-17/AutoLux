"use client";

import Image from 'next/image';
import carro1 from "../../app/assets/images/carro1.png";
import carro2 from "../../app/assets/images/carro2.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Slide() {
    return (
        <div className="flex items-center bg-gray-100 w-full">
            <div className="w-full">
                <Swiper spaceBetween={30} loop={true} navigation={true} autoplay={{ delay: 3000 }} className="mySwiper">
                    <SwiperSlide>
                        <div className="relative w-full h-[500px]">
                            <Image src={carro1} alt="Car 1" layout="fill" objectFit="cover" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-full h-[500px]">
                            <Image src={carro2} alt="Car 2" layout="fill" objectFit="cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}