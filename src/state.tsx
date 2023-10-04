import {create} from 'zustand';

export type FormShape = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
};

export const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
};

type FormState = {
  formData: FormShape;
  setFormData: (formData: FormShape) => void;
};

export const useFormState = create<FormState>(set => ({
  formData: emptyForm,
  setFormData: (formData: FormShape) => set({formData}),
}));
