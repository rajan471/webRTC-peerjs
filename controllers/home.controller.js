let caller = (req, res) => {
    res.render('home',{roomid: ''});
};

let recipient = (req, res) => {
    let roomid = req.params.roomid;
    res.render('home', {roomid});
};

module.exports = {
    caller,
    recipient
};