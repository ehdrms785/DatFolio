import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { ISkill } from './ISkill';
import { Style } from '../common/Style';

export default function SkillRow({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-end">
          <h4 style={Style.gray}>{skill.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          {createCalculatedSkillItems(skill.items)}
        </Col>
      </Row>
    </div>
  );
}

function createCalculatedSkillItems(items: ISkill.Item[]) {
  const layer = 3;

  const splitPoint = Math.ceil(items.length / layer);

  const list: ISkill.Item[][] = [];

  for (let i = 0, splitAfter = splitPoint; i < layer; i += 1, splitAfter += splitPoint) {
    list.push(items.slice(splitAfter - splitPoint, i === layer - 1 ? undefined : splitAfter));
  }

  return (
    <Row className="mt-2 mt-md-0">
      {list.map((skills, index) => {
        return (
          <Col md={4} xs={12} key={index.toString()}>
            <ul>
              {skills.map((skill, skillIndex) => {
                return (
                  <li key={skillIndex.toString()}>
                    {createBadge(skill.level)}
                    {skill.title}
                  </li>
                );
              })}
            </ul>
          </Col>
        );
      })}
    </Row>
  );
}

function createBadge(level?: ISkill.Item['level']) {
  if (!level) {
    return '';
  }

  const color = (() => {
    switch (level) {
      case 3: {
        return 'primary';
      }
      case 2: {
        return 'success';
      }
      case 1:
      default: {
        return 'secondary';
      }
    }
  })();

  return (
    <span>
      <Badge pill color={color}>
        {level}
      </Badge>
    </span>
  );
}
