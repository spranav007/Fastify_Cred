export const createResponseObj = (
  responseObj,
  descriptor,
  transactionId,
  reply
) => {
  let responseObject =
    !responseObj || typeof responseObj !== "object"
      ? { status: 400, responseData: { message: "NO RESPONSE" } }
      : responseObj;
  let response =
    typeof responseObject["toObject"] === "function"
      ? responseObject.toObject()
      : responseObject;
  if (typeof response.status !== "number")
    response = {
      status: 200,
      responseData: { message: "No message", response: responseObj },
    };

  response.transactionId = transactionId;

  let errorCode = 400;

  let sucessCode = 200;

  let successMessage =
    typeof descriptor.successReponse === "undefined"
      ? "success"
      : descriptor.successReponse;
  let errorMessage =
    typeof descriptor.failureReponse === "undefined"
      ? "failed"
      : descriptor.failureReponse;

  if (typeof response.responseData !== "object") response.responseData = {};

  if (response.status < 300 && descriptor) {
    response.responseData.message = successMessage;
    response.responseData.sucessCode = sucessCode;
  }

  if (response.status >= 300 && descriptor) {
    response.responseData.message = errorMessage;
    response.responseData.errorCode = errorCode;
  }

  console.log(response);

  reply.code(response.status).send(response);
};
