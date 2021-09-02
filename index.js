const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const mysqlsessionstore = require('express-mysql-session');
const { database } = require('./keys');

//INICIALIZA EXPRESS 
const app = express();


//CONFIGURACION DE PUERTOS
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

//SE CONFIGURA EL MOTOR DE PLANTILLA


app.set('view engine', '.hbs');
app.set('json spaces', 2);

//sesiones NECESARIAS PARA EL USO DEL REQ.FLASH

app.use(session({
    secret: 'pipesesion',
    resave: false,
    saveUninitialized: false,
    store: new mysqlsessionstore(database)
}));

app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//VARIABLES GLOBALES
app.use((req, res, next) => {
    next();
})

//RUTAS
app.use(require('./routes'));
//ruta producto modelo MVC
app.use('/productos', require('./routes/productos/productos'));
app.use('/pedidos', require('./routes/pedidos/pedidos'));
//SE CONFIGURA LA CARPETA MULTIMEDIA PARA LA WEB
app.use(express.static(path.join(__dirname, 'public')));


//PARA ARRANCAR EL SERVIDOR 
app.listen(app.get('port'), () => {
    console.log('el servidor esta en el puerto numero', app.get('port'));
})