'use strict';

angular.module('silviaApp')
  .controller('PortfolioCtrl', function ($scope) {

    $scope.test = 'hejsan';

    var verktyg = ['Sten', 'Sax', 'Påse'];
    var anvandarensPoang = 0;
    var datornsPoang = 0;

    function anvandarenVinner() {
      var spelresultat = document.getElementById('spelresultat');
      spelresultat.innerHTML = 'Vinst';
      anvandarensPoang += 1;
    }

    function datornVinner() {
      var spelresultat = document.getElementById('spelresultat');
      spelresultat.innerHTML = 'Förlust';
      datornsPoang += 1;
    }

    function lika() {
      var spelresultat = document.getElementById('spelresultat');
      spelresultat.innerHTML = 'lika';
    }

    function bestamVinnare(anvandarensVal, datornsVal) {
      if (anvandarensVal === datornsVal) {
        lika();
        return;

      }
      if (anvandarensVal === 'Sten') {
        if (datornsVal === 'Sax') {
          anvandarenVinner();
        } else if (datornsVal === 'Påse') {
          datornVinner();
        }
      } else if (anvandarensVal === 'Sax') {
        if (datornsVal === 'Sten') {
          datornVinner();
        } else if (datornsVal === 'Påse') {
          anvandarenVinner();
        }
      } else if (anvandarensVal === 'Påse') {
        if (datornsVal === 'Sten') {
          anvandarenVinner();
        } else if (datornsVal === 'Sax') {
          datornVinner();
        }
      }
    }

    function spela(anvandarensVal) {
      var slumptal = Math.floor((Math.random() * 3));
      var datornsVal = verktyg[slumptal];
      var datornsValElement = document.getElementById('datornsVal');
      datornsValElement.innerHTML = datornsVal;
      bestamVinnare(anvandarensVal, datornsVal);
      var anvandarensPoangElement = document.getElementById('användarens_poäng');
      anvandarensPoangElement.innerHTML = anvandarensPoang;
      var datornsPoangElement = document.getElementById('datorns_poäng');
      datornsPoangElement.innerHTML = datornsPoang;
      var slutresultat = document.getElementById('slutresultat');
      if (anvandarensPoang === 3) {
        slutresultat.innerHTML = 'Grattis! Du vann över datorn med ' + (anvandarensPoang - datornsPoang) + 'poäng';
        document.getElementById('Sten').disabled = true;
        document.getElementById('Sax').disabled = true;
        document.getElementById('Påse').disabled = true;
      } else if (datornsPoang === 3) {
        slutresultat.innerHTML = 'Tyvärr du förlorade! Datorn slog dig med ' + (datornsPoang - anvandarensPoang) + 'poäng';
        document.getElementById('Sten').disabled = true;
        document.getElementById('Sax').disabled = true;
        document.getElementById('Påse').disabled = true;
      }
    }
    var sten = document.getElementById('Sten');
    sten.onclick = function (event) {
      var anvandarensVal = document.getElementById('Användarens_val');
      anvandarensVal.innerHTML = 'Sten';
      spela('Sten');
    };
    var sax = document.getElementById('Sax');
    sax.onclick = function (event) {
      var anvandarensVal = document.getElementById('Användarens_val');
      anvandarensVal.innerHTML = 'Sax';
      spela('Sax');
    };
    var pase = document.getElementById('Påse');
    pase.onclick = function (event) {
      var anvandarensVal = document.getElementById('Användarens_val');
      anvandarensVal.innerHTML = 'Påse';
      spela('Påse');
    };

    var borjaOm = document.getElementById('börja_om');
    borjaOm.onclick = function (event) {
      anvandarensPoang = 0;
      datornsPoang = 0;
      document.getElementById('användarens_poäng').innerHTML = anvandarensPoang;
      document.getElementById('datorns_poäng').innerHTML = datornsPoang;
      document.getElementById('slutresultat').innerHTML = '';
      document.getElementById('Sten').disabled = false;
      document.getElementById('Sax').disabled = false;
      document.getElementById('Påse').disabled = false;
      document.getElementById('Användarens_val').innerHTML = '';
      document.getElementById('datornsVal').innerHTML = '';
      document.getElementById('spelresultat').innerHTML = '';
    };

  });
