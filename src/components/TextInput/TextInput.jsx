import React from 'react';

function TextInput() {
  const id = React.useId();
  return <div>
    <form action="">
      <textarea name="character counter" id={id}></textarea>
    </form>
  </div>;
}

export default TextInput;
