import favicon from '../public/favicon.ico';
import previewImage from '../public/previewImage.png';
import { IGlobal } from '../components/common/IGlobal';

const title = '홍동근 — Frontend Engineer (Part Lead) | 경력 3년+';
const description = `안녕하세요, 프론트엔드 개발자 홍동근입니다.
주요 역량
- 실시간/대용량 데이터 시각화 및 최적화: Kafka 기반 초당 2,000건 이상의 스트림 데이터를 안정적으로 처리하고, 렌더링 최적화를 통해 24/7 무중단 실시간 데이터 모니터링 시스템 구축·운영
- 데이터 중심의 인터랙티브 대시보드 설계: GoJS, ECharts 커스터마이징을 통한 복잡한 데이터 테이블·차트 및 동적 시각화 규칙 적용
- CI/CD 파이프라인 주도 구축: AWS/NCP 환경에서 Jenkins·Docker 기반 파이프라인 설계·자동화로 배포 주기 단축
`;

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage.src,
          width: 600,
          height: 400,
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'DongGeun',
        lastName: 'Hong',
        username: 'Daro',
        gender: 'male',
      },
    },
  },
};
