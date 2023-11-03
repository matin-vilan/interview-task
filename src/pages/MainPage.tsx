import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="w-full h-full flex align-center justify-center">
      <button className=" bg-blue-400 text-white p-4 rounded-lg hover:bg-blue-700 hover:text-blue-50">
        <Link to="/form">GO TO FORM</Link>
      </button>
    </div>
  );
}
