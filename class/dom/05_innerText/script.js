function handleOnclick() {
  const handleStatus = document.getElementById("handle-status");

  handleStatus.innerText = "hello javascript";
}

// option 2:
document.getElementById("even-listener").addEventListener("click", function () {
  document.innerText = "hello javascript";
});
