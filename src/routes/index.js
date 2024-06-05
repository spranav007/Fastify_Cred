// Import our Controllers
import { Routes } from "./routeReg.js";

export default async function (fastify) {
	for (let i = 0; i < Routes.length; i++) {
		fastify.route(Routes[i]);
	}
}
