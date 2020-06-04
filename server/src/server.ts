import express, { json } from "express"
import cors from "cors"
import { resolve } from "path"
import routes from "./routes"

const app = express()

app.use(cors())

app.use(json())

app.use(routes)

app.use("/uploads", express.static(resolve(__dirname, "..", "uploads")))

app.listen(3333)