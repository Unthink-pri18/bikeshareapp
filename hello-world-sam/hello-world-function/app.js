exports.lambdaHandler = async (event, context) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello, World! Today'),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return response;
};
