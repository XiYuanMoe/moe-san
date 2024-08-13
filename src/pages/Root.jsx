import HeaderBar from "../components/HeaderBar.jsx";
import {Link, Outlet} from "react-router-dom";
import styles from "./Root.module.css"

export default function Root() {

    return (
        <>
            <div className={styles["bg"]}>
                <div className={styles["box"]}>
                    <HeaderBar>
                        <div className={styles["header-icon"]}>
                            <Link to="/">
                                西苑萌战
                            </Link>
                        </div>
                        <div className={styles["header-link"]}>
                            <Link to="/history">
                                历史赛程
                            </Link>
                            <Link to="/about">
                                关于我们
                            </Link>
                        </div>
                    </HeaderBar>
                    <div className={styles["content"]}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}