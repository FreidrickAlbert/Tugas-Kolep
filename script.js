// Simple form validation example for the contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Semua field harus diisi!');
    } else {
      alert('Pesan terkirim!');
    }
  });
  