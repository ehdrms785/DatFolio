import { NextSeoProps } from 'next-seo';
import { StaticImageData } from 'next/image';

export declare namespace IGlobal {
  export interface Payload {
    /**
     * ### portFolio 제목
     *
     * @description `<head>` 태그 내 `<title>` 을 정의
     */
    headTitle: string;

    /**
     * ### favicon 이미지
     */
    favicon: StaticImageData;

    /**
     * ### SEO Properties
     *
     * @description OpenGraph 메타 태그를 포함한 SEO 를 위한 요소를 정의
     */
    seo: NextSeoProps;
  }
}
