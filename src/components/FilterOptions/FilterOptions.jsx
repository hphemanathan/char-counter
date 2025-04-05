import React from 'react';
import ExcludeCheckBox from '../ExcludeCheckBox/ExcludeCheckBox';
import SetCharLimit from '../SetCharLimit/SetCharLimit';
import ReadingTime from '../ReadingTime/ReadingTime';

function FilterOptions() {
  return <div>
    <ExcludeCheckBox/>
    <SetCharLimit/>
    <ReadingTime/>
  </div>;
}

export default FilterOptions;
