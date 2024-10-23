import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis modi soluta a odio delectus obcaecati. Molestias quae nisi cum eveniet rerum minus suscipit! Ipsa a deleniti assumenda dolores nostrum dicta?
        </main>
      </div>
    </div>
  )
}

export default App
