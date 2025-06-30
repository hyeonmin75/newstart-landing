import React from 'react';
import { PARTNER_ITEMS } from '../constants';
import { PartnerItem } from '../types';

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">신뢰할 수 있는 기관들이 함께합니다</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {PARTNER_ITEMS.map((partner: PartnerItem) => (
            <div key={partner.name} className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <span className="text-gray-600 font-semibold text-lg">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;