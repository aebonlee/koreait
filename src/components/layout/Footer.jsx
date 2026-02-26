export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-6 px-6">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* 사업자 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500 leading-relaxed">
          <div className="space-y-1">
            <p><span className="font-semibold text-gray-600">사업자(법인)명</span> : ㈜코리아정보보안아이티아카데미신촌</p>
            <p><span className="font-semibold text-gray-600">사업자번호</span> : 325-88-00678</p>
            <p><span className="font-semibold text-gray-600">통신판매업번호</span> : 제2019-서울마포-0303호</p>
            <p><span className="font-semibold text-gray-600">대표자</span> : 김홍구 &nbsp;|&nbsp; <span className="font-semibold text-gray-600">개인정보책임자</span> : 최인욱</p>
          </div>
          <div className="space-y-1">
            <p><span className="font-semibold text-gray-600">학원명</span> : 코리아아이티(IT)아카데미학원</p>
            <p><span className="font-semibold text-gray-600">학원등록번호</span> : 서울서부 제02201700141호</p>
            <p><span className="font-semibold text-gray-600">교육담당</span> : 신촌코딩학원</p>
            <p><span className="font-semibold text-gray-600">주소</span> : 서울특별시 마포구 서강로 136 아이비타워 2층, 3층</p>
          </div>
        </div>

        {/* 연락처 + 저작권 */}
        <div className="border-t border-gray-200 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>
            전화문의 : 02-313-7300 &nbsp;|&nbsp;
            E-mail : ciu@koreaedugroup.com &nbsp;|&nbsp;
            <a href="https://blog.naver.com/sunsoo2002" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">대표 블로그</a>
          </p>
          <p>&copy; {new Date().getFullYear()} 코리아IT아카데미. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
