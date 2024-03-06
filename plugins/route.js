async function routes(fastify, options) {
        fastify.get('/', function (request, reply) {
            reply.send({ hello: 'world' })
        })
        fastify.get('/business/:id', function (request, reply) {
            fastify.mysql.query(
                'SELECT * FROM business WHERE id = ?',
                [request.params.id],
                function (err, results, fields) {
                    if (err) throw err
                    reply.send(results)
                }
            )            
        })

        fastify.get('/allbusiness', function (request, reply) {            
            fastify.mysql.query(
                'SELECT * FROM business ',
                function (err, results, fields) {
                    if (err) throw err
                    reply.send(results)
                }
            )            
        })

       
        fastify.post('/business', function (request, reply) {      
            const { name, type, phone } = request.body;      
            fastify.mysql.query(
                'INSERT INTO business (name, type, phone) VALUES (?, ?, ?)',
                [name, type, phone],
                function (err, results, fields) {
                    if (err) throw err
                    reply.code(201).send({ message: `Item added with ID: ${results.insertId}` });
                }
            )            
        })

        fastify.put('/business/:id', function (request, reply) {      
            const { name, type, phone } = request.body;      
            fastify.mysql.query(
                'UPDATE business SET name=?, type=?, phone=? WHERE id=?',
                [name, type, phone, request.params.id],
                function (err, results, fields) {
                    if (err) throw err
                    reply.code(201).send({ message: `Item UPdate with ID: ${results.insertId}` });
                }
            )            
        })
    }

    
 module.exports = routes