import { Row, Col, Tooltip } from 'reactstrap';
import { PropsWithChildren, useState } from 'react';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Style } from '../common/Style';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
import styled from 'styled-components';

type Payload = ISkill.Payload;

const SkillTooltip = ({ content }: { content?: string }) => {
  if (!content) {
    return null;
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const tooltipId = 'skill-tooltip';

  return (
    <TitleWrap>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        id={tooltipId}
        style={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }}
      />
      <Tooltip
        style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }} // 툴팁 내부도 왼쪽 정렬
        placement="right"
        target={tooltipId}
        isOpen={tooltipOpen}
        toggle={toggle}
      >
        {content}
      </Tooltip>
    </TitleWrap>
  );
};

export const Skill = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <div className="pt-5" style={{ textAlign: 'initial' }}>
      <EmptyRowCol>
        <Row className="pb-3 text-center">
          <Col>
            <h2>
              <span style={Style.blue}>SKILL</span>
              <SkillTooltip content={payload.tooltip} />
            </h2>
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
};

const TitleWrap = styled.small`
  display: inline-flex;
  vertical-align: middle;
  padding-left: 0.5rem;
`;
