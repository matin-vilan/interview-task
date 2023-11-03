import moment from "moment-jalaali";
import { useApp } from "../store/AppProvider";

export default function SuccessPage() {
  const { formValues } = useApp();

  return (
    <div className="w-full">
      {!!formValues.map && (
        <div className="flex">
          <p>location: </p>
          <div className="flex justify-center">
            <p className="text-blue-800 ">lat:{formValues.map?.lat}</p>
            <p className="text-red-800 ">lng:{formValues.map?.lng}</p>
          </div>
        </div>
      )}
      <div className="flex">
        <p>date: </p>
        <p>{moment(formValues.date).format("jYYYY/jMM/jDD")}</p>
      </div>
      {!!formValues.time && (
        <div className="flex">
          <p>time: </p>
          <p>{`hour:${formValues.time?.hour} min:${formValues.time?.minute} `}</p>
        </div>
      )}
    </div>
  );
}
