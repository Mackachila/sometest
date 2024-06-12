
function showcert(){
document.getElementById('resultsTable').style.display = 'block';
}

function showinvitation(){
  const overlay3 = document.getElementById('overlay3');
  const copylink = document.getElementById("copylink");
  copylink.style.display = "block";
  overlay3.style.display = "block";
  
}

function hideinvitation(){
  const overlay3 = document.getElementById('overlay3');
  const copylink = document.getElementById("copylink");
  copylink.style.display = "none";
  overlay3.style.display = "none";
  
}

  function certupdate() {
  //*- console.log('Fetching user details');
   // Fetch the username from the session
   fetch('/get-username')
     .then(response => response.json())
     .then(data => {
  //     console.log('Fetched username from server:', data.username, data.currentAccount, data.accountBallance, data.accountPhonenumber, data.accountEmail, data.invitationLink );
const username = data.username;

const accountcertnumber = data.accountcertnumber;
       if (username) {
             // Displaying the user details on his account page
document.getElementById('username-display').textContent = ` ${username}`;
document.getElementById('account_certnumber').textContent = ` ${accountcertnumber}`;
document.getElementById("cert-number").textContent = ` ${accountcertnumber}`;


       } else {
         // Redirect to the login page if the username is not available and not already on the login page
         if (window.location.pathname !== '/signin') {
           window.location.href = '/signin';
         }
       }
     })
     .catch(error => {
       console.error('Error fetching username:', error);
       // Handle the error and maybe redirect to the login page
     });
 };

        document.addEventListener('DOMContentLoaded', function () {
         //*- console.log('Fetching user details');
          // Fetch the username from the session
          fetch('/get-username')
            .then(response => response.json())
            .then(data => {
         //     console.log('Fetched username from server:', data.username, data.currentAccount, data.accountBallance, data.accountPhonenumber, data.accountEmail, data.invitationLink );
      const username = data.username;
      //const accountType = data.accountType;
      const currentAccount = data.currentAccount;
      const accountBallance = data.accountBallance;
      const accountPhonenumber = data.accountPhonenumber;
      const accountEmail = data.accountEmail;
      const accountMembership = data.accountMembership;
      const accountcertnumber = data.accountcertnumber;
      const accountPackage = data.accountPackage;
      const accountPaymentmethod = data.accountPaymentmethod;
      const accountJobs = data.accountJobs;
      //const accountPaymentdetails = data.accountPaymentdetails;
     const invitationLink = data.invitationLink;
        
              if (username) {
                    // Displaying the user details on his account page
       document.getElementById('username-display').textContent = ` ${username}`;
      document.getElementById('account_membership').textContent = ` ${accountMembership}`;
      document.getElementById('account_certnumber').textContent = ` ${accountcertnumber}`;
      document.getElementById('account_package').textContent = `${accountPackage}`;
        document.getElementById('account_ballance').textContent = `KES ${accountBallance}`;
        document.getElementById('account_phonenumber').textContent = `${accountPhonenumber}`;
        document.getElementById('account_email').textContent = `${accountEmail}`;
        document.getElementById('account_paymentmethod').textContent = `${accountPaymentmethod}`;
        document.getElementById('account_jobs').textContent = `${accountJobs}`;
        document.getElementById('invitelink').value = `${invitationLink}`;
       
       // document.getElementById('account_paymentdetails').textContent = `${accountPaymentdetails}`;
        //document.getElementById('account_email').textContent = `${accountEmail}`;
        

         // Slicing and displaying accountEmail
         //const slicedEmail = accountEmail.slice(0, 2) + '*'.repeat(accountEmail.length - 14) + accountEmail.slice(-12);
         //document.getElementById('account_email').textContent = slicedEmail;
         //document.getElementById('account_email').setAttribute('data-original-value', accountEmail);
        
              } else {
                // Redirect to the login page if the username is not available and not already on the login page
                if (window.location.pathname !== '/signin') {
                  window.location.href = '/signin';
                }
              }
            })
            .catch(error => {
              console.error('Error fetching username:', error);
              // Handle the error and maybe redirect to the login page
            });
        });

//fetching payment account
        document.addEventListener('DOMContentLoaded', function () {
        //  console.log('Fetching current account');
          // Fetch the username from the session
          fetch('/get-payment-accounts')
            .then(response => response.json())
            .then(data => {
             //console.log('Fetched username from server:', data.phonenumber, data.fullname);
      const phonenumber = data.phonenumber;
      const fullname = data.fullname;
                // Displaying the user details on his account page
        document.getElementById('accountphone').textContent = phonenumber;
        document.getElementById('accountname').textContent = fullname;
        //document.getElementById('silveraccountphone').textContent = phonenumber;
       // document.getElementById('silveraccountname').textContent = fullname;
        document.getElementById('goldaccountphone').textContent = phonenumber;
        document.getElementById('goldaccountname').textContent = fullname;
        document.getElementById('aluminiumaccountphone').textContent = phonenumber;
        document.getElementById('aluminiumaccountname').textContent = fullname;
        document.getElementById('bronzeaccountphone').textContent = phonenumber;
        document.getElementById('bronzeaccountname').textContent = fullname;
        document.getElementById('diamondaccountphone').textContent = phonenumber;
        document.getElementById('diamondaccountname').textContent = fullname;
        document.getElementById('supergoldaccountphone').textContent = phonenumber;
        document.getElementById('supergoldaccountname').textContent = fullname;
        document.getElementById('superaluminiumaccountphone').textContent = phonenumber;
        document.getElementById('superaluminiumaccountname').textContent = fullname;
        document.getElementById('superbronzeaccountphone').textContent = phonenumber;
        document.getElementById('superbronzeaccountname').textContent = fullname;
        document.getElementById('superdiamondaccountphone').textContent = phonenumber;
        document.getElementById('superdiamondaccountname').textContent = fullname;
        document.getElementById('freedomaccountphone').textContent = phonenumber;
        document.getElementById('freedomaccountname').textContent = fullname;
        
        
            })
            .catch(error => {
              console.error('Error fetching current account:', error);
              // Handle the error and maybe redirect to the login page
            });
        });


