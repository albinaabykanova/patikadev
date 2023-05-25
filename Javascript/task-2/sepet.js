var p1 = 5;
var p2 = 10;
document.getElementById("myBtn").addEventListener("click", function () {
  myFunction(p1, p2);
});
function myFunction(a, b) {
  var sonuc = a * b;
  document.getElementById("demo").innerHTML = sonuc;
}

var kutu1 = document.getElementById("kutu1");
var kutu2 = document.getElementById("kutu2");
var kutu3 = document.getElementById("kutu3");

kutu1.addEventListener(
  "click",
  function (e) {
    alert("kutu 1 tiklandi");
  },
  false
);
kutu2.addEventListener(
  "click",
  function (e) {
    alert("kutu 2 tiklandi");
  },
  false
);
kutu3.addEventListener(
  "click",
  function (e) {
    alert("kutu 3 tiklandi");
  },
  false
);

let counter = 0;
let counterDom = document.querySelector("#counter");
let increaseDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");

counterDom.innerHTML = counter;

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id);
  this.id == "increase" ? (counter += 1) : (counter -= 1);
  counterDom.innerHTML = counter;
}
