import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/default.css";
import "./assets/css/main.css";
import "./assets/css/category.css";
import "./assets/css/view.css";
import "./assets/css/cs.css";
import "./assets/css/mypage.css";
import "./assets/css/event.css";
import "./assets/css/member.css";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
