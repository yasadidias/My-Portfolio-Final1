

document.addEventListener("DOMContentLoaded", function () {
    
   
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 
            
      
            const name = contactForm.querySelector('input[placeholder="Your name"]').value;
            const email = contactForm.querySelector('input[placeholder="E mail"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea').value;

       
            if (name === '' || email === '' || message === '') {
                alert('Please fill in the required fields (Name, Email, and Message).');
                return;
            }

           
            alert(`Thank you ${name}! Your message has been sent successfully.`);
            
       
            contactForm.reset();
        });
    }

   
    const hireBtn = document.querySelector('.hire-btn');
    if (hireBtn) {
        hireBtn.addEventListener('click', function () {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    }

   
    const cvBtn = document.querySelector('.cv-btn');
    if (cvBtn) {
        cvBtn.addEventListener('click', function () {
            alert('Your CV is downloading...');
         
        });
    }

   
    const githubBtns = document.querySelectorAll('.github-btn');
    githubBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            alert('Opening GitHub Repository...');
           
        });
    });

});