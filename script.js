$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software_developer","Web_developer" ,"SQA_developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Software_developer","Web_developer","SQA_developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
     let name =document.querySelector("#name").value;
     let email =document.querySelector("#email").value;
     let sub =document.querySelector("#subject").value;
     let mess =document.querySelector("#message").value;
    console.log(name, email, sub,mess);
  
   // saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  
    sendmail(name,email,sub,mess)
  }

  function sendmail(name,email,sub,mess)
{

     
            var Body = '🤦‍♂️&nbsp;&nbsp;<b>Name : &nbsp;</b>' + name + '<br>✉️&nbsp;&nbsp;<b>Email : &nbsp;</b>' + email + '<br>📝<b>Subject : &nbsp;</b>' + sub+`<br>📝<b>Message : &nbsp;</b>`+mess;
            Email.send({
              SecureToken : "2c749734-ab94-4e7a-a69a-83edfe05470b",
              To : 'muhammadumair2008b@aptechgdn.net',
              From : "ui28212@gmail.com",
              Subject : "Portfolio_email_message",
              Body : Body
          }).then(
            message =>
            {
            if(message){
               // alert('Email Send Successfully....!!!');
               swal({
                title: "Email Send Successfully....!!!",
                text: "You clicked the close button!",
                icon: "success",
                button: "Close!",
              });
            }
            
             else{
                swal({
                    title: "Data not inserted....!!!",
                    text: "Please Try Again!",
                    icon: "error",
                    button: "Close!",
                  });
               
                // alert('Data Not Inserted');
             }
            }
          );

               // 2c749734-ab94-4e7a-a69a-83edfe05470b
           
  
}


