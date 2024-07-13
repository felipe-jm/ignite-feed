import { Header } from "./components/Header";

import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Felipe Jung",
      avatarUrl: "https://github.com/felipe-jm.png",
      role: "Tech Head at Lucro Rural",
    },
    content: [
      {
        type: "paragraph",
        content: "Salve!",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nec nunc.",
      },
      {
        type: "link",
        content: "lucrorural.com.br",
      },
    ],
    publishedAt: new Date("2024-07-13 16:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
