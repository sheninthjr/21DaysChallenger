import express from 'express';
import cors from 'cors';
import { PrismaClient } from "@prisma/client";
const app = express();
app.use(cors());
app.use(express.json());
const prisma = new PrismaClient();
const port = 3002;


app.get("/api/users/:email", async (req, res) => {
    const email = req.params.email;
    const task = await prisma.user.findUnique({
        where:{
            email:email
        },
        select:{
            id:true
        }
    })
    res.json({task})

})

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
});

