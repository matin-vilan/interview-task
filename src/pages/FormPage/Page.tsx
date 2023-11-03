import { useState, useEffect } from "react";
import CustomCalendar from "./Calendar";
import Map from "./Map";
import CustomTimePicker from "./TimePicker";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../store/AppProvider";
import moment from "moment";
// import { DayValue } from "react-modern-calendar-datepicker";

export default function FormPage() {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(true);
  const { formValues, setFormValues } = useApp();
  const [clockValue, setClockValue] = useState<moment.Moment>(moment());
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  function onChangeClock(value: moment.Moment) {
    setClockValue(value);
    setFormValues({
      ...formValues,
      time: {
        hour: value.hour(),
        minute: value.minute(),
        second: value.second(),
      },
    });
  }

  function onChangeCalendar(e: Value) {
    console.log({ e });

    // setFormValues({
    //   ...formValues,
    //   date: {
    //     day: e?.day || 1,
    //     month: e?.month || 8,
    //     year: e?.year || 1402,
    //   },
    // });
    setIsOpenCalendar(false);
  }

  const handleSubmit = () => {
    navigate("/success");
  };
  const onOpenCalendar = () => {
    setIsOpenCalendar(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [showAnimation]);

  if (showAnimation) return <Loading />;
  return (
    <div className="w-full h-full p-4 overflow-auto flex gap-4 flex-col align-center">
      <p className="font-medium text-center py-4 ">Form</p>
      <Map />
      <CustomCalendar
        onChange={onChangeCalendar}
        isOpen={isOpenCalendar}
        onOpen={onOpenCalendar}
        value={formValues.date}
      />
      <CustomTimePicker onChange={onChangeClock} value={clockValue} />
      <button onClick={handleSubmit}>ثبت فرم</button>
    </div>
  );
}
