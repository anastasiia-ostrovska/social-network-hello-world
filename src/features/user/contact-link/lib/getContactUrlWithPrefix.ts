import { ContactLink } from '@features/user/contact-link/model/types';

interface GetContactUrlWithPrefixParams {
  url: string;
  type: ContactLink;
}

export const getContactUrlWithPrefix = ({
  url,
  type,
}: GetContactUrlWithPrefixParams): string => {
  switch (type) {
    case ContactLink.Email:
      return `mailto:${url}`;
    case ContactLink.Phone:
      return `tel:${url}`;
    default:
      return url;
  }
};
