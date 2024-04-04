document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const courseNameInput = document.getElementById('courseName');
    const personalMessageInput = document.getElementById('personalMessage');

    const studentName = studentNameInput.value;
    const courseName = courseNameInput.value ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
    const personalMessage = personalMessageInput.value;

    if (studentName.trim() === '' || courseName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // 🚨 Generate certificate content dynamically
    certificateContent.innerHTML = `
      <h2>Certificate of Achievement 🏅</h2>
      <p>This is to certify that</p>
      <h3>${studentName} 🎓</h3>
      <p>has almost completed the</p>
      <h4>${courseName} Course 📘</h4>
      <p>${personalMessage} 📝</p>
      <img src="logo.png" alt="Logo" style="max-width: 50%;">
      <p>I am the greatest 🌟</p>
    `;

    //  Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    courseNameInput.value = '';
    personalMessageInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
