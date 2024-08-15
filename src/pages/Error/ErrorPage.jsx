import {useRouteError} from "react-router-dom";
import styles from "./ErrorPage.module.css"

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)

    return (
        <>
            <div className={styles.bg}>
                <div className={styles.errorContent}>
                    <h1>おっと!</h1>
                    <p>いくつかの小さなエラーが発生しました</p>
                    <p>
                        <i>{error.status} {error.statusText}</i>
                    </p>
                </div>
            </div>
        </>
    )
}
