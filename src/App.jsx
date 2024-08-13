import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./App.css"
import {RouterProvider} from "react-router-dom";
import router from "./router/router.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
//
// export default function App() {
//     return root
// }

// /**
//  * 顶部导航栏
//  */
// function TopNav() {
//     return (
//         <div className="topnav">
//
//             {/* 左侧选项 */}
//             <img src="https://s3.bmp.ovh/imgs/2024/08/09/81b4ff5e5f614e0b.jpg" className="left icon"></img>
//             <a href="#" className="left title">西苑萌战官方网站！</a>
//
//             {/* 右侧选项 */}
//             {/* 这里的左右顺序和上下顺序是反的 */}
//             <a href="#" className="right option">登录/注册</a>
//             <a href="#" className="right option">我要捐赠</a>
//             <a href="#" className="right option">开发者们</a>
//             <a href="#" className="right option">关于西苑</a>
//             <a href="#" className="right option">关于萌战</a>
//
//         </div>
//     );
// }
