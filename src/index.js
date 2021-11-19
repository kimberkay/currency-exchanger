import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  ExchangeRateAPI from './ExchangeAPI.js';





$(document).ready(function() {
  $('#exchangeButton').click(function(response) {
    let usDollars = $("#amount");
    let promise = ExchangeRateAPI.getRate();
    promise.then(function() {
      const body = JSON.parse(response);
      console.log(body);
      $('#showConversion').text(`$${usDollars} is ${body.conversion_rates}`);
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error}`);
      console.log("made it!");
    });
  });
});