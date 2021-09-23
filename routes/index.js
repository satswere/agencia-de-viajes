import Express from "express";
import { RenderInicio, RenderNosotros, RenderTestimonio, RenderViajes , RenderDetalleViaje} from "../Controllers/paginasController.js";
import { GuardarTestimonial } from "../Controllers/testimonialController.js";
const router = Express.Router();

router.get("/", RenderInicio);

router.get("/nosotros", RenderNosotros);

router.get("/viajes", RenderViajes);

router.get("/viajes/:slug", RenderDetalleViaje);

router.get("/testimoniales", RenderTestimonio);

router.post("/testimoniales", GuardarTestimonial);

export default router;