//fetching user deposit transactions on page reloade
document.addEventListener('DOMContentLoaded', function () {
  //console.log('Fetching user transactions');
  
  fetch('/get-user-transactions')
    .then(response => response.json())
    .then(data => {
     // console.log('Fetched transactions:', data.transactions);

      // Fetching an aray of data from the server
      const transactions = data.transactions;

      // Displaying data on a table and appending the rows
      const transactionsBody = document.getElementById('transactions-body');
      if (transactions && transactions.length > 0) {
        // Looping through transactions and appending rows
        transactions.forEach(transaction => {
          const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const date = new Date(transaction.depositDate);
        const options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        dateCell.textContent = date.toLocaleString('en-US', options);
        row.appendChild(dateCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = transaction.depositAmount;
        row.appendChild(amountCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = transaction.depositStatus;
        row.appendChild(statusCell);

        transactionsBody.appendChild(row);
      });

    } else {
      // No transactions, hide the table and display a message
      document.getElementById('transactions-table').style.display = 'none';
      document.getElementById('notransactions').textContent = ` Your deposit history will show here`;
      document.getElementById('notransactions').style.display = 'block';
    }
      
    })
    .catch(error => {
      console.error('Error fetching user transactions:', error);
      //Handling the error
    });
});


document.addEventListener('DOMContentLoaded', function () {
 //*- console.log('Fetching user details');
  // Fetch the username from the session
  fetch('/get-profit-today')
    .then(response => response.json())
    .then(data => {
    //  console.log('Fetched username from server:', data.username, data.currentAccount, data.accountBallance, data.accountPhonenumber, data.accountEmail, data.invitationLink );
//const invited = data.invited;
//const accountType = data.accountType;
const todaysprofit = data.profit;
    
        // Displaying the user details on his account page
document.getElementById('todayprofit').textContent = `KES. ${todaysprofit}`;

               
      
    })
    .catch(error => {
      console.error('Error fetching username:', error);
      // Handle the error and maybe redirect to the login page
    });
});




//fetching user withdrawal transactions on page reloade
document.addEventListener('DOMContentLoaded', function () {
  //console.log('Fetching user withdrawals');
  fetch('/get-user-withdrawals')
    .then(response => response.json())
    .then(data => {
    //  console.log('Fetched transactions:', data.transactions);

      // Fetching an array of data
      const jobshistory = data.jobshistory;

      // Get the tbody element to append rows
      const transactionsBody = document.getElementById('withdrawals-body');
      if (jobshistory && jobshistory.length > 0) {
        document.getElementById('nowithdrawals').textContent = ` Job history`;
        // Loop through jobshistory and append rows
        jobshistory.forEach(jobhistory => {
          const row = document.createElement('tr');
          const jobtypCell = document.createElement('td');
          jobtypCell.textContent = jobhistory.jobtype;
          row.appendChild(jobtypCell);
  
          const jobIDCell = document.createElement('td');
        jobIDCell.textContent = jobhistory.jobidd;
        row.appendChild(jobIDCell);

        const amountCell = document.createElement('td');
        amountCell.textContent = jobhistory.jobprice;
        row.appendChild(amountCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = jobhistory.jobstatus;
        row.appendChild(statusCell);
        if(statusCell.textContent == "Paid"){
          statusCell.style.color ="green";
          statusCell.style.fontWeight = 'bold';
        }
        if(statusCell.textContent == "Under review"){
          statusCell.style.color ="blue";
          statusCell.style.fontWeight = 'bold';
    
        }
        if(statusCell.textContent == "Rejected (Off Topic)" || statusCell.textContent == "Rejected (Poorly done)"){
          statusCell.style.color ="red";
        }

        transactionsBody.appendChild(row);
      });

    } else {
      // No transactions, hide the table and display a message
      document.getElementById('withdrawals-table').style.display = 'none';
      document.getElementById('nowithdrawals').textContent = ` Your job history will show here`;
      document.getElementById('nowithdrawals').style.display = 'block';
    }
      
    })
    .catch(error => {
      console.error('Error fetching user transactions:', error);
      // Handling the error
    });
});

document.addEventListener('DOMContentLoaded', function () {
  //console.log('Fetching user teammember');
  // Fetching the username from the session
  fetch('/get-user-invites')
    .then(response => response.json())
    .then(data => {
     // console.log('Fetched team member:', data.team);

      // fetching an array of team data
      const team = data.team;
      const inviteCount = data.inviteCount;

      // Get the tbody element to append rows
      const teamBody = document.getElementById('team-body');
      if (team && team.length > 0) {
        document.getElementById('nomembers').textContent = "Your team members. Keep inviting to build a strong team";
        // Loop through team and append rows
        team.forEach(teammember => {
          const row = document.createElement('tr');
          const invitedCell = document.createElement('td');
          invitedCell.textContent = teammember.invited;
          row.appendChild(invitedCell);

          const firstrechargeCell = document.createElement('td');
          firstrechargeCell.textContent = teammember.firstrecharge;
          row.appendChild(firstrechargeCell);

          const earnedCell = document.createElement('td');
          earnedCell.textContent = teammember.earned;
          row.appendChild(earnedCell);

          const todayProfitCell = document.createElement('td');
          todayProfitCell.textContent = teammember.profit;
          row.appendChild(todayProfitCell);

          // Append a new column for 3% of todayProfit
          const profit3PercentCell = document.createElement('td');
          const todayProfitValue = parseFloat(teammember.profit);
          const profit3Percent = (todayProfitValue * 0.03).toFixed(2); // 3% of todayProfit
          profit3PercentCell.textContent = profit3Percent;
          row.appendChild(profit3PercentCell);

          teamBody.appendChild(row);
        });

        // Add a new row for totals
        const totalsRow = document.createElement('tr');
        totalsRow.style.fontWeight = 'bold'; // Make totals row bold for better visibility

        const totalLabelCell = document.createElement('td');
        totalLabelCell.textContent = 'Totals:';
        totalsRow.appendChild(totalLabelCell);

        // Calculate totals for each column
        const totals = {
          firstrecharge: 0,
          earned: 0,
          todayProfit: 0,
          profit3Percent: 0,
        };

        team.forEach(teammember => {
          totals.firstrecharge += parseFloat(teammember.firstrecharge);
          totals.earned += parseFloat(teammember.earned);
          totals.todayProfit += parseFloat(teammember.profit);
          totals.profit3Percent += parseFloat((teammember.profit * 0.03).toFixed(2));
        });

        // Append total values to the totals row
        Object.keys(totals).forEach(column => {
          const totalCell = document.createElement('td');
          totalCell.textContent = totals[column].toFixed(2);
          totalsRow.appendChild(totalCell);
        });

        teamBody.appendChild(totalsRow);

        // Set totals as text content for the "today" and "yesterday" divs
       // document.getElementById('today').textContent = totals.todayProfit.toFixed(2);
        document.getElementById('yesterday').textContent = `KES. ${totals.profit3Percent.toFixed(2)}`;
      } else {
        // No transactions, hide the table and display a message
        document.getElementById('team-table').style.display = 'none';
        document.getElementById('nomembers').textContent = ` Looks like you have not invited any friend`;
        document.getElementById('nomembers').style.display = 'block';
      }
    })
    .catch(error => {
      console.error('Error fetching user transactions:', error);
      // Handling the error
    });
});

function printing() {
  
  const membership = document.getElementById("username-display").textContent;
  const certnumber = document.getElementById("account_certnumber").textContent;
  document.getElementById("cert-username").textContent = membership;
  document.getElementById("cert-number").textContent = certnumber;
  document.getElementById('resultsTable').style.display = 'block';
  
  var element = document.getElementById('resultsTable');
  html2pdf().from(element).set({
    margin: 10, 
    filename: 'Membership Certificate.PDF',
    image: { type: 'png', quality: 1 },
    html2canvas: { dpi: 192, letterRendering: true }
  }).save();
  };
//Deposit Verification
function verifyPayment() {
 
      const transactionId = document.getElementById('transactionId').value;
      if (transactionId =="") {

            document.getElementById("id-error-message").style.color = "yellow";
            document.getElementById("id-error-message").textContent = "Please fill in the transaction ID";
            return;
        } else {
            document.getElementById("id-error-message").textContent = "";
        

      // Making a post requst to verify the deposit transaction
      fetch('/verifyPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transactionId }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error); // Showing error message to the user
        }
        else if (data.error1) {
          nopaymentFound()
          }
          else if (data.error2) {
            codeUsed()
            }
        else if (data.success) {
          certupdate()
          const membership = document.getElementById("username-display").textContent;
         // const certnumber = document.getElementById("account_certnumber").textContent;
          document.getElementById("cert-username").textContent = membership;
          document.getElementById('downloadPDFButton2').style.display = 'block';

         
          showcert();
          showDepositCard()
          //hideDepositCard()
         } 
      })
      .catch(error => {
        console.error('Error verifying payment:', error);
        alert('An error occurred. Please try again.'); // Show a generic error message
      });
    }
  }

  // function silverpackageupgradepayment(){
  //   const silvertransactionId = document.getElementById('silvertransactionId').value;
  //   if (silvertransactionId =="") {

  //         document.getElementById("silverid-error-message").style.color = "yellow";
  //         document.getElementById("silverid-error-message").textContent = "Please fill in the transaction ID";
  //         return;
  //     } else {
  //         document.getElementById("silverid-error-message").textContent = "";
     
  
// handling the payment buttons
// document.addEventListener('DOMContentLoaded', function () {
//   const silverpackageverification = document.getElementById('silverpackageverification');
//   const goldpackageverification = document.getElementById('goldpackageverification');
//   const aluminiumpackageverification = document.getElementById('aluminiumpackageverification');
//   const bronzepackageverification = document.getElementById('bronzepackageverification');
//   const diamondpackageverification = document.getElementById('diamondpackageverification');
//   const supergoldpackageverification = document.getElementById('supergoldpackageverification');
//   const superaluminiumpackageverification = document.getElementById('superaluminiumpackageverification');
//   const superbronzepackageverification = document.getElementById('superbronzepackageverification');
//   const superdiamondpackageverification = document.getElementById('superdiamondpackageverification');
//   const freedompackageverification = document.getElementById('freedompackageverification');
  

//   silverpackageverification.addEventListener('click', function () {
//     packageupdate('Silver');
//   });

//   goldpackageverification.addEventListener('click', function () {
//     packageupdate('Gold');
//   });

//   aluminiumpackageverification.addEventListener('click', function () {
//     packageupdate('Aluminium');
//   });

//   bronzepackageverification.addEventListener('click', function () {
//     packageupdate('Bronze');
//   });

//   diamondpackageverification.addEventListener('click', function () {
//     packageupdate('Diamond');
//   });

//   supergoldpackageverification.addEventListener('click', function () {
//     packageupdate('Super-Gold');
//   });

//   superaluminiumpackageverification.addEventListener('click', function () {
//     packageupdate('Super-Aluminium');
//   });

//   superbronzepackageverification.addEventListener('click', function () {
//     packageupdate('Super-Bronze');
//   });

//   superdiamondpackageverification.addEventListener('click', function () {
//     packageupdate('Super-Diamond');
//   });

//   freedompackageverification.addEventListener('click', function () {
//     packageupdate('Freedom');
//   });

//   // Update the packageupdate function in your existing client-side JavaScript file
// function packageupdate(package) {
//   const silvertransactionId = document.getElementById('silvertransactionId').value;
// if(silvertransactionId == ""){
//   document.getElementById("silverid-error-message").textContent = "Please fill in transaction ID";
//   document.getElementById("silverid-error-message").style.color = "yellow";
//   return;
// }else{
//   document.getElementById("silverid-error-message").textContent = "";
//     // Making a post requst to verify the deposit transaction
//     fetch('/packageupgrade', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ silvertransactionId: silvertransactionId, package }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         alert(data.error); // Showing error message to the user
//       }
//       else if (data.error1) {
//         nopaymentFound()
//         }
//         else if (data.error2) {
//           codeUsed()
//           }
//       else if (data.success) {

//         showDepositCard()
//         //hideDepositCard()
//        } 
      
//     })
//     .catch(error => {
//       console.error('Error verifying payment:', error);
//       alert('An error occurred. Please try again.'); // Show a generic error message
//     });
//   }
// }
// });


document.addEventListener('DOMContentLoaded', function () {
  // Add event listener to all buttons with the class 'packageverification'
  document.querySelectorAll('.packageverification').forEach(button => {
    button.addEventListener('click', function () {
      const package = this.dataset.package; // Get the package type from data attribute
      const silvertransactionId = document.querySelector(`.silvertransactionId[data-package="${package}"]`).value; // Get the input box value

      // Validate if the silvertransactionId is filled
      if (!silvertransactionId) {
        alert('Please enter a transaction ID for the ' + package + ' package.');
        return; // Exit the function if validation fails
      }

      // Proceed with the package update if validation passes
      packageupdate(silvertransactionId, package);
    });
  });
});

// Function to handle the package update
function packageupdate(silvertransactionId, package) {
  // Making a post request to verify the deposit transaction
  fetch('/packageupgrade', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ silvertransactionId: silvertransactionId, package: package }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert(data.error); // Showing error message to the user
    } else if (data.error1) {
      alert(data.error1); // Showing error1 message to the user
    } else if (data.error2) {
      alert(data.error2); // Showing error2 message to the user
    } else if (data.success) {
      alert('Package verified and updated successfully');
    }
  })
  .catch(error => {
    console.error('Error verifying payment:', error);
    alert('An error occurred. Please try again.'); // Show a generic error message
  });
}


