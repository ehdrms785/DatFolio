import { IProject } from '../components/project/IProject';

const project: IProject.Payload[] = [
  {
    title: '브이젠(주)',
    subTitle: 'Frontend Engineer',
    image: '/EMS.png',
    size: { width: '650px' },
    description: `### EMS (신재생에너지 통합 모니터링)
- Kafka 2,000건/초 사전 처리(BFF batch-flush) → 리렌더링 97% 절감, 24/7 무중단 운영.
- GoJS 기반 Low-code 계통도 작화 툴로 신규 설비 반영 기간 **1~2일로 단축**

### RTU & SCADA (데이터 수집·태그 관리)
- react-window 가상화로 수만 건 테이블 초기 로딩 1초로 단축.
- Excel-like 편집 UX로 운영자 작업 시간 50% 절감

### 신재생 자료취득장치 (IoT 보안 인증·제어)
- 팀 리드로 IoT 정보보호인증 취득, 3계층 사설 PKI·ACME 자동발급·OCSP 실시간 검증 구축.
- OTA 서버(무결성 검증·스트리밍 다운로드·롤백) Web App 연동.
`,
    skills: [
      'React',
      'TypeScript',
      'Vite',
      'Redux',
      'React Query',
      'Nginx',
      'MUI',
      'ECharts',
      'GoJS',
      'react-window',
      'Node.js',
      'Express',
      'Kafka',
      'SSE',
      'Docker',
      'Bitbucket Pipelines',
      'Husky',
    ],
    device: 'web',
  },
  {
    image: '/hansol.png',
    title: 'ANBOX',
    subTitle: '박스/포장재 이커머스 플랫폼',
    description: `국내 친환경 박스/포장재 기업의 E-Commerce 전면 리뉴얼 프로젝트에 참여했습니다. 주문제작, 고객센터, 주문/결제, 백오피스 등을 담당했습니다.`,
    skills: ['React', 'Redux', 'Zustand', 'RESTful API', 'Jenkins'],
    size: { width: '650px' },
    device: 'web',
    link: 'https://www.an.co.kr',
  },
  {
    image: '/monegi.png',
    video: '/monegi_play.mov',
    title: '모내기',
    subTitle: '소비경험 공유 플랫폼',
    description: `소비 경험을 공유하는 앱 "모내기" 제작에 참여했습니다. 입사 후 리뷰 에디터 개발 및 메인 화면 구성과 전반적인 프론트엔드 개발을 담당했습니다.

UI/UX 개발, GraphQL/REST API 연동, FCM, 에러 핸들링 등을 수행했습니다.`,
    skills: ['Flutter', 'GetX', 'GraphQL', 'Firebase', 'FCM'],
    size: { width: '300px' },
    device: 'app',
  },
];

export default project;
