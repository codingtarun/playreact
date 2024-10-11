import { Card } from "./components/Card/Card";
import { Counter } from "./components/Counter/Counter";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Todo } from "./components/Todo/Todo";
import { User } from "./components/User/User";
import { Product } from "./components/Product/Product";
function App() {
  return (
    <div className="App bg-slate-100 dark:bg-black min-h-screen pt-10">
      <Product></Product>
      <Header></Header>
      <div className="flex flex-col justify-center items-center space-y-4">
        <Card title="Counter">
          <Counter />
        </Card>
        <Card title="Todo">
          <Todo />
        </Card>
        <Card title="User List">
          <User />
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
