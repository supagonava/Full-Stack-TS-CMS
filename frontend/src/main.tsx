import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import "./index.css";
import "./theme.css";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeicons/primeicons.css";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Bangkok");

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
