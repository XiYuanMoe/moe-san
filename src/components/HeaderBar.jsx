import styles from "./HeaderBar.module.css"

export default function HeaderBar({ children }) {
    return (
        <>
            <div className={styles["header-bar"]}>
                {children}
            </div>
        </>
    )
}