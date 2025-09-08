import { ReactNode } from 'react';

export enum ContactLink {
  Email = 'email',
  Phone = 'phone',
  Website = 'website',
}

export interface ContactLinkProps {
  url: string;
  label: string;
  icon?: ReactNode;
  type?: ContactLink;
}
