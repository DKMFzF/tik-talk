export type TProfileSteckTags = string[]
export type TProfileAvatar = string | null
export type TProfileId = string;

export interface IProfileView {
  readonly id: TProfileId;
  username: string;
  description: string;
  avatarUrl: TProfileAvatar;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: TProfileSteckTags[];
  city: string;
}
