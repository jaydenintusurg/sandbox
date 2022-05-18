import React, { useState } from "react";
import DatePicker from 'react-multi-date-picker/src/components/date_picker/date_picker';

function MyComp() {
  const [value, setValue] = useState(new Date());
  return (
    <DatePicker value={value} onChange={setValue} range numberOfMonths={2} />
  );
}

export default MyComp;
