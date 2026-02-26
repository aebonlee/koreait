import TabLayout from '../components/common/TabLayout'
import { SECTION_COLORS } from '../utils/constants'
import Badge from '../components/ui/Badge'

const COURSES = {
  office: [
    { name: '[ITQ] 엑셀', cert: 'ITQ', hours: '40시간', desc: '엑셀 실무 활용 및 ITQ 자격증 대비' },
    { name: '[ITQ] 프레젠테이션', cert: 'ITQ', hours: '40시간', desc: '파워포인트 실무 활용 및 자격증 대비' },
    { name: '[ITQ] 한글', cert: 'ITQ', hours: '40시간', desc: '한글 문서작성 실무 및 자격증 대비' },
    { name: '컴퓨터활용능력 2급', cert: '국가자격', hours: '60시간', desc: '컴퓨터활용능력 2급 필기/실기 대비' },
  ],
  design: [
    { name: '[GTQ] 포토샵', cert: 'GTQ', hours: '48시간', desc: 'Photoshop 활용 및 GTQ 자격증 대비' },
    { name: '[GTQ] 일러스트레이터', cert: 'GTQ', hours: '48시간', desc: 'Illustrator 활용 및 자격증 대비' },
  ],
  cad: [
    { name: '[AutoCAD] 기계설계', cert: 'ATC', hours: '60시간', desc: 'AutoCAD를 활용한 기계 도면 설계' },
    { name: '[AutoCAD] 건축설계', cert: 'ATC', hours: '60시간', desc: 'AutoCAD를 활용한 건축 도면 설계' },
  ],
  web: [
    { name: 'Web/Blog/웹표준', cert: '-', hours: '40시간', desc: 'HTML, CSS, 웹표준 기반 웹사이트 제작' },
  ],
  programming: [
    { name: '파이썬과 R프로그래밍', cert: '-', hours: '60시간', desc: 'Python, R 기초 프로그래밍 및 데이터 분석' },
  ],
}

function CourseTable({ courses }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left font-medium text-gray-600">과정명</th>
            <th className="px-4 py-3 text-center font-medium text-gray-600">자격증</th>
            <th className="px-4 py-3 text-center font-medium text-gray-600">교육시간</th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">설명</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {courses.map((course) => (
            <tr key={course.name} className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">{course.name}</td>
              <td className="px-4 py-3 text-center">
                <Badge variant={course.cert === '국가자격' ? 'primary' : 'default'}>{course.cert}</Badge>
              </td>
              <td className="px-4 py-3 text-center text-gray-600">{course.hours}</td>
              <td className="px-4 py-3 text-gray-600">{course.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ProgramsPage() {
  const tabs = [
    { label: '사무행정 (ITQ/컴활)', content: <CourseTable courses={COURSES.office} /> },
    { label: '그래픽 (GTQ)', content: <CourseTable courses={COURSES.design} /> },
    { label: 'CAD 설계', content: <CourseTable courses={COURSES.cad} /> },
    { label: '웹/블로그', content: <CourseTable courses={COURSES.web} /> },
    { label: '프로그래밍', content: <CourseTable courses={COURSES.programming} /> },
  ]

  return (
    <TabLayout
      title="Ⅵ. 훈련과정"
      subtitle="연도별 훈련과정 목록 및 상세 정보"
      tabs={tabs}
      sectionColor={SECTION_COLORS.sub06}
    />
  )
}
