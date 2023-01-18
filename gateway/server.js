const gateway = require("fast-gateway");

//let uri_api = "/api";
const port = 9001;
const server = gateway({
    routes: [
        {
            prefix: "/order",
            target: "http://172.17.0.5:3001/",
            hooks: {}
        },
        {
            prefix: "/payment",
            target: "http://172.17.0.6:3002/",
            hooks: {}
        },
        {
            prefix: "/inventory",
            target: "http://172.17.0.3:3000/",
            hooks: {}
        }
    ]
});

server.get('/mytesting', (req, res) => {
    res.send("Gateway is ok");
})

server.start(port).then(server => {
    console.log("Gateway is running on " + port);
})