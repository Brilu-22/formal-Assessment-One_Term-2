let register = [];

addAccount = () => {
    let first = document.getElementById("first").value;
    let email = document.getElementById("email").value;
    let number = +document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let password = document.getElementById("password").value;

    let newsletter = document.getElementById("Send");

        for(let i=0; i < newsletter.length; i++){
            if(newsletter[i].checked){
                register.push({

                    first: first,
                    email: email,
                    number: number,
                    subject: subject,
                });
                alert("Welcome" + first + " ! " + " Thank you for your interest in " + subject + " ! " + " We will contact you via email provided :  " + " or alternatively on the phone number : " + number + "." );
            } else {
                alert("Well,well,well...why don't you want to sign up for our newsletter...you don't seem to that interested " + first + "!" + " if you want to sign up, you better CHECK that newsletter box! ");
            }
        
            console.log(register);

        }
   
};