function goldpackageupgradepayment(){
  const goldtransactionId = document.getElementById('goldtransactionId').value;
  if (goldtransactionId =="") {

        document.getElementById("goldid-error-message").style.color = "white";
        document.getElementById("goldid-error-message").textContent = "Please fill in the transaction ID";
        return;
    } else {
        document.getElementById("goldid-error-message").textContent = "";
    

  // Making a post requst to verify the deposit transaction
  fetch('/goldverifyPayment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goldtransactionId }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert(data.error); // Showing error message to the user
    }
    else if (data.error1) {
      nopaymentFound()
      }
      else if (data.error2) {
        codeUsed()
        }
    else if (data.success) {

      showDepositCard()
      //hideDepositCard()
     } 
  })
  .catch(error => {
    console.error('Error verifying payment:', error);
    alert('An error occurred. Please try again.'); // Show a generic error message
  });
}
}

  function topupverifyPayment() {
 
    const topuptransactionId = document.getElementById('topuptransactionId').value;
    if (topuptransactionId =="") {

          document.getElementById("topupid-error-message").style.color = "red";
          document.getElementById("topupid-error-message").textContent = "Please fill in the transaction ID";
          return;
      } else {
          document.getElementById("topupid-error-message").textContent = "";
      

    // Making a post requst to verify the deposit transaction
    fetch('/topupverifyPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topuptransactionId }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error); // Showing error message to the user
      }
      else if (data.error1) {
        nopaymentFound()
        }
        else if (data.error2) {
          codeUsed()
          }
      else if (data.success) {
        certupdate()
        const membership = document.getElementById("username-display").textContent;
       // const certnumber = document.getElementById("account_certnumber").textContent;
        document.getElementById("cert-username").textContent = membership;
        document.getElementById('downloadPDFButton2').style.display = 'block';

       
        showcert();
        showDepositCard()
        //hideDepositCard()
       } 
    })
    .catch(error => {
      console.error('Error verifying payment:', error);
      alert('An error occurred. Please try again.'); // Show a generic error message
    });
  }
}
 
  // Handling useer withdrawals
