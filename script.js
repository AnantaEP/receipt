document.getElementById('receiptForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const clientName = document.getElementById('clientName').value;
  const serviceType = document.getElementById('serviceType').value;
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;
  const date = document.getElementById('date').value;
  const paymentMode = document.getElementById('paymentMode').value;

  // Set values in receipt
  document.getElementById('r_clientName').textContent = clientName;
  document.getElementById('r_serviceType').textContent = serviceType;
  document.getElementById('r_description').textContent = description;
  document.getElementById('r_amount').textContent = amount;
  document.getElementById('r_date').textContent = date;
  document.getElementById('r_paymentMode').textContent = paymentMode;

  const receipt = document.getElementById('receipt');
  receipt.style.display = 'block';

  html2pdf()
    .from(receipt)
    .set({ filename: `${clientName}_receipt.pdf` })
    .save()
    .then(() => {
      receipt.style.display = 'none'; // Hide after download
    });
});
