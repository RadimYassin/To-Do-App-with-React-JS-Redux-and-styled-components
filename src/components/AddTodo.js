import React from 'react'
import { Button, Form, Input } from '../GlobalStyle'

function AddTodo() {
  return (
    <Form>
      <Input type='text' pd bg='blue'  />
      <Button pd primary>Add</Button>
    </Form>
  )
}

export default AddTodo
