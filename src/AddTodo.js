import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({ onCreate , onPrioriti}){
    const [value, setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }


    return(<form className='AddTodo' onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} type="text"/>
            <div className='prioritiName'>
                <p>I</p>
                <p>II</p>
                <p>III</p>
            </div>
            <div className='prioritiForm'>
                <input type="radio" name='prioriti' onChange={()=> onPrioriti('1')}/>
                <input type="radio" name='prioriti' onChange={()=> onPrioriti('2')}/>
                <input type="radio" name='prioriti' onChange={()=> onPrioriti('3')}/>
            </div>
            <button type='submit'>Add todo</button>
        </form>
    )
}
AddTodo.propTypes={
    onCreate: PropTypes.func.isRequired
}

export default AddTodo