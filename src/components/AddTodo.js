import React, { useState } from 'react'
import { Button, Form, Input } from '../GlobalStyle'

function AddTodo() {

  const [value,setValue]=useState('')

const handelSubmit=e=>{
  e.preventDefault()
  console.log("hello");
}
  return (
    <Form onSubmit={handelSubmit}>
      <Input 
      value={value}

      onChange={e=>setValue(e.target.value)}
      type='text' pd bg='blue'  />
      <Button type='submit' pd  disabled={!value}>Add</Button>
    </Form>
  )
}

export default AddTodo
