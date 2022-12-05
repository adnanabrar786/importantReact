import React, { memo } from 'react'

const Child = ({ Learning, count }) => {
  console.log("child render");
  return (
    <div>

    </div>
  )
}

export default memo(Child);
