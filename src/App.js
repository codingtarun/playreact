import { Card } from "./components/Card/Card";
import { Counter } from "./components/Counter/Counter";
import { Todo } from "./components/Todo/Todo";
import { User } from "./components/User/User";
function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
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
    </div>
  );
}

export default App;
