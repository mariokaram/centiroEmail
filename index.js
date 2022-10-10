const express = require("express");
const nodemailer = require("nodemailer");

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
app.use(cors());

app.get("/api/email", async (req, res, next) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "apikey", // generated ethereal user
      pass: "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", // generated ethereal password
    },
  });

  await transporter.sendMail({
    from: "mariokaram257@gmail.com", // sender address
    to: req.query.emailName, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `
    
    
    <html>

    <head>
      <style>
        body {
          margin: 2rem;
          padding: 0;
          display: flex;
          justify-content: center;
        }
  
        .container {
          padding: 2rem;
          max-width: 1000px;
          width: 500px;
          border: 1px solid black;
  
        }
  
        .logo {
          margin-bottom: 1rem;
        }
  
  
        .orderDetails {
          text-align: center;
  
        }
  
  
        .orderTitle {
          font-size: 1.4rem;
          color: #cc6600;
          margin: 1rem 0;
        }
  
        .orderContainer {
  
          margin-top: 2rem;
  
        }
  
        .orderDesc {
          line-height: 20px
        }
  
        .orderSummary {
          background: #EFEFEF;
          border-top: 2px solid black;
          padding:2rem;
          margin-top:2rem;
          text-align:center;
  
        }
  
  
        .img {
  
          height: 30px;
          width: 150px;
  
        }
  
        .track {
          height: 15px;
          width:30%;
          padding: 1rem;
          background: #ffa723;
          text-align:center;
          border-radius: 12px;
          cursor: pointer;
          margin:1rem auto;
        }
        .price{
          margin-top:0.5rem
        }
  
        .award {
          max-width: 100%;
          height: auto;
          margin-top: 1rem;
          display: flex;
          justify-content: center;
  
        }
  
        .awardImg {
  
          width: 350px;
          height: 150px;
          margin-bottom: 0.5rem
        }
  
        .news {
          margin-top: 1rem;
          text-align: center;
          font-size: 1.2rem;
          font-weight: bold;
          text-decoration-line: underline;
        }
  
      </style>
    </head>
  
    <body>
  
      <div class='container'>
  
        <div class='orderDetails'>
  
          <div class='logo'><img class='img' src="https://insights.centiro.com/hs-fs/hubfs/centiro_logo_registrated_rgb_pos-1.png?width=200&height=43&name=centiro_logo_registrated_rgb_pos-1.png"> </div>
          <div class='shippingNumber'>Shipping Confirmation: <strong>1234556546</strong></div>
  
  
  
        </div>
  
        <div class='orderContainer'>
  
          <div class='orderTitle'>Hello Mario</div>
          <div class='orderDesc'>Thank you for shopping with us. We thought you'd like to know that your item has shipped, and that this completes your order. Your order is on its way, and can no longer be changed. If you need to return an item from this shipment or manage other orders, please visit Your Orders on Centiro</div>
  
  
        </div>
  
        <div class='orderSummary'>
  
          <div class='firstColumn'>
            <div class='exptectedDate'>
              Your guaranteed delivery date is:
              Tuesday, <strong>October 4</strong>
            </div>
            <div class='track'>
              Track your package
            </div>
  
          </div>
  
  
  
          <div class='secondColumn'>
            <div class='orderName'>
              Your order was sent to: <strong>Mario</strong>
            </div>
            <div class='address'>
            Address: Laval, Quebec
            </div>
            <div class='price'>
              Order total: <strong>CDN$ 27.59</strong>
            </div>
  
          </div>
  
  
  
  
  
  
        </div>
  
  
        <div class='news'>Latest news</div>
        <div class='award'>
          <div style="text-align:center">
            <img class='awardImg' src='https://insights.centiro.com/hubfs/SIQ_2021_Bloggbild-1.jpg'>
            <div>
              The Award for Swedish Quality Goes to Centiro
              The award for Swedish Quality is the most prestigious national quality accolade and this year it is...
            </div>
  
          </div>
  
  
        </div>
  
  
      </div>
  
    </body>
  
  </html>
  
    
    `, // html body
  });

  res.json("success");
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
