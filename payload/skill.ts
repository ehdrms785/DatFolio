import { ISkill } from '../components/skill/ISkill';

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
      level: 3,
    },
    {
      title: 'javascript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'typescript',
      level: 3,
    },
    {
      title: 'Flutter',
      level: 3,
    },
    {
      title: 'Next.js',
      level: 2,
    },
    {
      title: 'JSP',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'Firestore(Nosql)',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 1,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
  ],
};

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'AWS(EC2, S3, Lambda..)',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
    {
      title: 'C/C++',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Asana',
    },
    {
      title: 'MeisterTask',
    },
    {
      title: 'Agile',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'GTM',
    },
    {
      title: 'Google Analytics',
    },
    {
      title: 'Sentry',
    },
  ],
};

const skill: ISkill.Payload = {
  skills: [frontend, backend, database, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
