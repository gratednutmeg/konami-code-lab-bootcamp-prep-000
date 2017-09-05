const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  // Write your JavaScript code inside the init() function
  let body = document.querySelector('body');
  let index = 0;

  body.addEventListener('keydown', function(e) {
    let currentKey = e.which;
    console.log(currentKey);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("KONAMI");
        index = 0;
      }
    } else {
      index = 0;
    }
  });



  alert('KONAMI');
}
