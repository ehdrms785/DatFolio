import favicon from '../public/favicon.ico';
import previewImage from '../public/previewImage.png';
import { IGlobal } from '../components/common/IGlobal';

const title = '성장하는 프론트엔드 개발자, 홍동근';
const description = `Flutter, React 프레임워크를 사용하여 웹/앱 서비스를 개발하는 프론트엔드 개발자 입니다. `;

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
          alt: 'OpenGraph Image',
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
