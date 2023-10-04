import QrCodeCreate from "./QrCodeCreate";
import QrCodeDecode from "./QrCodeDecode";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <QrCodeCreate />,
  },
  {
    path: "/decode",
    element: <QrCodeDecode />,
  },
  {
    path: "/*",
    element: <QrCodeCreate />,
  }
]);