function withdraw() {
  const withdrawalatammount = document.getElementById("withdrawalatammount").value;
  const phonenumbertext = document.getElementById("phonenumbertext").value;

    // Fetching to the server
  fetch('/withdraw', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ withdrawalatammount, phonenumbertext }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        showWithdrawCard()
        
      } else {
        alert('Withdrawal request failed. Please try again.');

        // Error handling
      }
    })
    .catch(error => {
      console.error('Error during withdrawal:', error);
      // Error handling
    });
}

// Handling user logout
const logoutButton = document.getElementById('logoutsecction');

logoutButton.addEventListener('click', async () => {
  // Confirming if user realy wants to logout
  const confirmLogout = window.confirm('Are you sure you want to logout?');

  if (confirmLogout) {
    // If the user confirms, make a request to the logout route on the server
    const response = await fetch('/logout', { method: 'GET' });

    if (response.ok) {
      // If the logout was successful, redirect the user to the login page
      window.location.href = '/signin';
    } else {
      // Handle any errors that occurred during logout
      console.error('Error during logout:', response.statusText);
      // Displaying any error message
    }
  }
  // Handling incase the user cancels
});

//deposit section
function dp(){
  const dpvalue = document.getElementById("depositammount").value;

  if(dpvalue < 500){
    document.getElementById("depositamount-error-message").style.color = "red";
    document.getElementById("depositamount-error-message").textContent = "Minimum deposit KES.500";
    document.getElementById('depositsteps').style.display = 'none';
    document.getElementById("payammount").value ="";
    
    return;
} else {
  document.getElementById("payammount").textContent = dpvalue;
    document.getElementById("depositamount-error-message").textContent = "";
    document.getElementById('depositsteps').style.display = 'block';
    

  }if(dpvalue > 450000){
    
    document.getElementById("depositamount-error-message").style.color = "red";
    document.getElementById("depositamount-error-message").textContent = "Maximum deposit KES.450000";
    document.getElementById('depositsteps').style.display = 'none';
    document.getElementById("payammount").value ="";
    
    return;
} else {
  document.getElementById("payammount").textContent = dpvalue;
    document.getElementById("depositamount-error-message").textContent = "";
    document.getElementById('depositsteps').style.display = 'block';
    
  }
}

//Withdrawal secction
function wd(){
  const wdvalue = document.getElementById("withdrawalatammount").value;
  const accountBallanceElement = document.getElementById("account_ballance");
  const accountBallanceText = accountBallanceElement.textContent;
  const accountBallance = parseFloat(accountBallanceText.replace('KES.', '').trim());
  const phonenumberElement = document.getElementById("account_phonenumber");
  const phonenumberText = phonenumberElement.textContent;
  

  if(wdvalue < 500){
    document.getElementById("withdrwal-error-message").style.color = "red";
    document.getElementById("withdrwal-error-message").textContent = "Minimum withdrawal KES.500";
    document.getElementById('withdrawalconfirmation').style.display = 'none';
    document.getElementById('withdrawalconfirmationbutton').style.display = 'none';
    document.getElementById("phonenumbertext").value = "";
   
    
    return;
} else {
  document.getElementById("withdrwal-error-message").textContent = "";
  document.getElementById("withdrawalconfirmationatammount").textContent = wdvalue;
  document.getElementById("withdrawalphone").textContent = phonenumberText;
  document.getElementById("phonenumbertext").value = phonenumberText;
  document.getElementById('withdrawalconfirmation').style.display = 'block';
  document.getElementById('withdrawalconfirmationbutton').style.display = 'block';
  
  }if(wdvalue > 450000){
    
    document.getElementById("withdrwal-error-message").style.color = "red";
    document.getElementById("withdrwal-error-message").textContent = "Maximum withdrawal KES.450000";
    document.getElementById('withdrawalconfirmation').style.display = 'none';
    document.getElementById('withdrawalconfirmationbutton').style.display = 'none';
    document.getElementById("phonenumbertext").value = "";
  //  document.getElementById("withdrawalatammount").value ="";
    
    return;
} else {
  document.getElementById("withdrwal-error-message").textContent = "";
  document.getElementById("withdrawalconfirmationatammount").textContent = wdvalue;
  document.getElementById("withdrawalphone").textContent = phonenumberText;
  document.getElementById("phonenumbertext").value = phonenumberText;
  document.getElementById('withdrawalconfirmation').style.display = 'block';
  document.getElementById('withdrawalconfirmationbutton').style.display = 'block';
    
  }if(wdvalue > accountBallance){
    
    document.getElementById("withdrwal-error-message").style.color = "red";
    document.getElementById("withdrwal-error-message").textContent = "Insufficient funds. Your account ballance is KES."+ accountBallance;
    document.getElementById('withdrawalconfirmation').style.display = 'none';
    document.getElementById('withdrawalconfirmationbutton').style.display = 'none';
    document.getElementById("phonenumbertext").value = "";
    //document.getElementById("withdrawalatammount").value ="";
    
    return;
} else {
  document.getElementById("withdrwal-error-message").textContent = "";
  document.getElementById("withdrawalconfirmationatammount").textContent = wdvalue;
  document.getElementById("withdrawalphone").textContent = phonenumberText;
  document.getElementById("phonenumbertext").value = phonenumberText;
  document.getElementById('withdrawalconfirmation').style.display = 'block';
  document.getElementById('withdrawalconfirmationbutton').style.display = 'block';
    
  }
}
// Reload the current page
function pr() {
  
  location.reload();
}
function hideWithdrawalhistory(){
  document.getElementById("withdrawals-table").style.display = 'none';
  document.getElementById("showwithdrawalhistory").style.display = 'block';
  document.getElementById("hidewithdrawalhistory").style.display = 'none';
}
function showWithdrawalhistory(){
  const withdrawalstable = document.getElementById("withdrawals-table");
  withdrawalstable.style.display = 'block';
  withdrawalstable.style.width = '100%';
  document.getElementById("showwithdrawalhistory").style.display = 'none';
  document.getElementById("hidewithdrawalhistory").style.display = 'block';
}

