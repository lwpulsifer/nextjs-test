import styles from '../styles/shared_components/CommonFooter.module.css';
import Link from 'next/link';

function CommonFooter() {
  return (
    <footer className={styles.footer}>
      <Link href={'/'}>Back to home</Link>
    </footer>
  )
}

export default CommonFooter;