"use client";

import { Provider } from "react-redux";
import { store } from "./config/redux/store"; // adjust path

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}