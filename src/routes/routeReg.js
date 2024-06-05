import { reponseSchema } from "../validations/newTest/query.js";
import { firstApi } from "../controllers/newTest/query.js";

export const Routes = [
  {
    method: "GET",
    url: "/client/test",
    schema: reponseSchema,
    handler: firstApi,
  },
];
