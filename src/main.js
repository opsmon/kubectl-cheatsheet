import { mount } from "svelte";
import App from "./App.svelte";
import "../assets/styles.css";
import "../assets/docs.css";
import "../assets/search-index.js";

const app = mount(App, {
  target: document.getElementById("app")
});

export default app;
