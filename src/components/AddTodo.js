import React, { useState } from 'react'
import { Button, Form, Input } from '../GlobalStyle'

function AddTodo() {

  const [value,setValue]=useState('')
  return (
    <Form>
      <Input type='text' pd bg='blue'  />
      <Button pd primary disabled={!value}>Add</Button>
    </Form>
  )
}

export default AddTodo
