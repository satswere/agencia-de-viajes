import {modeloTestimoniales} from '../Models/testimoniales.js'

export const GuardarTestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const errores = [];

  if (nombre.trim() === "") errores.push({ mensaje: "El nombre esta vacio " });
  if (correo.trim() === "") errores.push({ mensaje: "El correo esta vacio " });
  if (mensaje.trim() === "") errores.push({ mensaje: "El mensaje esta vacio " });

  console.log(errores);

  const testimonios = await modeloTestimoniales.findAll();

  if (errores.length > 0) {
      res.render('testimoniales', {
          mensaje: 'testimoniales',
          errores,
          mensaje,
          nombre,
          correo,
          testimonios
      })
  }else{
    try {
        //en caso de que no sean iguales es nombre : nombre o 
        //nombre : los nombres, referencia al primero es el campo, el segundo es el valor
        const resultado = await modeloTestimoniales.create({nombre, mensaje, correo}) 
        res.redirect('/testimoniales');
    } catch (error) {
        console.log(error);
    }
}
};
