import React from 'react';

function ExcludeCheckBox({exclude, setExclude}) {
  
  const id  = React.useId()
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type='checkbox'
          id={id}
          checked={exclude}
          onChange={(event) => {
            setExclude(event.target.checked);
          }}
        />
        <label htmlFor={id}>Exclude Spaces</label>
      </form>
    </div>
  );
}

export default ExcludeCheckBox;
