import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Container,Title } from "./GlobalStyle";
function App() {
  return (
    <Container>
        <Title> To do list </Title>
         <AddTodo/>
         <TodoList/>
    </Container>
  );
}

export default App;
