"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../app/assets/images/pixelcut-export.png";
import { colorBggray } from '../tokens';
import { Country } from '@/types/api';
import { getData, postData, putData, deleteData } from '../../services/api'
import { useTranslations } from 'next-intl';

export function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('About');

  useEffect(() => {
    const handleScrollToAbout = () => {
      if (window.location.hash === '#about') {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleScrollToAbout);
    handleScrollToAbout();

    return () => {
      window.removeEventListener('hashchange', handleScrollToAbout);
    };
  }, []);

  const getCountries = async () => {
    try {
      const countries = await getData<Country[]>('/country/');
      console.log(countries);
    } catch (error) {
      console.error('Error fetching country:', error);
    }
  };

  const createCountry = async () => {
    try {
      const newCountry = await postData<Country, Country>('/country', {
        id: 9,
        name: 'Pereira',
      });

      console.log('New country created:', newCountry);
    } catch (error) {
      console.error('Error creating country:', error);
    }
  };


  return (
    <div id="about" className={`${colorBggray} py-10 px-10 my-10`} ref={aboutRef}>
      <div className="container mx-auto flex flex-col items-center space-y-10 md:space-x-20">
        <div className="flex-shrink-0">
          <Image src={logo} alt="Autolux Logo" className="w-60 h-auto" priority />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-semibold">AutoLux</h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            {t('about')}
          </p>
          <button onClick={getCountries} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
            Hola countries
          </button>
        </div>
      </div>
    </div>

  );
}