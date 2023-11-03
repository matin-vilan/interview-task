// import { Calendar, DayValue, utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";



export default function CustomCalendar({
  onChange,
  value,
  isOpen,
  onOpen,
}: {
  onChange: (e: Value) => void;
  value: Date;
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <>
      <button
        onClick={onOpen}
        className="bg-blue-400 text-white p-4 rounded-lg"
      >
        Show Calendar
      </button>
      {isOpen && (
        <DatePicker onChange={onChange} value={value} />

        // <Calendar
        //   value={value}
        //   minimumDate={utils("fa").getToday()}
        //   onChange={onChange}
        //   shouldHighlightWeekends
        //   locale="fa"
        // />
      )}
    </>
  );
}
