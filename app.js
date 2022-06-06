import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5005;
const app = express();
const sendEmail = require("../notfication/sendEmail")
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

app.post("/notification", (req, res) => {

  try{
  const { name,email,orderId,price,adress} = req.body;

  const from = "hey.baraa@gmail.com";
  const to = email;

  const subject = "Order accepted";

  const output = `
    <p>Hey ${name}, Thank You for your Order !</p>
    <h3>Order details Details</h3>
    <ul>
      <li>Order ID: ${orderId}</li>
      <li>Adress: ${adress}</li>
      <li>Total: ${price}</li>
    </ul>
  `;

  sendEmail(to, from, subject, output);
  res.status(200);
    }catch (e) {
    res.status(400).json({message: e.message});
}
});
