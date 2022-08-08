class ApiResponse
{
    constructor(status,data,msg)
    {
        this.status = status
        this.data = data 
        this.msg = msg
    }    
}

module.exports = ApiResponse