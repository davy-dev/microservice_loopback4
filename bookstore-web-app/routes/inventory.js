const { Router } = require("express");
const fetch = require("node-fetch");
const router = Router();

router.get("/", function (req, res) {
    fetch("http://172.17.0.7:9001/inventory/books")
        .then((res) => res.json())
        .then((json) =>
            res.render("inventory", {
                books: json,
            })
        );
});
router.post("/add", function (req, res) {
    console.log(req.body);
    fetch("http://172.17.0.7:9001/inventory/books", {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: { "Content-Type": "application/json" },
    })
        .then(res.redirect("/inventory"))
        .catch((err) => {
            throw err;
        });
});
module.exports = router;