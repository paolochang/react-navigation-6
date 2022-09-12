import React from "react";
import DatePicker from "react-native-date-picker";

export default function CustomDatePicker({ date, setDate }) {
  return <DatePicker date={date} onDateChange={setDate} />;
}
