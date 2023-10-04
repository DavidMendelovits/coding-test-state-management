import React, {useState, createContext} from 'react';

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

const FormContext = createContext<{
  formData: FormShape;
  setFormData: React.Dispatch<React.SetStateAction<FormShape>>;
}>({
  formData: emptyForm,
  setFormData: () => {},
});

export const FormProvider = (props: {children: React.ReactNode}) => {
  const [formData, setFormData] = useState<FormShape>(emptyForm);

  return (
    <FormContext.Provider value={{formData, setFormData}}>
      {props.children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => React.useContext(FormContext);