function showDepositCard(){
  const overlay = document.getElementById('overlay01');
  const depositcard = document.getElementById("depositcad");
  depositcard.style.display = "block";
  overlay.style.display = "block";
}

function hideDepositCard(){
  const overlay = document.getElementById('overlay01');
  const depositcard = document.getElementById("depositcad");
  depositcard.style.display = "none";
  overlay.style.display = "none";
  //verifyPayment()
}

function nopaymentFound(){
  const nopayment = document.getElementById("nopayment");
  nopayment.style.display = "block";
 

  setTimeout(function() {
    nopayment.style.display = 'none';
}, 6000);

}

function codeUsed(){
  const codeUsed = document.getElementById("codeUsed");
  codeUsed.style.display = "block";
 
  setTimeout(function() {
    codeUsed.style.display = 'none';
}, 4000);
}

function SuccessPromoCard() {
  var successpromocard = document.getElementById('successpromocard');
  
  successpromocard.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      successpromocard.style.display = 'none';
  }, 4000);
}


function errorPromoCard() {
  var errorpromocard = document.getElementById('errorpromocard');
  
  errorpromocard.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      errorpromocard.style.display = 'none';
  }, 4000);
}

function showWithdrawCard(){
  const overlay = document.getElementById('overlay2');
  const withdraw = document.getElementById("withdraw");
  withdraw.style.display = "block";
  overlay.style.display = "block";
}

function hideWithdraw(){
  const overlay = document.getElementById('overlay2');
  const withdraw = document.getElementById("withdraw");
  withdraw.style.display = "none";
  overlay.style.display = "none";
  pr();
}

function showinvitation(){
  const overlay3 = document.getElementById('overlay3');
  const copylink = document.getElementById("copylink");
  copylink.style.display = "block";
  overlay3.style.display = "block";
  
}

function hideinvitation(){
  const overlay3 = document.getElementById('overlay3');
  const copylink = document.getElementById("copylink");
  copylink.style.display = "none";
  overlay3.style.display = "none";
  
}

document.addEventListener('DOMContentLoaded', function () {
  // Fetch the latest questions from the server
  fetch('/get-latest-questions')
    .then(response => response.json())
    .then(data => {
      const latestQuestions = data.latestQuestions;

      // Update each section with a question
      for (let i = 1; i <= 11; i++) {
        const section = document.getElementById(`section${i}`);
        if (latestQuestions && latestQuestions[i - 1]) {
          section.textContent = latestQuestions[i - 1];
        } else {
          section.textContent = 'Nothing to promote at the moment.';
        }
      }
    })
    .catch(error => {
      console.error('Error fetching latest questions:', error);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Create an Audio object
  var audio = new Audio('path/to/your/soundfile.mp3'); // Replace with the actual path to your sound file

  // Get the button element
  var playButton = document.getElementById('playButton');

  });

//Plans view


window.onload = function () {
  // Retrieve account balance
  const accountBalanceElement = document.getElementById("account_ballance");
  const accountBalanceText = accountBalanceElement.textContent;
  const accountBalance = parseFloat(accountBalanceText.replace('KES.', '').trim());

  // Array of activation balances for each level
  const activationBalances = [500, 1500, 4000, 10000, 20000, 50000, 100000, 300000, 500000, 1000000];

  // Find the current level based on the account balance
  let currentLevel = 0;
  for (let i = 0; i < activationBalances.length; i++) {
    const activationBalance = activationBalances[i];
    if (accountBalance >= activationBalance) {
      currentLevel = i + 1;
    }
  }

  // Set the text content of "current_account" div
  const currentAccountElement = document.getElementById("current_account");
  currentAccountElement.textContent = currentLevel > 0 ? `${currentLevel}` : "Free";

  // Iterate through levels
  for (let i = 0; i < activationBalances.length; i++) {
    const activationBalance = activationBalances[i];

    // Lock or unlock the level based on the account balance
    const levelStatusElement = document.getElementById(`level${i + 1}status`);
    const levelElement = document.getElementById(`level${i + 1}`);
    const levelH3Element = document.querySelector(`#level${i + 1} h3`);
    levelStatusElement.src = accountBalance < activationBalance ? "locked.png" : "";

    // Set pointer-events to "none" if the level is locked
    if (accountBalance < activationBalance) {
      levelElement.style.pointerEvents = "none";
      levelH3Element.textContent = `Unlock with KES ${activationBalance}`;
    } else {
      levelElement.style.pointerEvents = "auto"; // Set it back to "auto" if the level is unlocked
    }

    // Attach the click event listener (no need to check for locked status here)
    levelElement.addEventListener("click", function (event) {
      // Handle click event for each level
    });
  }
};


document.addEventListener('DOMContentLoaded', () => {
  // Add click event listeners to the buttons
  for (let i = 1; i <= 10; i++) {
    const levelButton = document.getElementById(`level${i}`);
    levelButton.addEventListener('click', () => updateLevel(`level${i}`));
  }
});

async function updateLevel(level) {
  try {
    const response = await fetch(`/update-level/${level}`, {
      method: 'POST',
      credentials: 'include', // Include cookies for session tracking
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      //console.log(data.message);
      
      SuccessPromoCard()
      
      //alert(data.success);
      // Handle success, e.g., display a success message to the user
    } else {
      errorPromoCard()

      //alert(data.error);
      //console.error(data.error);
      // Handle error, e.g., display an error message to the user
    }
  } catch (error) {
    console.error('Error updating level:', error);
    // Handle unexpected errors, e.g., display a generic error message to the user
  }
}



async function updatefreeLevel() {
  try {
    const response = await fetch('/update-freelevel', {
      method: 'POST',
      credentials: 'include', // Include cookies for session tracking
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      //console.log(data.message);
      const successful = document.getElementById("successpromocard");
      SuccessPromoCard()
      successful.textContent = currentLevel > 0 ? `${currentLevel}` : "Free";
      
      //alert(data.success);
      // Handle success, e.g., display a success message to the user
    } else {
     
      errorPromoCard()

      //alert(data.error);
      //console.error(data.error);
      // Handle error, e.g., display an error message to the user
    }
  } catch (error) {
    console.error('Error updating level:', error);
    // Handle unexpected errors, e.g., display a generic error message to the user
  }
}



document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    // Fetch values from the elements
    const todayProfitElement = document.getElementById('todayprofit');
    const yesterdayElement = document.getElementById('yesterday');
    const totalProfitElement = document.getElementById('totalprofit');

    // Extract numeric values from the elements
    const todayProfit = parseFloat(todayProfitElement.textContent.split(' ')[1]);
    const yesterdayProfitText = yesterdayElement.textContent.split(' ')[1];
    const yesterdayProfit = parseFloat(yesterdayProfitText);

    // Logging for debugging
    
    // Check if yesterdayProfit is a valid number
    if (!isNaN(yesterdayProfit)) {
      // Calculate total profit
      const totalProfit = todayProfit + yesterdayProfit;

            // Set the total profit as text content for the "totalprofit" element
      totalProfitElement.textContent = `KES. ${totalProfit.toFixed(2)}`;
    } else {
      console.log("Error: Unable to parse yesterdayProfit");
    }
  }, 1000); // Delayed for 1000 milliseconds (1 second)
});
function toggleProfile() {
  var profileSection = document.getElementById("profileSection");
  var overlay = document.querySelector(".overlay");
  if (profileSection.classList.contains("active")) {
    profileSection.classList.remove("active");
    overlay.style.display = "none";
    overlay.style.display = "none";
  } else {
    profileSection.classList.add("active");
    overlay.style.display = "block";
  }
}

