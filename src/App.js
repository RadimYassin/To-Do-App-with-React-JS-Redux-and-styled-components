import AddTodo from './components/AddTodo'
import { Container,Title } from "./GlobalStyle";
function App() {
  return (
    <Container>
        <Title> To do list </Title>
         <AddTodo/>
    </Container>
  );
}

export default App;
