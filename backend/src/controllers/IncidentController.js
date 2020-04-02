const connection  = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async create(request, response) {
        try {
            const { title, description, value } = request.body;
            const ong_id = request.headers.authorization;

            const [id] = await connection('incidents').insert({
                title, 
                description, 
                value,
                ong_id
            });

            request.headers;

    
             return response.json({ id });
    
        } catch (error) {
            return response.json({ error : {
                message: error.message
            } });
        }
    },

    async index (request, response) {
        try {
            const { page = 1 } = request.query;

            const [count] = await connection('incidents')
            .count();

            const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page -1) * 5)
            .select ([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);
    
            response.header('X-Total-Count', count['count(*)']);
            response.header('X-Total-Pages', 5);

             return response.json(incidents);
        } catch (error) {
            return response.json({ error : {
                message: error.message
            } });
        }
        
    },

    async index2 (request, response) {
        try {
            const { page = 1 } = request.query;

            const [count] = await connection('incidents')
            .count();

            const incidents = await connection('incidents')
            .limit(5)
            .offset((page -1) * 5)
            .select ('*');
    
            response.header('X-Total-Count', count['count(*)']);
            response.header('X-Total-Pages', 5);

             return response.json(incidents);
        } catch (error) {
            return response.json({ error : {
                message: error.message
            } });
        }
        
    },

    async delete (request, response) {
        try {
            const { id } = request.params;
            const ong_id = request.headers.authorization;
            
            const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

            if(!incident.ong_id){
                // autorizado
                return response.status(401).json({ error: 'Operation not permited.'});
            } else if(incident.ong_id !== ong_id){
                // autorizado
                return response.status(404).json({ error: 'Data does not exist.'});
            }

            await connection('incidents').where('id', id).delete();

            // sem conteúdo
             return response.status(204).send();

        } catch (error) {
            return response.json({ error : {
                message: error.message
            } });
        }
        
    }

};
