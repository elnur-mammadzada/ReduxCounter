import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './redux/store'
import MUIButton from './pages/Button/MUIButton';
import { customValue, decrement, increment } from './redux/counterSlice';
import '../src/App.css'
import MUITextField from './pages/TextField/MUITextField';

const App = () => {

  const dispatch = useDispatch()
  const [num, setNum] = useState();

  const { value } = useSelector((store) => store.counter);
  console.log(value);


  return (
    <div className='counter'>
      <div className='counter__title'>{value}</div>
      <div className='counter__btn'>
        <MUIButton onClick={() => dispatch(increment())} variant={"contained"} color={"success"} text={'Artır'} />
        <MUIButton onClick={() => dispatch(decrement())} variant={"contained"} color={"error"} text={'Azalt'} />
      </div>
      <div className='counter__input'>
        <div className='counter__input-value'>
          <MUITextField onChange={(e) => {setNum(e.target.value)}} />
        </div>
          <div className='counter__input-click'>
          <MUIButton text={'Set Value'} variant={"contained"} color={"success"} onClick={() => dispatch(customValue(Number(num)))} />
        </div>
      </div>

    </div>
  )
}

export default App
