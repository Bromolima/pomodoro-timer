import { HistoryIcon, PlayIcon } from 'lucide-react'
import { NavbarButton } from '../Buttons/NavbarButton'
import styles from './styles.module.css'

export function Navbar() {

    return (
        <div className={styles.navbar}>
            <NavbarButton icon={<PlayIcon />} />
            <NavbarButton icon={<HistoryIcon />} />
        </div>
    )
}