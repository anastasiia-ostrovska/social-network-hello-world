import { Styles } from '@shared/model';

export type UserId = string;

// Photo types
export enum PhotoLabel {
  Avatar = 'avatar',
  Background = 'background',
}

export type PhotoSrc = string | null;
export type UserPhotos = Record<PhotoLabel, PhotoSrc>;

export enum PhotoAction {
  Delete = 'delete',
}

export type UploadedPhoto = FileList | PhotoAction.Delete;
export type UploadedPhotos = Record<PhotoLabel, UploadedPhoto | undefined>;
export type UpdatedUserPhotos = Record<PhotoLabel, File | null | undefined>;

// Contact types
export enum ContactLabel {
  LinkedIn = 'linkedIn',
  Github = 'github',
  Facebook = 'facebook',
  Instagram = 'instagram',
}

export type ContactUrl = string;
export type UserContacts = Record<ContactLabel, ContactUrl>;

// User types
interface UserInfo {
  email: string;
  phone: string;
  country: string;
  job: string;
  aboutMe: string;
}

export interface UserWithInfo extends UserInfo {
  id: UserId;
  name: string;
  photos: UserPhotos;
  contacts: UserContacts;
  followedBy: UserId[];
  following: UserId[];
}

interface EditableUserData extends UserContacts, UpdatedUserPhotos, UserInfo {
  name: string;
}

export type UpdatedUserData = Partial<EditableUserData> | FormData;

// Users types
export interface UsersListData {
  users: UserWithInfo[];
  usersTotal: number;
  totalPages: number;
  perPage: number;
  currentPage: number;
}

export interface UsersListFilters {
  count: number;
  page: number;
  search: string;
  following: boolean;
}

// Props types
export enum AvatarPosition {
  Center = 'center',
  Left = 'left',
}

export interface UserAvatarProps {
  name: string;
  avatarSrc: PhotoSrc;
  avatarSize: number;
  sx?: Styles;
}

export interface BackgroundImageProps {
  bgImageSrc: PhotoSrc;
  bgImageHeight: number | `${number}px` | `${number}rem`;
}

export interface AvatarWithBgImageProps
  extends UserAvatarProps,
    BackgroundImageProps {
  avatarBorderColor?: string;
  avatarBorderWidth?: `${number}px`;
  avatarPosition?: AvatarPosition;
}
