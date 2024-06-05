import { createResponseObj } from "../../responseHandler/responseHandler.js";

export const firstApi = async (req, reply) => {
  let responseObject = { foo: "bar" };

  createResponseObj(
    responseObject,
    { successMessage: "Api success", errorMessage: "Api failure" },
    req.headers.transactionId,
    reply
  );
};
 
f