const app = require('./app');   
app.set('port', process.env.PORT || 4200);
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto'${ app.get('port')}'`);
});