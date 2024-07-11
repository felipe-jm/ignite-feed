import { Header } from "./components/Header";

import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Felipe"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nec nunc."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