function hideProfile() {
  var profileSection = document.getElementById("profileSection");
  var overlay = document.querySelector(".overlay");
  profileSection.classList.remove("active");
  overlay.style.display = "none";
}

document.addEventListener('click', async function(event) {
  if (event.target.classList.contains('deleteBtn')) {
    const jobid = event.target.dataset.jobid;
    const confirmation = confirm('Are you sure you want to delete this job? This action cannot be undone');

    if (confirmation) {
      const response = await fetch('/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({jobid}) 
      });

      if (response.ok) {
        fetchJobCards();
        alert("Job deleted Successfuly. This job is nolonger vissible");
      }
      else{
        alert("Unauthorized deletion attempt: Only the job owner can delete it.");
      }
    }
  }
});

document.addEventListener('click', async function(event) {
  if (event.target.classList.contains('bidjobbutton')) {
    const jobid = event.target.dataset.jobid; 
//const confirmation = confirm('Are you sure you want to delete this job?');
document.getElementById("jobbidingid").textContent = `${jobid}`;

    
  }
});

function redirectToJobBidding(jobId, typeofjob, description, job_price, biddingprice) {
  var membership = document.getElementById("account_membership").textContent.trim();
  var certNumber = document.getElementById("account_certnumber").textContent.trim();
  
  if (membership === "none" || certNumber === "none") {
    alert("You need a membership Certificate to do tasks. Click membership to register.");
  } else {
    // Redirect to job bidding page with all parameters as query parameters
    window.location.href = `/job_biding?jobid=${jobId}&typeofjob=${typeofjob}&description=${description}&job_price=${job_price}&jobbidding_price=${biddingprice}`;
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Extract parameters from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get('jobid');
  const typeofjob = urlParams.get('typeofjob');
  const description = urlParams.get('description');
  const job_price = urlParams.get('job_price');
  const jobbidding_price = job_price * 0.1;
  
  // Set parameters to respective divs
  document.getElementById("jobIdDiv").textContent = jobId;
  document.getElementById("typeofjobDiv").textContent = typeofjob;
  document.getElementById("descriptionDiv").textContent = description;
  document.getElementById("jobPriceDiv").textContent = job_price;
  document.getElementById("jobbidingPriceDiv").textContent = jobbidding_price;
});



//getting available jobs 
document.addEventListener('DOMContentLoaded', async function () {
  const response = await fetch('/getJobs');
  const jobs = await response.json();
  const jobCardsContainer = document.getElementById('jobCards');
  jobCardsContainer.innerHTML = '';

  jobs.forEach(job => {
    const card = document.createElement('div');
    card.classList.add('card');
    const formattedDate = new Date(job.timestamp).toLocaleString();
    card.innerHTML = `
      <h4 style = "color: green; background-color: lightgreen; padding: 14px; text-align: center">${job.typeofjob}</h4>
      <p style = "font-size: 110%; border-style: solid; border-color: green; padding: 7px; border-radius: 5px; border-width: 1pt">${job.description}<br><br><b>I will pay KES. ${job.job_price}.</b></p>
      <p><b style = "color: green"> Posted at:</b> ${formattedDate}.</p>
      <p><b style = "color: green">Job ID:</b> ${job.jobid}</p>
      <button class="bidjobbutton" data-jobid="${job.jobid}" onclick="redirectToJobBidding('${job.jobid}', '${job.typeofjob}', '${job.description}', '${job.job_price}')"style="background-color: green; border-radius: 7px; border: none; padding: 5px; color: white; font-size: 110%; cursor: pointer">I can do this job</button>
      <button style = "background-color: lightblue; border-radius: 7px; border: none; padding:5px; color: green; font-size: 110%;">This job is available</button></p>
    `;
    jobCardsContainer.appendChild(card);
  });
});

//fetchJobCards();

