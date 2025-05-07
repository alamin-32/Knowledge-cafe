import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Header from "./Component/Blogs/Header";
import Bookmarks from "./Component/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex mx-4 p-3">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
