function enrollStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
  
    const enrolledStudents = document.getElementById("enrolledStudents");
    const studentData = document.createElement("div");
  
    studentData.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Course:</strong> ${course}</p>
    `;
  
    enrolledStudents.appendChild(studentData);
  
    return false; 
  }
  