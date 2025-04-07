import React from 'react';
import ExcludeCheckBox from '../ExcludeCheckBox/ExcludeCheckBox';
import SetCharLimit from '../SetCharLimit/SetCharLimit';
import ReadingTime from '../ReadingTime/ReadingTime';

function FilterOptions({...delegated}) {
  return <div>
    <ExcludeCheckBox {...delegated}/>
    <SetCharLimit {...delegated}/>
    <ReadingTime/>
  </div>;
}

export default FilterOptions;
