import "rc-time-picker/assets/index.css";

import moment from "moment";

import TimePicker from "rc-time-picker";

const format = "h:mm a";

const now = moment().hour(0).minute(0);

export default function CustomTimePicker({
  onChange,
  value,
}: {
  onChange: (value: moment.Moment) => void;
  value: moment.Moment;
}) {
  return (
    <TimePicker
      showSecond={false}
      defaultValue={now}
      value={value}
      className="xxx"
      onChange={onChange}
      format={format}
      use12Hours
      inputReadOnly
    />
  );
}
