import { ordered, restocked } from './iceCreamSlice'
import { useAppSelector,useAppDispatch } from '../../app/hooks'
import { useState } from 'react'


const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of iceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order iceCream</button>
      <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>Restock iceCreams</button>
    </div>
  )
}

export default IceCreamView
