const amqp = require('amqplib');

const uri = 'amqp://localgost';

amqp.connect(uri)
    .then(conn => {
        console.log("Conexão estabelecida com o RabbitMQ");

        conn.close();
    })
    .cath(err => {
        console.log("Erro ao conectar", err)
    });


conn.createChannel()
    .then(ch => {
        console.log('Canal criado')

        ch.close();
    })
    .cath(err => {
        console.log("Erro ao criar o canal.", err)
    });



const queueName = 'Minha fila';

const message = 'Minha mensagem';

/* para enviar mensagem! */
ch.assertQueue(queueName)
    .then(() => {
        return ch.sendToQueue(queueName, Buffer.from(message));
    })
    .then(() => {
        console.log('Mensagem enviada:', message);
    })
    .cath(err => {
        console.log('Erro ao enviar mensagem!', err)
    });


    /* Para receber mensagem! */

    const queueRecive

ch.assertQueue(queueName)
.then(()=> { 
    ch.consume(queueRecive, msg =>{
        console.log('Mensagem recebida:', msg.content.toString());
        ch.ack(msg)
    }).
})
.cath(err => { 
    console.log("Erro ao construir a fila", err)
});



