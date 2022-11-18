import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err.message);

    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong. Please try after sometime"
    }
    if(err.name === 'ValidationError') {
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        defaultError.msg = Object.values(err.errors).map(item => item.message).join(',');
    }
    // res.status(defaultError.statusCode).json({msg: err});
        res.status(defaultError.statusCode).json({msg: defaultError.msg});




}

export default errorHandlerMiddleware;