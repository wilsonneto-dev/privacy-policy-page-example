import styles from './header.module.scss';
import Button from "@/components/button/button";

export default function Header()
{
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div>
                    <div>
                        <b>Easy Snippets</b>
                    </div>
                </div>
                <div>
                    <a href="/"><Button>Install the Extension</Button></a>
                </div>
            </div>
        </header>
    )
}
