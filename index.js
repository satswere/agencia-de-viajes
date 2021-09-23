import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//usar la base de datos
db.authenticate()
.then(() => console.log("base de datos conectada"))
.catch ( error => console.log(error));

//definir el puerto
const port = process.env.PORT || 8000;

app.use (express.static('public'));
//habilitar pug
app.set('view engine', 'pug');

//ovtener el anio

app.use((req,res, next) =>{
const date = new Date();
res.locals.year = date.getFullYear();

  next();
});

app.use(express.urlencoded({extended: true})); //permite el poder enviar datos de un formulario

//usar las rutas
app.use("/", router);

//uso del port
app.listen(port, () => {
    console.log(`server funcionando en: ${port}`);
  });