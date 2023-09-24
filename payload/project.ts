import monegiImage from '../public/monegi.png';
import hansolImage from '../public/hansol.png';
import bpdImage from '../public/bpd.png';
import { IProject } from '../components/project/IProject';

const project: IProject.Payload[] = [
  {
    image: bpdImage,
    title: '빵판다',
    subTitle: '베이커리 플리마켓 플랫폼',
    description: `코로나 대유행 시기에 인스타그램 및 블로그를 통한 주문서 오픈 방식 주문이 급증하는 소규모 베이커리에 소비자들의 관심이 몰리는 것을 보고 아이디어를 도출하였습니다. 이 프로젝트를 통해 클라이언트와 서버 단을 직접 다루며 전체적인 어플리케이션 흐름을 경험하였습니다.

    Node.js를 통해 서버를 구축하고 GraphQL을 이용하여 데이터 효율적으로 관리했습니다. Prisma ORM을 활용하여 간결한 CRUD 쿼리를 작성하였으며, AWS 리눅스 서버를 설정하고 DevOps 경험을 쌓았습니다. 이 프로젝트는 Flutter를 전문적으로 다루기 위해 간단한 기능 중심으로 개발되었습니다.`,
    skills: ['Flutter', 'Node.js', 'GetX', 'GraphQL', 'Prisma', 'AWS'],
    size: { width: '650px' },
  },
  {
    image: monegiImage,
    video: '/monegi_play.mov',
    title: '모내기',
    subTitle: '소비경험 공유 플랫폼',
    description: `소비 경험을 공유하는 앱 "모내기" 제작에 참여했습니다. 비슷한 소비 취향을 가진 사용자들을 연결해 주고 소비를 공유할 수 있는 공간을 구축하였습니다. 입사 후 리뷰 에디터 개발을 진행하였고 이후 메인 화면 구성 및 전반적인 프론트엔드 개발을 담당하였습니다.

    UI&UX 개발과 더불어 GraphQL, Rest API 연동 및 FCM, Error Handling 작업을 맡았습니다.`,
    skills: ['Flutter', 'GetX', 'GraphQL', 'Firebase', 'FCM'],
    size: { width: '300px' },
    device: 'app',
    link: 'https://play.google.com/store/apps/details?id=com.pgcg.monegiApp',
  },
  {
    image: hansolImage,
    title: 'ANBOX',
    subTitle: '박스/포장재 이커머스 플랫폼',
    description: `국내 2위 친환경 박스/포장재 기업 한솔비에스의 E-Commerce 전면 리뉴얼 프로젝트에 참여했습니다. 주문제작, 고객센터, 주문/결제 파트를 전담했고 이후에 B2B 정기구독, 주문/배송을 관리하는 백오피스를 추가로 제작하였습니다.
    
    CI/CD 자동화를 포함한 프론트엔드 개발을 진행하였고 Convention 문서화 및 협업툴을 활용한 스케줄링 관리 등 팀 매니징을 담당하였습니다.`,
    skills: ['React', 'Redux', 'Zustand', 'RESTful API', 'Jenkins'],
    size: { width: '650px' },
    device: 'web',
    link: 'https://www.an.co.kr',
  },
];

export default project;
