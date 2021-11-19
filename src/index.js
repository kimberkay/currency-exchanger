import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  ExchangeRateAPI from './exchangeAPI.js';



function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

$(document).ready(function() {
  $('#exchangeButton').click(function() {
    let usDollars = $("#amount");
    let currency= $("#pickCurrency").val();
    clearFields();
    let promise = ExchangeRateAPI.getRate(currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#showConversion').text(`$${usDollars} is ${body.conversion_rates.currency}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      console.log("made it!")
    });
  });
});