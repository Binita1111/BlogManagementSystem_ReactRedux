import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'

const Parent = () => {
    const [salary,setsalary]= useState(2000)
    const [age,setAge]=useState(22)
    const incrementAge= useCallback(()=>{
        setAge(age+5)
    },[age])
    const incrementsalary =useCallback(()=>{
        setsalary(salary + 1000)
    },[salary])
  return (
    <div>
        <Title/>
        <Display text="age" displayValue={age}/>
        <Button content='Increase age' handleClick={incrementAge}/>
        <Display text="salary" displayValue={salary}/>
        <Button content='Increase salary' handleClick={incrementsalary}/>


    </div>
  )
}

export default Parent