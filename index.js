const express = require("express")

const app = express ()

app.get('/', (req,res) => {
    res.send("servidor express funcionando")
})

const tarefasRoutes = require("./routes/tarefas")


app.use(express.json())
app.use("/tarefas",tarefasRoutes);

app.listen(3000,()=> {
    console.log("servidor backend rodando em http://localhost3000")
})