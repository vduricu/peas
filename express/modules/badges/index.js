function configure(app, socket) {
    var Badge = app.model.Badge;

    socket.on('app.badges.get', (data) => {
        console.log(data);
        Badge.filter({
                userID: ""
            })
            .getJoin({
                activity: true
            })
            .run()
            .then((result) => {
                socket.emit('app.badges.get.response', result);
            });
    });
}

module.exports = configure;
