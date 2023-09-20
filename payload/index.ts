import { _global } from './_global';
import profile from './profile';
import introduce from './introduce';

import { IGlobal } from '../components/common/IGlobal';
import { IProfile } from '../components/profile/IProfile';
import { IIntroduce } from '../components/introduce/IIntroduce';

const Payload: Payload = {
  _global,
  profile,
  introduce,
};

interface Payload {
  _global: IGlobal.Payload;
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
}

export default Payload;
