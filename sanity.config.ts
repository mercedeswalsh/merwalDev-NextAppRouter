import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk";
// import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "7rg63h57",
    dataset: "production",
    title: "personal website",
    apiVersion: "2023-09-11",
    basePath: "/admin",
    plugins: [deskTool()],
    // schema: { types: schemas }
})

export default config