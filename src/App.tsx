import { Header } from "./components/Header";

import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import "./global.css";

const posts: PostType[] = [
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
          "Somos especialistas em gestão financeira agro e na rentabilidade da sua propriedade.",
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
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
