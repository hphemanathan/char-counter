import React from 'react';

function SetCharLimit() {
  const [charLimitCheck, setCharLimitCheck] = React.useState(false);
  const [charLimit, setCharLimit] = React.useState('');
    const id  = React.useId()
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type='checkbox'
          id={id}
          checked={charLimitCheck}
          onChange={(event) => {
            setCharLimitCheck(event.target.checked);
          }}
        />
        <label htmlFor={id}>Set Character Limit</label>
        {charLimitCheck ? (
          <textarea
            name='character limit'
            id={id}
            value={charLimit}
            onChange={(event) => setCharLimit(event.target.value)}
          />
        ) : (
          <span></span>
        )}
      </form>
    </div>
  );
}

export default SetCharLimit;
