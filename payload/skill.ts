import { ISkill } from '../components/skill/ISkill';

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    { title: 'React', level: 3 },
    { title: 'TypeScript', level: 3 },
    { title: 'ECharts', level: 3 },
    { title: 'GoJS', level: 3 },
    { title: 'MUI', level: 3 },
    { title: 'React Query', level: 3 },
    { title: 'Vite', level: 3 },
    { title: 'react-window', level: 2 },
    { title: 'Redux', level: 2 },
    { title: 'Zustand', level: 2 },
    { title: 'Next.js', level: 2 },
    { title: 'Flutter', level: 2 },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end / BFF',
  items: [
    { title: 'Node.js', level: 2 },
    { title: 'Express', level: 2 },
    { title: 'SSE', level: 3 },
    { title: 'Kafka', level: 2 },
    { title: 'RESTful API', level: 2 },
    { title: 'GraphQL', level: 2 },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infra / DevOps',
  items: [
    { title: 'Nginx', level: 3 }, // TLS 종료, 캐싱, LB, 헬스체크, RateLimit
    { title: 'AWS (EC2, S3)', level: 2 },
    { title: 'NCP (SourcePipeline)', level: 2 },
    { title: 'Docker', level: 3 },
    { title: 'Jenkins', level: 2 },
    { title: 'Bitbucket Pipelines', level: 2 },
    { title: 'Git Flow', level: 3 },
    { title: 'Husky', level: 2 },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    { title: 'Agile', level: 3 },
    { title: 'PKI/OCSP', level: 3 },
    { title: 'OTA Update', level: 3 },
    { title: 'Firebase', level: 2 },
    { title: 'GTM / GA', level: 2 },
    { title: 'Sentry', level: 2 },
    { title: 'Jira', level: 2 },
  ],
};

const skill: ISkill.Payload = {
  skills: [frontend, backend, infra, etc],
  tooltip: '1: 기초 이해\n2: 프로젝트 활용 가능\n3: 상용 서비스 개발 경험',
};

export default skill;
