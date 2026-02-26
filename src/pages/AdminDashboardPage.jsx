import { useState } from 'react'
import { Settings, Database, FileText, Image, Users, BarChart3, Plus, Pencil, Trash2 } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const ADMIN_SECTIONS = [
  { id: 'kpi', label: 'KPI 관리', icon: BarChart3 },
  { id: 'courses', label: '과정 관리', icon: Database },
  { id: 'news', label: '뉴스 관리', icon: FileText },
  { id: 'partners', label: '협력기관 관리', icon: Users },
  { id: 'images', label: '이미지 관리', icon: Image },
]

function KPIManager() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">KPI 지표 관리</h3>
        <Button size="sm"><Plus className="w-4 h-4 mr-1" /> 추가</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left">지표명</th>
              <th className="px-4 py-3 text-center">값</th>
              <th className="px-4 py-3 text-center">변동</th>
              <th className="px-4 py-3 text-center">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              { label: '총 수강생', value: '1,247명', change: '+12%' },
              { label: '취업률', value: '78.5%', change: '+3.2%' },
              { label: '운영과정', value: '24개', change: '+4' },
              { label: '협력기관', value: '38개', change: '+6' },
            ].map((row) => (
              <tr key={row.label} className="hover:bg-gray-50">
                <td className="px-4 py-3">{row.label}</td>
                <td className="px-4 py-3 text-center">{row.value}</td>
                <td className="px-4 py-3 text-center text-green-600">{row.change}</td>
                <td className="px-4 py-3 text-center">
                  <button className="p-1 hover:bg-gray-100 rounded"><Pencil className="w-4 h-4 text-gray-400" /></button>
                  <button className="p-1 hover:bg-gray-100 rounded ml-1"><Trash2 className="w-4 h-4 text-red-400" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CourseManager() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">훈련과정 관리</h3>
        <Button size="sm"><Plus className="w-4 h-4 mr-1" /> 과정 추가</Button>
      </div>
      <div className="space-y-2">
        {['ITQ 엑셀', 'ITQ 프레젠테이션', 'GTQ 포토샵', 'AutoCAD 기계설계', '파이썬 프로그래밍'].map((name) => (
          <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Database className="w-4 h-4 text-primary-500" />
              <span className="text-sm">{name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="success">운영중</Badge>
              <button className="p-1 hover:bg-gray-200 rounded"><Pencil className="w-4 h-4 text-gray-400" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function NewsManager() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">뉴스/공지사항 관리</h3>
        <Button size="sm"><Plus className="w-4 h-4 mr-1" /> 새 글 작성</Button>
      </div>
      <p className="text-sm text-gray-500">Supabase 연동 후 CRUD 기능이 활성화됩니다.</p>
    </div>
  )
}

function PartnerManager() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">협력기관 관리</h3>
        <Button size="sm"><Plus className="w-4 h-4 mr-1" /> 기관 추가</Button>
      </div>
      <p className="text-sm text-gray-500">Supabase 연동 후 CRUD 기능이 활성화됩니다.</p>
    </div>
  )
}

function ImageManager() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">이미지 관리 (Supabase Storage)</h3>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
        <Image className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-sm text-gray-500 mb-3">이미지를 드래그하여 업로드하세요</p>
        <Button variant="outline" size="sm">파일 선택</Button>
      </div>
    </div>
  )
}

const SECTION_CONTENT = {
  kpi: <KPIManager />,
  courses: <CourseManager />,
  news: <NewsManager />,
  partners: <PartnerManager />,
  images: <ImageManager />,
}

export default function AdminDashboardPage() {
  const [activeSection, setActiveSection] = useState('kpi')

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="w-6 h-6 text-orange-500" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">관리자 패널</h1>
          <p className="text-sm text-gray-500 mt-1">데이터 관리 및 시스템 설정</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Admin Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <nav className="space-y-1">
              {ADMIN_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  {section.label}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <Card>
            {SECTION_CONTENT[activeSection]}
          </Card>
        </div>
      </div>
    </div>
  )
}
