export interface IContactForm {
  id?: string;
  email?: string;
  subject?: string;
  message?: string | null;
  subscribe?: boolean;
}

export const defaultValue: Readonly<IContactForm> = {
  subscribe: false,
};
