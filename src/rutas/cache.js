const redis = require('redis');
const client = redis.createClient({
    socket:{
        port:6379,
        host:'172.17.0.3'
    }
});

const cache = async function (req, res, next) {
    let fecha = new Date();
    await client.connect();
    await client.set(fecha.toLocaleDateString() + ":" + fecha.getHours() + "-" +
    fecha.getMinutes() + "-" + fecha.getSeconds(), " - " + req.method + " " +
    req.route.path);
    await client.disconnect();
    next()
}
module.exports = cache;