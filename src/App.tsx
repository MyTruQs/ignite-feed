import { Header } from './components/Header.tsx'
import { Post, PostType } from './components/Post.tsx'
import { Sidebar } from './components/Sidebar.tsx';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'http://github.com/MyTruQs.png',
            name: 'Raul Fernandes',
            role: 'Full Stack Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
        ],
        publishedAt: new Date('2024-10-26 12:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/rabner981.png',
            name: 'Abner Rodrigues',
            role: 'Zabiqueiro'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
        ],
        publishedAt: new Date('2024-10-25 11:00:00')
    },
];

function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

export default App
