import { Hono } from 'hono'
import Env from '../types/env'
import userRouter from '../routes/user'
import blogRouter from '../routes/blog'

const app = new Hono<Env>() // 👈 Tell Hono about your environment variables

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


app.get("/", (c) => {
    return c.json("hello world")
  
})

export default app
