import { Outlet } from "react-router-dom";

export default function FormLayout() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="md:container bg-red-100">
        <Outlet />
      </div>
    </div>
  );
}
