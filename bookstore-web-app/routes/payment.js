const { Router } = require("express");
const fetch = require("node-fetch");
const router = Router();

router.get("/", function (req, res) {
    fetch("http://172.17.0.7:9001/payment/payments")
        .then((res) => res.json())
        .then((json) =>
            res.render("payment", {
                payments: json,
            })
        );
});
router.post("/add", function (req, res) {
    req.body.amount = Number(req.body.amount);
    console.log(req.body);
    fetch("http://172.17.0.7:9001/payment/payments", {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: { "Content-Type": "application/json" },
    })
        .then(res.redirect("/payment"))
        .catch((err) => {
            throw err;
        });
});
module.exports = router;