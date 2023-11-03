import { Route, Routes } from "react-router-dom";
import FormLayout from "../layouts/FormLayout";
import FormPage from "../pages/FormPage/Page";
import MainPage from "../pages/MainPage";
import SuccessPage from "../pages/SuccessPage";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route element={<FormLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesContainer;
