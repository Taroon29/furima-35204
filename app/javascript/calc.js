if (document.URL.match( /new/ ) || document.URL.match( /edit/ )) {
  function calc (){
    const price = document.getElementById("item-price");
    price.addEventListener("input", () => {
      const tax = Math.floor(price.value * 0.1);
      const addTaxPrice = document.getElementById("add-tax-price");
      addTaxPrice.innerHTML = tax;
      
      const pro = price.value - tax;
      const profit = document.getElementById("profit");
      profit.innerHTML = pro;

    });
  }
  window.addEventListener('load', calc);
}