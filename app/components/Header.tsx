import styles from './Header.module.css';

export default function Header (){
    return (
        <header className={styles.header}>
            <ul>
                <li>Courses</li>
                <li>Student Work</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
            <button>Start Free Trial</button>

        </header>
    );
};
