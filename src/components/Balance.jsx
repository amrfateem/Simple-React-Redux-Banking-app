import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const balance = useSelector(state => state.balance)
  return (
    <div>
        <h1 className="m-auto text-white text-center py-5 text-3xl">Balance <strong>${balance} </strong></h1>
    </div>
  )
}

export default Balance