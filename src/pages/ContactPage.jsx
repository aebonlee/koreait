import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import Card from '../components/ui/Card'

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">오시는 길</h1>
        <p className="text-sm text-gray-500 mt-1">에듀컴퓨터교육학원 위치 및 연락처</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <Card title="연락처 정보">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">주소</p>
                <p className="text-sm text-gray-600 mt-0.5">경기도 시흥시 서울대학로 59번길 (배곧동)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">전화번호</p>
                <p className="text-sm text-gray-600 mt-0.5">031-431-1247</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
              <div>
                <p className="font-medium text-gray-800">이메일</p>
                <p className="text-sm text-gray-600 mt-0.5">admin@educomputer.co.kr</p>
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
          </div>
        </Card>

        {/* Map Placeholder */}
        <Card title="약도">
          <div className="aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            <MapPin className="w-12 h-12 text-gray-300 mb-3" />
            <p className="text-sm text-gray-400">지도 영역</p>
            <a
              href="https://map.naver.com/v5/search/%EC%97%90%EB%93%80%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B5%90%EC%9C%A1%ED%95%99%EC%9B%90"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1"
            >
              네이버 지도에서 보기 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </Card>
      </div>

      {/* How to get here */}
      <Card title="교통 안내">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">대중교통</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded mt-0.5">버스</span>
                <span>시흥시 배곧 방면 시내버스 이용</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded mt-0.5">지하철</span>
                <span>수인분당선 이용 후 버스 환승</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">자가용</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>제3경인고속도로 → 배곧 IC 출구 이용</li>
              <li>주차: 건물 내 주차장 이용 가능</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
