const sgmail=require('@sendgrid/mail')
const API_KEY='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';
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
  