document.addEventListener('DOMContentLoaded', function () {
  const account_membership = document.getElementById("account_membership").value;
  const account_certnumber = document.getElementById("account_certnumber").value;
 
  if(account_membership == "none"){
    document.getElementById("account_membership").style.color = "Red";
    document.getElementById("account_certnumber").style.color = "Red";
  }else{
    document.getElementById("account_membership").style.color = "Green";
    document.getElementById("account_certnumber").style.color = "Green";
  }
   
});



// function talkingtoclient(){
//   var membership = document.getElementById("account_membership").textContent.trim();
//   var certNumber = document.getElementById("account_certnumber").textContent.trim();
  
//   if (membership === "none" || certNumber === "none") {
//     alert("You need a membership Certificate to talk to clients. Click membership to register.");
//   } else {
//     window.location.href = "client_freelancer_talk.html";
//   }
// }


document.getElementById('jobForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  var membership = document.getElementById("account_membership").textContent.trim();
  var certNumber = document.getElementById("account_certnumber").textContent.trim();
  const typeofjob = document.getElementById('typeofjob').value;
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;

  if (typeofjob == "" || description == "" || amount == "" ){
    alert("Fill all the fields");
   
  }else if(amount < 100 ) {
    alert("Minimum amount you can pay for any job is KES.100");
  
  }else if(membership === "none" || certNumber === "none") {
    alert("You need a membership Certificate to post a job. Click membership to register.");
  }else{

  const response = await fetch('/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ typeofjob, description, amount })
  });

  if (response.ok) {
   // fetchJobCards();
    alert("Job successfully posted. It is now vissible to everyone");
  }else{
    alert("something went wrong. Please try again");
  }
}
});
function biddingballanceerror() {
  var biddingballanceerror = document.getElementById('biddingballanceerror');
  
  biddingballanceerror.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      biddingballanceerror.style.display = 'none';
  }, 8000);
}

function jobnotexistingerror() {
  var jobnotexistingerror = document.getElementById('jobnotexistingerror');
  
  jobnotexistingerror.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      jobnotexistingerror.style.display = 'none';
  }, 4000);
}

function packageexpirederror() {
  var packageexpirederror = document.getElementById('packageexpirederror');
  
  packageexpirederror.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      packageexpirederror.style.display = 'none';
  }, 5000);
}

function anypackageexpirederror() {
  var anypackageexpirederror = document.getElementById('anypackageexpirederror');
  
  anypackageexpirederror.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      anypackageexpirederror.style.display = 'none';
  }, 5000);
}

function basichigherpriceerror() {
  var basichigherpriceerror = document.getElementById('basichigherpriceerror');
  
  basichigherpriceerror.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      basichigherpriceerror.style.display = 'none';
  }, 5000);
}

function anypackagehigherpriceerror() {
  var anypackagehigherpriceerror = document.getElementById('anypackagehigherpriceerror');
  
  anypackagehigherpriceerror.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      anypackagehigherpriceerror.style.display = 'none';
  }, 10000);
}


function jobsuccessfullysecured() {
  var jobsuccessfullysecured = document.getElementById('jobsuccessfullysecured');
  
  jobsuccessfullysecured.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      jobsuccessfullysecured.style.display = 'none';
  }, 4000);
}

function nopendingjoberror() {
  var nopendingjoberror = document.getElementById('nopendingjoberror');
  
  nopendingjoberror.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      nopendingjoberror.style.display = 'none';
  }, 4000);
}

function jobsuccessfullysubmitted() {
  var jobsuccessfullysubmitted = document.getElementById('jobsuccessfullysubmitted');
  
  jobsuccessfullysubmitted.style.display = 'block';

  // Automatically hide the floating card after 3 seconds
  setTimeout(function() {
      jobsuccessfullysubmitted.style.display = 'none';
  }, 8000);
}

function jobtaking() {
  // Get the job ID and bidding price
  const jobId = document.getElementById('jobIdDiv').textContent.trim();
  const account_package = document.getElementById('account_package').textContent.trim();
  //const jobpriceconversion = document.getElementById('jobbidingPriceDiv').textContent.trim();
  //const jobbiddingprice = parseInt(jobpriceconversion, 10);

  // Send a POST request to the server to confirm job bidding
  fetch('/confirmJobBidding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ jobId: jobId, account_package: account_package})
  })
  .then(response => {
    if (!response.ok) {
      console.error('Network response was not ok:', response);
      return response.json().then(data => { throw new Error(JSON.stringify(data)); });
    }
    return response.json();
  })
  .then(data => {
    if (data.error1) {
      biddingballanceerror(); // Show specific error message for insufficient balance
    } else if (data.error2) {
      jobnotexistingerror(); // Show specific error message for unavailable job
    }
    else if (data.error3) {
      packageexpirederror(); // Show specific error message for unavailable job
    }

    else if (data.error4) {
      anypackageexpirederror(); // Show specific error message for unavailable job
    }

    else if (data.error0) {
      basichigherpriceerror(); // Show specific error message for unavailable job
    }

    else if (data.error01) {
      anypackagehigherpriceerror(); // Show specific error message for unavailable job
    }
    
    else {
      jobsuccessfullysecured();
     // alert(data.message); // Show success message to the user
    }
  })
  .catch(error => {
    console.error('Error confirming job bidding:', error);
    const errorData = JSON.parse(error.message);
    if (errorData.error1) {
      biddingballanceerror();
     // alert(errorData.error1); // Show specific alert for error1
    } else if (errorData.error2) {
      jobnotexistingerror();
      //alert(errorData.error2); // Show specific alert for error2
    }
  else if (errorData.error3) {
    packageexpirederror();
    //alert(errorData.error2); // Show specific alert for error2
  }
  
  else if (errorData.error4) {
    anypackageexpirederror();
    //alert(errorData.error2); // Show specific alert for error2
  }

  else if (errorData.error0) {
    basichigherpriceerror();
    //alert(errorData.error2); // Show specific alert for error2
  }

  else if (errorData.error01) {
    anypackagehigherpriceerror();
    //alert(errorData.error2); // Show specific alert for error2
  }
    else {
      alert('Oops! Something went wrong. Please try again.');
    }
  });
}



function mpesapaymentsMethods(){
  document.getElementById("mpesapaymentsecction").style.display = "block";
  document.getElementById("paypalpaymentsecction").style.display = "none";
}

function paypalpaymentsMethods(){
  document.getElementById("mpesapaymentsecction").style.display = "none";
  document.getElementById("paypalpaymentsecction").style.display = "block";
}

