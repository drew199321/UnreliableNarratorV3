const io = require('socket.io')(5000)

io.on('connection', socket => {
    const id = socket.handshake.query.id
    console.log('connected to new User:')
    console.log(id)
    socket.join(id)

    socket.on('send-message', ({ recipients, text}) => {
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r=>r!==recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('recieve-message', {
                recipients: newRecipients, sender:id, text
            })
        })
    })
})