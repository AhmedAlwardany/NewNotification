const sgmail=require('@sendgrid/mail')
sgmail.setApiKey(API_KEY)
const message={
    to:'omar.elbarbary@student.giu-uni.de',
    from:'hey.baraa@gmail.com',
    subject:'Order Details',
    text:'This is your order details'
}
sgmail
  .send(message)
  .then((response) => console.log('Email Sent'))
  .catch((error) => console.log(error.message));
  
