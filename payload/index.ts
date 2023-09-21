import { _global } from './_global';
import profile from './profile';
import introduce from './introduce';
import skill from './skill'
import project from './project'

import { IGlobal } from '../components/common/IGlobal';
import { IProfile } from '../components/profile/IProfile';
import { IIntroduce } from '../components/introduce/IIntroduce';
import { ISkill } from '../components/skill/ISkill';
import { IProject } from '../components/project/IProject';

const Payload: Payload = {
  _global,
  profile,
  introduce,
  skill,
  project,
};

interface Payload {
  _global: IGlobal.Payload;
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  project: IProject.Payload[]
}

export default Payload;
