const connection = require('../database/connections');
const crypto = require('crypto');

module.exports = {


    async index(request, response) {
        try {
            const ong_id = request.headers.authorization;

            const incidents = await connection('incidents')
                .where('ong_id', ong_id)
                .select('*');

            return response.json(incidents);
        } catch (error) {
            return response.json({
                error: {
                    message: error.message
                }
            });
        }

    }

};
