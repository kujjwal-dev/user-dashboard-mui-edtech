import React from "react"
import { useScrollToTop } from './hooks/use-scroll-to-top';
import  Router  from "./routes/sections"
import ThemeProvider from './theme/index';




export default function App() {

  useScrollToTop();

  return (
    <ThemeProvider>
    <Router />
  </ThemeProvider>
  )
}

