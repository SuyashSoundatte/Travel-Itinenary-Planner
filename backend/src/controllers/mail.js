//connect to mail server
// send mail
// https://www.mailjet.com/pricing/

function sendMail(from, to, msg) {
    const mailjet = require("node-mailjet").connect(
        process.env.MJ_API_KEY,
        process.env.MJ_SECRET_KEY
    );
    const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: {
                    Email: "shreyashgalgale000@gmail.com",
                    Name: "Mailjet Pilot",
                },
                To: [
                    {
                        Email: "shreyasgalgale019@gmail.com",
                        Name: "shreyash galgale",
                    },
                ],
                Subject: "Your email flight plan!",
                TextPart:
                    "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                HTMLPart:
                    '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
            },
        ],
    });
    request
        .then((result) => {
            console.log(result.body);
        })
        .catch((err) => {
            console.log(err.statusCode);
        });
}

sendMail("from", "to", "msg");