function copyCardBody() {
  // Get the card body element
  const cardBody = document.getElementById('descriptionDiv');
  
  
  // Create a range and select the text
  const range = document.createRange();
  range.selectNode(cardBody);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  // Copy the selected text
  document.execCommand('copy');

  // Deselect the textz
  window.getSelection().removeAllRanges();

  // Provide feedback to the user
  alert('Job coppied successfully');
}

function copyCardJobID() {
  // Get the card body element
  const cardBody = document.getElementById('jobIdDiv');
  
  
  // Create a range and select the text
  const range = document.createRange();
  range.selectNode(cardBody);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  // Copy the selected text
  document.execCommand('copy');

  // Deselect the text
  window.getSelection().removeAllRanges();

  // Provide feedback to the user
  alert('Job ID coppied successfully');
}

// function jobsubmittin(){
//   const jobsubmittingForm = document.getElementById("jobForm");
  
//   jobsubmittingForm.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const loader = document.getElementById('loader');
//     const jobsubmittingid = document.getElementById("jobsubmittingid").value.trim();
//     const jobsubmittinganswer = document.getElementById("jobsubmittinganswer").value;
//     // Validate email and password
//     if (jobsubmittingid.trim() == "" || jobsubmittinganswer == "") {
//       document.getElementById("mpty-error-message").textContent = "You must fill the job ID and the Answer";
//       return;
//     } else {
//       document.getElementById("mpty-error-message").textContent = "";
//     }
//     if (jobsubmittinganswer.length < 50) {
     
//       document.getElementById("error-message").textContent = "Answer too short";
//       return;
//   } else {
//       document.getElementById("error-message").textContent = "";
//   } 
//       // If validation passes, you can submit the form
//     document.getElementById("jobForm").submit();
//     loader.style.display = 'block';
    
  
//   })};
  

  function jobsubmittin(){
    const jobsubmittingid = document.getElementById("jobsubmittingid").value.trim();
    const jobsubmittinganswer = document.getElementById("jobsubmittinganswer").value;
    
    if (jobsubmittingid.trim() == "" || jobsubmittinganswer == "") {
            document.getElementById("mpty-error-message").textContent = "You must fill the job ID and the Answer";
            return;
          } else {
            document.getElementById("mpty-error-message").textContent = "";
          }
          if (jobsubmittinganswer.length < 50) {
           
            document.getElementById("error-message").textContent = "Answer too short";
            return;
        } else {
            document.getElementById("error-message").textContent = "";
        
        }
    fetch('/JobSubmitting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jobsubmittingid: jobsubmittingid, jobsubmittinganswer: jobsubmittinganswer })
    })
    .then(response => {
      if (!response.ok) {
        console.error('Network response was not ok:', response);
        return response.json().then(data => { throw new Error(JSON.stringify(data)); });
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        nopendingjoberror(); // Show specific error message for insufficient balance
       // Show specific error message for unavailable job
      } else {
        jobsuccessfullysubmitted();
       // alert(data.message); // Show success message to the user
      }
    })
    .catch(error => {
      console.error('Error confirming job bidding:', error);
      nopendingjoberror();
      
    });
  }
function silverpackageupgrade(){
  const depositsteps = document.getElementById("depositsteps");
  depositsteps.style.display = "block";
}
function hidesilverpackageupgrade(){
  const silverdepositsteps = document.getElementById("silverdepositsteps");
  const golddepositsteps = document.getElementById("golddepositsteps");
  const aluminiumdepositsteps = document.getElementById("aluminiumdepositsteps");
  const diamonddepositsteps = document.getElementById("diamonddepositsteps");
  const bronzedepositsteps = document.getElementById("bronzedepositsteps");
  const supergolddepositsteps = document.getElementById("supergolddepositsteps");
  const superaluminiumdepositsteps = document.getElementById("superaluminiumdepositsteps");
  const superbronzedepositsteps = document.getElementById("superbronzedepositsteps");
  const superdiamonddepositsteps = document.getElementById("superdiamonddepositsteps");
  const freedomdepositsteps = document.getElementById("freedomdepositsteps");
  
  silverdepositsteps.style.display = "none";
  golddepositsteps.style.display = "none";
  aluminiumdepositsteps.style.display = "none";
  diamonddepositsteps.style.display = "none";
  bronzedepositsteps.style.display = "none";
  supergolddepositsteps.style.display = "none";
  superaluminiumdepositsteps.style.display = "none";
  superbronzedepositsteps.style.display = "none";
  superdiamonddepositsteps.style.display = "none";
  freedomdepositsteps.style.display = "none";
}

function silverpackageupgrade(){
  const silverdepositsteps = document.getElementById("silverdepositsteps");
  silverdepositsteps.style.display = "block";
}


function goldpackageupgrade(){
  const depositsteps = document.getElementById("golddepositsteps");
  depositsteps.style.display = "block";
}

function aluminiumpackageupgrade(){
  const aluminiumdepositsteps = document.getElementById("aluminiumdepositsteps");
  aluminiumdepositsteps.style.display = "block";
}

function diamondpackageupgrade(){
  const diamonddepositsteps = document.getElementById("diamonddepositsteps");
  diamonddepositsteps.style.display = "block";
}

function bronzepackageupgrade(){
  const bronzedepositsteps = document.getElementById("bronzedepositsteps");
  bronzedepositsteps.style.display = "block";
}

function supergoldpackageupgrade(){
  const supergolddepositsteps = document.getElementById("supergolddepositsteps");
  supergolddepositsteps.style.display = "block";
}

function superaluminiumpackageupgrade(){
  const superaluminiumdepositsteps = document.getElementById("superaluminiumdepositsteps");
  superaluminiumdepositsteps.style.display = "block";
}
function superbronzepackageupgrade(){
  const superbronzedepositsteps = document.getElementById("superbronzedepositsteps");
  superbronzedepositsteps.style.display = "block";
}

function superdiamondpackageupgrade(){
  const superdiamonddepositsteps = document.getElementById("superdiamonddepositsteps");
  superdiamonddepositsteps.style.display = "block";
}

function freedompackageupgrade(){
  const freedomdepositsteps = document.getElementById("freedomdepositsteps");
  freedomdepositsteps.style.display = "block";
}

function confirmingpaymentmethod(){
  const account_paymentmethod = document.getElementById("account_paymentmethod").value;
  if(account_paymentmethod == "none"){
    alert("Please add a payment Method")
  }else{
    window.location.href = '/funds-withdrawal';
  }
}
//acid sound spread coast kiwi glory ocean pudding virus sheriff labor monkey despair where small multiply motor track lecture boat decline cry deposit obtain