import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-sky-500 h-full">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">사장님의 재기를 돕는 <span className="text-indigo-600">3가지 약속</span></h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-20">
          빚 걱정은 덜고 사업에만 집중하실 수 있도록, 2025년 확대된 혜택으로 든든한 금융 동반자가 되겠습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.126c0-1.07.69-2.035 1.706-2.376l4.238-1.412c.18-.06.368-.113.56-.16C20.443.98 21.36 1.73 21.36 2.766v1.306c0 .762-.435 1.44-1.126 1.758l-4.238 1.412A4.01 4.01 0 0112 8zm0 0v1.943m0-1.943c-1.11 0-2.08.402-2.599 1M12 8V7m0 1v.01M12 6v-1.126c0-1.07-.69-2.035-1.706-2.376l-4.238-1.412A2.25 2.25 0 003.64 2.766v1.306c0 .762.435 1.44 1.126 1.758l4.238 1.412A4.01 4.01 0 0112 8z" />
            </svg>}
            title="강력해진 채무조정"
            description="부실차주는 순부채의 최대 90%(기초수급자 등)까지 원금을 감면받고, 상환기간은 최장 20년까지 연장됩니다. 신청 익일부터 채권 추심이 중단됩니다."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
            </svg>}
            title="신속·간편한 절차"
            description="온라인으로 방문 없이 신청부터 약정까지 가능하며, 복잡한 서류 절차를 최소화했습니다. 전화/문자를 통한 개인정보나 금전 요구는 피싱이니 주의하세요."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
            </svg>}
            title="미래를 위한 재기 지원"
            description="단순 채무조정을 넘어 '2025 희망리턴패키지' 등 재창업 프로그램과 연계됩니다. 교육 수료 시 추가 감면 및 채무조정 이력 삭제 혜택을 제공합니다."
          />
        </div>
      </div>
    </section>
  );
};

export default About;