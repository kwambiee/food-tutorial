import "./App.css";
import Category from "./components/category";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
