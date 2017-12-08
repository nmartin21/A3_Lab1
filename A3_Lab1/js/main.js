(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

  var theImages = document.querySelector('.data-ref'),
  modelname = document.querySelector('.modelName'),
  modelprice = document.querySelector('.priceInfo'),
  modeldetails = document.querySelector('.modelDetails');

  theImages.forEach(function(element, index) {
    element.addEventListener('click', changeElements, false);

  });

  function changeElements (){

  let objectIndex = carData[this.id];

  modelname.classList.add(this.id);
  modelprice.classList.add(this.id);
  modeldetails.classList.add(this.id);

  modelname.firstChild.nodeValue = objectIndex.carname;
  modelprice.firstChild.nodeValue = objectIndex.price;
  modeldetails.firstChild.nodeValue = objectIndex.imageDescriptions;


  }




})();
