import React from 'react'

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
        ob
    </button>
  )
}

export default ToggleButton