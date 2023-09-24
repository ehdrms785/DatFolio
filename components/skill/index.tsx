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

export const Skill = ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
  return (
    <div className="pt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2>
              <span style={Style.blue}>SKILL</span>
              {createTooltip(payload.tooltip)}
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

function createTooltip(content?: string) {
  if (!content) {
    return '';
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <TitleWrap>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        id="skill-tooltip"
        style={{ width: '1.5rem', height: '1.5rem' }}
      />
      <Tooltip
        style={{ whiteSpace: 'pre-wrap' }}
        placement="right"
        target="skill-tooltip"
        isOpen={tooltipOpen}
        toggle={toggle}
      >
        {content}
      </Tooltip>
    </TitleWrap>
  );
}

const TitleWrap = styled.small`
  display: inline-flex;
  padding-left: 0.25rem;
`;
