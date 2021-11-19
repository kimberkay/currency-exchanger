import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  ExchangeRateAPI from './ExchangeAPI.js';





$(document).ready(function() {
  $('#form-convert').submit(function(event) {
    event.preventDefault();
    console.log("here i am");
    let usDollars = $("#amount").val();
    console.log(usDollars);
    let promise = ExchangeRateAPI.getRate();
    promise.then(function(response) {
      const result = JSON.parse(response);
      $('#showConversion').text(` is ${result.conversion_rates.AUD}`);
      console.log("made it!");
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error}`);
      console.log("made it!");
    });
  });
});