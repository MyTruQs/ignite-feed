import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://github.com/MyTruQs.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Raul Fernandes</strong>
                            <time title="5 de maio de 2024" dateTime="2024-10-25 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}