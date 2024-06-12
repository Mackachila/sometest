
const registrationForm = document.getElementById("todaypayments");

registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

  const jobId = document.getElementById("jobId").value;
    
    // Validate email and password
  if (jobId == "") {
    document.getElementById("error-messages").style.color = "red";
    document.getElementById("error-messages").textContent = "Please copy and paste jobID";
    return;
  } else {
    document.getElementById("error-messages").textContent = "";
  }
             

  // If validation passes, you can submit the form
  document.getElementById("todaypayments").submit();

});




function showSection(sectionId) {
    //Hiding all seections
    document.getElementById('accountsecction').style.display = 'none';
    document.getElementById('taskssecction').style.display = 'none';
    document.getElementById('walletsecction').style.display = 'none';
    document.getElementById('depositsecction').style.display = 'none';
    document.getElementById('withdrawalsecction').style.display = 'none';
   
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  const yesterdayTable = document.getElementById('yesterday-table');
  const todayTable = document.getElementById('today-table');
  
  // Fetch today's pending payments
  fetch('/get-submitted-jobs')
    .then(response => response.json())
    .then(data => {
      displayPayments(data.todayPayments, todayTable);
      displayTotalSum(data.todayPayments, todayTable);
    })
    .catch(error => {
      console.error('Error fetching today\'s pending payments:', error);
    });

   
  function displayPayments(payments, table) {
    // Create a table row for each payment
    payments.forEach(payment => {
      const row = table.insertRow();
      row.insertCell(0).textContent = payment.jobid;
      row.insertCell(1).textContent = payment.description;
      row.insertCell(2).textContent = payment.answer;
      row.insertCell(3).textContent = payment.status;
      row.insertCell(3).textContent = payment.bider;
      
    });
  }

});

  

// review of withdrawals
document.addEventListener('DOMContentLoaded', function () {
  const paidButton = document.getElementById('paid-button');
  const rejectedButton = document.getElementById('shallocontent-button');
  const failedButton = document.getElementById('offtopic-button');

  paidButton.addEventListener('click', function () {
    updateWithdrawalStatus('Paid');
  });

  rejectedButton.addEventListener('click', function () {
    updateWithdrawalStatus('Rejected (Poorly done)');
  });

  failedButton.addEventListener('click', function () {
    updateWithdrawalStatus('Rejected (Off Topic)');
  });

  // Update the updateWithdrawalStatus function in your existing client-side JavaScript file
function updateWithdrawalStatus(status) {
  const jobId = document.getElementById('jobId').value;

  fetch('/update-jobreview-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jobId: jobId, status }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.success !== undefined && data.message !== undefined) {
        alert(data.message);
        // Optionally, you can perform additional actions on success
      } else {
        alert('That was a wrong code or the code has been used.');
      }
    })
    .catch(error => {
      console.error('Error updating withdrawal status:', error);
      alert('That is a wrong jobID or it has been used. Please be sure to copy the correct ID and never use one ID more than once');
    });
}
});

// handling the payment buttons
document.addEventListener('DOMContentLoaded', function () {
  const paidButton = document.getElementById('paid2-button');
  const rejectedButton = document.getElementById('rejected2-button');
  const failedButton = document.getElementById('failed2-button');

  paidButton.addEventListener('click', function () {
    updateWithdrawalStatus('Success');
  });

  rejectedButton.addEventListener('click', function () {
    updateWithdrawalStatus('Rejected (Refunded)');
  });

  failedButton.addEventListener('click', function () {
    updateWithdrawalStatus('Failed (Refunded)');
  });

  // Update the updateWithdrawalStatus function in your existing client-side JavaScript file
function updateWithdrawalStatus(status) {
  const jobId = document.getElementById('jobId').value;

  fetch('/update-withdrawal-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jobId: jobId, status }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.success !== undefined && data.message !== undefined) {
        alert(data.message);
        // Optionally, you can perform additional actions on success
      } else {
        alert('That was a wrong code or the code has been used.');
      }
    })
    .catch(error => {
      console.error('Error updating withdrawal status:', error);
      alert('That is a wrong Transaction ID or it has been used. Please be sure to copy the correct ID and never use one ID more than once');
    });
}
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('Fetching username from server...');
  // Fetch the username from the session
  fetch('/get-musername')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched username from server:', data.username );
      const username = data.username;
      
      if (username) {
        // Display the username on the account page
        document.getElementById('username-display3').textContent = ` ${username}`;
        
      } else {
        // Redirect to the login page if the username is not available and not already on the login page
        if (window.location.pathname !== '/mlogin3') {
          window.location.href = '/mlogin3';
        }
      }
    })
    .catch(error => {
      console.error('Error fetching username:', error);
      // Handle the error and maybe redirect to the login page
    });
});

// Add this code to your existing account.js file
const logoutButton = document.getElementById('logout-button3');

logoutButton.addEventListener('click', async () => {
  // Display a confirmation dialog
  const confirmLogout = window.confirm('Are you sure you want to logout?');

  if (confirmLogout) {
    // If the user confirms, make a request to the logout route on the server
    const response = await fetch('/logout', { method: 'GET' });

    if (response.ok) {
      // If the logout was successful, redirect the user to the login page
      window.location.href = '/mlogin3';
    } else {
      // Handle any errors that occurred during logout
      console.error('Error during logout:', response.statusText);
      // You can display an error message or handle it in another way
    }
  }
  // If the user cancels, do nothing
});









  