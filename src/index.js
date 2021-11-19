import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  ExchangeRateAPI from './ExchangeAPI.js';

function clearFields() {
  $('#amount').val("");
  $('#showErrors').text("");
  $('.showConversion').text("");
}


$(document).ready(function() {
  $('#form-convert').submit(function(event) {
    event.preventDefault();
    let usDollars = $("#amount").val();
    let currency = $("#pickCurrency").val();
    function conversion(amount,currency) {
        if (currency === AUD) {
         return result.conversion_rates.AUD * usDollars;
       } else if (currency === EUR) {
          return result.conversion_rates.EUR * usDollars;
        } else if (currency === JPY) {
         return result.conversion_rates.JPY * usDollars;
        } else if (currency === MXN) {
          return result.conversion_rates.MXN * usDollars;
        } else {
          return result.conversion_rates.GBP * usDollars;
        }
      } 
    clearFields();
    let promise = ExchangeRateAPI.getRate();
    promise.then(function(response) {
      const result = JSON.parse(response);
      $('#showConversion').text(` is ${result.conversion_rates.AUD}`);
      console.log("made it!");
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});