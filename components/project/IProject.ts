import { StaticImageData } from 'next/image';

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
  }
}
