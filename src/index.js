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