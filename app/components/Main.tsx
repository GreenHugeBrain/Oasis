import styles from './Main.module.css';

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <h1 className={styles.h1}>
                    Explore new skills <span>School</span>
                </h1>

                <div className={styles.buttons}>
                    <button>Trending Courses</button>
                    <button>New Courses</button>
                    <button>User Experience (UX)</button>
                    <button>Interface (UI)</button>
                    <button>Programming</button>
                </div>

                <div className={styles.lecturers}>

                </div>
            </div>
        </main>
    );
}
