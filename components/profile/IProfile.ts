import { StaticImageData } from 'next/image';

export declare namespace IProfile {
  export interface Payload {
    /**
     * ### 메인 이미지
     */
    image: StaticImageData;
    /** ### 타이틀 */
    title: string;
    /** ### 이름 */
    name?: string;
  }
}
