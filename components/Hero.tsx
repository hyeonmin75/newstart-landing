import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-tr from-sky-500 to-indigo-600"
    >
      <div className="absolute top-0 -left-1/4 w-full h-full bg-indigo-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-sky-300/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
          2025년 새출발기금, 새 희망으로
          <br />
          <span className="text-yellow-300">최대 90% 원금감면 혜택</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light text-indigo-100">
          코로나19 이후 어려움을 겪는 소상공인, 자영업자 분들을 위해<br/> 
          지원 대상과 혜택이 더욱 확대되었습니다. 든든한 버팀목이 되어드리겠습니다.
        </p>
        <div className="flex justify-center">
          <a href="https://www.realnewstart.ecnomini.com" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            지금 바로 대상 확인하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;