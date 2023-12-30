import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type threshold = number;

export type ContactFromEmailProps = {
  message: string;
  senderEmail: string;
};
