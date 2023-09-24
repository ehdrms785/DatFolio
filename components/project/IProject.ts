import { StaticImageData } from 'next/image';
import { ImageSize } from '../common/ImageSize';

import { Device } from '../../type';

export declare namespace IProject {
  export interface Payload {
    /** ### 메인 이미지 */
    image: StaticImageData;
    /** ### 영상 URL */
    video?: string;
    /** ### 프로젝트 명 */
    title: string;
    /** 프로젝트 서비스 요약 */
    subTitle: string;
    /** ### 프로젝트 설명 */
    description: string;
    /** ### 기술들 */
    skills: string[];
    /** ### 이미지 크기 */
    size?: ImageSize;
    /** ### 링크 타이틀 */
    link?: string;
    /** ### 프로덕션 타입 (web | app) */
    device?: Device;
  }
}
