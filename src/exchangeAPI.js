export default class ExchangeRateAPI {
  static getRate() {
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/38818702c3633d572ba49b0c/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

//const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;