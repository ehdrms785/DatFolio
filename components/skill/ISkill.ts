export declare namespace ISkill {
  export interface Payload {
    /**  ### 보유 기술 목록 */
    skills: Skill[];

    /** ### 수치에 대한 설명 */
    tooltip?: string;
  }

  export interface Skill {
    /** ### 대분류 */
    category: string;

    /** ### 해당 분류 내 항목들 */
    items: Item[];
  }

  interface Item {
    /** ### 보유 기술 이름 */
    title: string;

    /**
     * ### 보유 기술 수준
     *
     * @value 1: 옅은 회색. (light)
     * @value 2: 짙은 회색. (sencondary)
     * @value 3: 파란색. (primary)
     * @value undefined: Empty
     */
    level?: 1 | 2 | 3;
  }
}
