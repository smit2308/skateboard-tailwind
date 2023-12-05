import React from 'react'
import { loader as loader } from '../assets/icons';
import Button from './Button';

const Loader = () => {
  return (
    <Button
      label={""}
      iconURL={loader}
      disabled={true}
    />
  )
}

export default Loader;