import { _global } from './_global';

import { IGlobal } from '../components/common/IGlobal';

const Payload: Payload = {
  _global,
};

interface Payload {
  _global: IGlobal.Payload;
}

export default Payload;
