import express, { json } from "express"
import cors from "cors"
import { resolve } from "path"
import routes from "./routes"
import { errors } from "celebrate"

const app = express()

app.use(cors())

app.use(json())

app.use(routes)

app.use("/uploads", express.static(resolve(__dirname, "..", "uploads")))

app.use(errors())

app.listen(3333)