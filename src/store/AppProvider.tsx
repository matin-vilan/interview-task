import { createContext, useContext, useState } from "react";
// import { DayValue } from "react-modern-calendar-datepicker";

interface FormProps {
  map: { lat: number | null; lng: number | null } | null;
  date: Date;
  time: {
    hour: number | null;
    minute: number | null;
    second: number | null;
  } | null;
}
interface CreateContextProps {
  formValues: FormProps;
  setFormValues: (values: FormProps) => void; // Adjust the function signature as needed
}

const AppContext = createContext<CreateContextProps>({
  formValues: {
    map: null,
    date: { day: 11, month: 8, year: 1402 },
    time: null,
  },
  setFormValues: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [formValues, setFormValues] = useState<FormProps>({
    map: null,
    date: new Date(),
    time: null,
  });

  const values = {
    formValues,
    setFormValues,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
