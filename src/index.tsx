import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/default.css";
import "./assets/css/main.css";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
