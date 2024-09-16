"use client";

import Image from 'next/image';
import carro1 from "../../app/assets/images/carro1.png";
import carro2 from "../../app/assets/images/carro2.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { colorBggray } from '../tokens';

export function Slide() {
    return (
        <div className="w-full bg-gray-100">
            <div className="w-full">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative w-full h-[40vw]">
                            <Image src={carro1} alt="Car 1" layout="fill" objectFit="cover" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-full h-[40vw]">
                            <Image src={carro2} alt="Car 2" layout="fill" objectFit="cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
