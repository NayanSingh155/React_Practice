const nodemailer=require("nodemailer")
const hbs=require("handlebars")
const transport=nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
        user:"srftg4drbh5jyxcf@ethereal.email",
        pass:"VZe3FM7vSVfUq4wZev"
    }
})
const content=`<div>
<h1>Hello, {{name}}</h1>
<p>How Are you?</p>
</div>
`
const template=hbs.compile(content)
transport.sendMail({
    from:"from@example.com",
    to:"to@example.com",
    subject:"Send mail",
    html:template({name:"Muskan"})
    // text:"Hello world how are you?"
}).then(console.log)