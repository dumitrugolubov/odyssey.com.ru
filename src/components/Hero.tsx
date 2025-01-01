import React from 'react';
import ActionButton from './ActionButton';
import Logo from './Logo';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-violet-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Logo className="w-24 h-24 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            Odyssey Exchange
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Первая в мире биржа, специализирующаяся на мем-токенах. Откройте новые возможности с Odyssey Exchange.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ActionButton href="https://ody.lol" primary>
              Перейти на Биржу
            </ActionButton>
            <ActionButton href="https://t.me/t_dmi3">
              Стать партнером
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;