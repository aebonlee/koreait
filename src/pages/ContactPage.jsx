import { MapPin, Phone, Mail, Clock, ExternalLink, Globe, User, FileText, Building2 } from 'lucide-react'
import Card from '../components/ui/Card'

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">오시는 길</h1>
        <p className="text-sm text-gray-500 mt-1">코리아IT아카데미 위치 및 연락처</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <Card title="연락처 정보">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">주소</p>
                <p className="text-sm text-gray-600 mt-0.5">서울특별시 마포구 서강로 136 아이비타워 2층, 3층</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">전화번호</p>
                <p className="text-sm text-gray-600 mt-0.5">02-313-7300</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">이메일</p>
                <p className="text-sm text-gray-600 mt-0.5">ciu@koreaedugroup.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">운영시간</p>
                <p className="text-sm text-gray-600 mt-0.5">월~금 09:00 ~ 21:00 / 토 09:00 ~ 18:00</p>
                <p className="text-sm text-gray-400">일요일 및 공휴일 휴무</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">대표 블로그</p>
                <a
                  href="https://blog.naver.com/sunsoo2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-500 hover:underline flex items-center gap-1 mt-0.5"
                >
                  blog.naver.com/sunsoo2002 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Map Placeholder */}
        <Card title="약도">
          <div className="aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            <MapPin className="w-12 h-12 text-gray-300 mb-3" />
            <p className="text-sm text-gray-400">지도 영역</p>
            <a
              href="https://map.naver.com/v5/search/%EC%BD%94%EB%A6%AC%EC%95%84IT%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8%20%EB%A7%88%ED%8F%AC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1"
            >
              네이버 지도에서 보기 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </Card>
      </div>

      {/* 학원 사업자 정보 */}
      <Card title="학원 정보">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">사업자(법인)명</p>
                <p className="text-gray-500">㈜코리아정보보안아이티아카데미신촌</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">사업자번호</p>
                <p className="text-gray-500">325-88-00678</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">통신판매업번호</p>
                <p className="text-gray-500">제2019-서울마포-0303호</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">대표자 / 개인정보책임자</p>
                <p className="text-gray-500">김홍구 / 최인욱</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">학원명</p>
                <p className="text-gray-500">코리아아이티(IT)아카데미학원</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">학원등록번호</p>
                <p className="text-gray-500">서울서부 제02201700141호</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-700">교육담당</p>
                <p className="text-gray-500">신촌코딩학원</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* How to get here */}
      <Card title="교통 안내">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">대중교통</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded mt-0.5">버스</span>
                <span>마포구청, 서강대 방면 시내버스 이용</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded mt-0.5">지하철</span>
                <span>2호선 신촌역 1번 출구 도보 5분 / 6호선 대흥역 1번 출구 도보 7분</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">자가용</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>신촌로터리 → 서강대 방면 → 서강로 136</li>
              <li>주차: 건물 내 주차장 이용 가능</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
