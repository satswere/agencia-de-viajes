import { modeloTestimoniales } from "../Models/testimoniales.js";
import { modeloViaje } from "../Models/viaje.js";

const RenderInicio = async (req, res) => {
  const promiseDB = [];
  promiseDB.push (modeloViaje.findAll({ limit: 3 }));
  promiseDB.push (modeloTestimoniales.findAll({ limit: 3 }));

  try {
   const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "inicio",
      clase: "home",
      destinos : resultado[0],
      testimonios : resultado [1]
    });
  } catch (error) {
    console.log(erro);
  }
};
const RenderNosotros = (req, res) => {
  res.render("nosotros", {
    //res.render, busca la pagina que se llame "viajes" en la carpeta public
    pagina: "nosotros",
  });
};
const RenderViajes = async (req, res) => {
  const destinos = await modeloViaje.findAll();
  res.render("viajes", {
    pagina: "Proximos viajes",
    destinos,
  });
};
const RenderTestimonio = async (req, res) => {
  const testimonios = await modeloTestimoniales.findAll();
  res.render("testimoniales", {
    pagina: "testimoniales",
    testimonios,
  });
};

const RenderDetalleViaje = async (req, res) => {
  const destino = req.params.slug;
  try {
    const resultado = await modeloViaje.findOne({ where: { slug: destino } }); //peticion a la base de datos campo : valor
    res.render("detallesViaje", {
      resultado,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  RenderInicio,
  RenderTestimonio,
  RenderViajes,
  RenderNosotros,
  RenderDetalleViaje,
};
