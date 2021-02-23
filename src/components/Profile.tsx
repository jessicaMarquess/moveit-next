import styles from '../styles/components/Profile.module.css';

export default function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/jessicaMarquess.png" alt="Jessica Marques"/>
            <div>
                <strong>Jessica Maria</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}