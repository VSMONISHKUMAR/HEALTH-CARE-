
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    
    if (username && password) {
        alert("Registration Successful");
    } else {
        alert("Please fill in all fields");
    }
});


document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let date = document.getElementById("date").value;

    if (date) {
        alert("Appointment booked for: " + date);
    } else {
        alert("Please select a date");
    }
});


function startTelemedicine() {
    alert("Starting telemedicine consultation...");
   
}
