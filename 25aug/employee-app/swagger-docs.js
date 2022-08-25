/**
 * @swagger
 * /health:
 *      get:
 *          description: Health Checkup
 *          responses:
 *              200:
 *                  description : Server is Running
 */

/**
 * @swagger
 * /list:
 *      get:
 *          description: List all Employees
 *          responses:
 *              200:
 *                  description : Employee List
 */

/**
 * @swagger
 * /get/{id}:
 *      post:
 *          description: Get Employee By Id
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                description: Employee Id 
 *          responses:
 *              200:
 *                  description : Employee Info
 *                      
 */