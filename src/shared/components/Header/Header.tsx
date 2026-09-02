import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
  completedCount: number;
  totalCount: number;
}

function Header({ title, completedCount, totalCount }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🚀 {title}</h1>
      <p className={styles.subtitle}>
        {completedCount} of {totalCount} tasks completed
      </p>
    </header>
  );
}

export default Header;