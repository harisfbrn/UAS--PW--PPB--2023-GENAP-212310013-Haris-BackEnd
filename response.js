const response = (statusCode, datas, message, res) => {
    res.json({
        statusCode,
        payload: datas,
        message,
        metadata: {
            prev: " ",
            next: "",
            current: ""
        }
    })
}

export default response;