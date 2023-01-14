import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibltyFiltter from './components/VisibltyFiltter'
import { Container,Title } from "./GlobalStyle";
function App() {
  return (
    <Container>
        <Title> To do list </Title>
         <AddTodo/>
         <TodoList/>
         <VisibltyFiltter/>
    </Container>
  );
}

export default App;
