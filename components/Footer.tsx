import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-black text-white mb-4">새출발기금</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              코로나 피해 소상공인·자영업자의 성공적인 재기를 위해<br/>새출발기금이 든든한 버팀목이 되겠습니다.
            </p>
            <a href="https://www.realnewstart.ecnomini.com" className="mt-6 inline-block bg-sky-500 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 text-base">
              지금 바로 온라인 신청하기
            </a>
          </div>
          <div className="md:text-right">
            <h4 className="font-bold text-white mb-4 text-lg">상담 및 문의</h4>
            <p className="text-4xl font-bold text-sky-300 mb-1 tracking-wider">1660-1378</p>
            <p className="text-sm text-gray-400">평일 09:00~18:00 (주말/공휴일 휴무)</p>
            <p className="text-sm text-gray-400 mt-4">
              (48400) 부산광역시 남구 문현금융로 40 부산국제금융센터(BIFC)
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-indigo-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 새출발기금. All Rights Reserved.</p>
          <p className="mt-1">이 웹사이트는 새출발기금 공식 안내를 위해 만들어졌습니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
