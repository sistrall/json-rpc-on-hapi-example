module.exports = (methods) => ({ server, payload }, reply) => {
    const { method, params, id } = JSON.parse(payload);

    reply({
        "jsonrpc": "2.0", 
        id,
        "result": methods[method].apply(methods[method], params)
    });
};