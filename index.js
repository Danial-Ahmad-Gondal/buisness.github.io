const start = document.getElementById('open');
const close = document.getElementById('close');
const sheet =  document.getElementById('list');
//Function for the hamburger menu//
start.addEventListener("click" , () =>{
    start.style.display = 'none';
    close.style.display = 'block';
    sheet.style.display = 'block';
});
close.addEventListener("click" , () =>{
    start.style.display = 'block';
    close.style.display = 'none';
    sheet.style.display = 'none';
});

const button =  document.getElementById('joining');
const form = document.getElementById('enquiry-popup');
const end = document.getElementById('close-it');
const done = document.getElementById('submit');
button.addEventListener("click" , () =>{
    form.style.display = 'block';
})
end.addEventListener("click" , () =>{
    form.style.display = 'none';
});
done.addEventListener("click" , () =>{
    alert("Your details have been saved successfully.You will get a confirmation message shortly.Thanks")
});


function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);

    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

const button_1 =  document.getElementById('order');
const form_1 = document.getElementById('booking-popup');
const end_1 = document.getElementById('close-this');
const done_1 = document.getElementById('cleared');
button_1.addEventListener("click" , () =>{
    form_1.style.display = 'block';
})
end_1.addEventListener("click" , () =>{
    form_1.style.display = 'none';
});
done_1.addEventListener("click" , () =>{
    alert("Your details have been saved successfully.You will get a confirmation message shortly.Thanks")
});

const button_2 =  document.getElementById('hire');
const form_2 = document.getElementById('hiring-popup');
const end_2 = document.getElementById('close-that');
const done_2 = document.getElementById('finished');
button_2.addEventListener("click" , () =>{
    form_2.style.display = 'block';
})
end_2.addEventListener("click" , () =>{
    form_2.style.display = 'none';
});
done_2.addEventListener("click" , () =>{
    alert("Your details have been saved successfully.You will get a confirmation message shortly.Thanks");
});

const button_3 =  document.getElementById('pick');
const form_3 = document.getElementById('hiring-popup-1');
const end_3 = document.getElementById('close-that-1');
const done_3 = document.getElementById('finished-1');
button_3.addEventListener("click" , () =>{
    form_3.style.display = 'block';
})
end_3.addEventListener("click" , () =>{
    form_3.style.display = 'none';
});
done_3.addEventListener("click" , () =>{
    alert("Your details have been saved successfully.You will get a confirmation message shortly.Thanks");
});