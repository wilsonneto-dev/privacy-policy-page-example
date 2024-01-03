import styles from './header.module.scss';
import Link from "next/link";
import Button from "@/components/button/button";

export default function Header()
{
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div>
                    <div>
                        <b>Byte Byte Dark</b>
                    </div>
                </div>
                <div>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </div>
                <div>
                    <a href="/"><Button>Install the Extension</Button></a>
                </div>
            </div>
        </header>
    )
}
