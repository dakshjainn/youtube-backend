const asyncHandler = (fn) => {
    (req, res, next) => {
        // Promise.resolve(fn(req, res, next)).catch(next);
        Promise.resolve(fn(req, res, next)).catch((error) => next(error)) // this is same as above line, explicitly specifies the error parameter in the .catch block and passes it to next;
    }
}

export {asyncHandler};

/* using try catch

// const asyncHandler = () => {}
// const asyncHandler = (fn) => {() => {}}
// const asyncHandler = (fn) => async{() => {}}
// const asyncHandler = (fn) => async () => {}

const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false, 
            message: error.message || "Something went wrong"
        })
    }
}
*/