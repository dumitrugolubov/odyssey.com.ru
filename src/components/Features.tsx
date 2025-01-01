import React from 'react';
import { Percent, Coins, Users } from 'lucide-react';

const features = [
  {
    icon: <Percent className="w-8 h-8" />,
    title: '0% Комиссия на Спот',
    description: 'Торгуйте без комиссии на спотовом рынке Odyssey Exchange'
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: '10% Возврат при Ликвидациях',
    description: 'Уникальная система возврата средств при ликвидации позиций'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Партнерская Программа',
    description: 'Выгодные условия для партнеров биржи Odyssey'
  }
];

const Features = () => {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Преимущества Odyssey Exchange
          </h2>
          <p className="text-gray-400 text-lg">
            Инновационная биржа для современных трейдеров
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4 text-violet-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;