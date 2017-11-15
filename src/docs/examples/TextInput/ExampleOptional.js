import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        htmlFor="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
       />
    )
  }
}
