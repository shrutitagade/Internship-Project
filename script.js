document.getElementById("bookTableBtn").addEventListener("click", function () {
    $('#bookTableModal').modal('show');
});

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    $('#bookTableModal').modal('hide');
    $('#bookingSuccessModal').modal('show');
});
