setInterval(function () {
    $("#ortalStrong").toggleClass("hide-text");
}, 3000);


setInterval(function () {
    // the dollar sign is like getelementbyid, and show the text
    $("#webStrong").toggleClass("show-text");
}, 3000);


var now = new Date().getHours();
console.log(now);
switch (now) {
    case 5: case 6: case 7: case 8: case 9: case 10: case 11:
        document.getElementById("ortalStrong").innerHTML = "good morning";
        break;

    case 12: case 13: case 14: case 15: case 16: case 17:
        document.getElementById("ortalStrong").innerHTML = "good afternoon";
        break;
    
    case 18: case 19: case 20: case 21:
        document.getElementById("ortalStrong").innerHTML = "good evening";
        break;
    default:
        document.getElementById("ortalStrong").innerHTML = "good night";
        console.log(now);
}

// jQuery('#firstLabel').fadeOut(100);
// $('#firstLabel').fadeIn(4000);


// $('input').focus(function () {

//     $('input').removeClass('error');


// });

$('#send').click(function () {
    $('input').removeClass('error');
    $("#messageForTheUser").html('');

    var firstName = $.trim($('#firstName').val());
    var lastName = $.trim($('#lastName').val());
    var email = $.trim($('#emailAddress').val());
    var phone = $.trim($('#phoneNumber').val());
    var userText = $.trim($('#textArea').val());
    //put values into a easy varibales
    var valid = true;


    var textReg = /^[A-Za-zא-ת]+$/
    var emailReg = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/
    var phoneReg = /^([0-9])+$/
    //this is what we need to approve
    console.log(firstName);
    if (firstName.length < 2 || firstName.length > 30 || !textReg.test(firstName)) {
        $('#firstName').removeClass('input');
        $('#firstName').addClass('error');
        $('#firstName').val('');
        $('#firstName').attr('placeholder', '  *Enter your first Name');
        valid = false;
    }
    if (lastName.length < 2 || lastName.length > 30 || !textReg.test(lastName)) {
        $('#lastName').removeClass('input');
        $('#lastName').addClass('error');
        $('#lastName').val('');
        $('#lastName').attr('placeholder', '  *Enter your last Name');
        valid = false;
    }
    if (email.length < 5 || email.length > 40 || !emailReg.test(email)) {
        $('#emailAddress').removeClass('input');
        $('#emailAddress').addClass('error');
        $('#emailAddress').val('');
        $('#emailAddress').attr('placeholder', '  *Enter your valid email');
        valid = false;
    }
    if (phone.length < 9 || phone.length > 13 || !phoneReg.test(phone)) {
        $('#phoneNumber').removeClass('input');
        $('#phoneNumber').addClass('error');
        $('#phoneNumber').val('');
        $('#phoneNumber').attr('placeholder', '  *Enter your phone');
        valid = false;
    }
    if (userText.length < 8) {  //I need to find reg test for text area
        $('#userMsg').removeClass('msg');
        $('#textArea').addClass('error');
        $('#textArea').val('');
        $('#textArea').attr('placeholder', ' enter a valid text more than 8 words');
        valid = false;
    }

    if (valid) {
        $("#messageForTheUser").html('<div class="alert alert-success" role="alert">the form has been sent successfully</div>');
        setTimeout(function () {
            $("#myForm").submit();
        }, 5000);

    }

            

});
