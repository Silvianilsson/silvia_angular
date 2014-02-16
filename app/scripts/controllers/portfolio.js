'use strict';

angular.module('silviaApp')
  .controller('PortfolioCtrl', function ($scope) {

    $scope.test = 'hejsan';

    var verktyg = ['Sten', 'Sax', 'Påse'];
    var anvandarensPoang = 0;
    var datornsPoang = 0;

    function anvandarenVinner() {
      var spelresultat = angular.element('spelresultat');
      spelresultat.innerHTML = 'Vinst';
      anvandarensPoang += 1;
    }

    function datornVinner() {
      var spelresultat = angular.element('spelresultat');
      spelresultat.innerHTML = 'Förlust';
      datornsPoang += 1;
    }

    function lika() {
      var spelresultat = angular.element('spelresultat');
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
      var datornsValElement = angular.element('datornsVal');
      datornsValElement.innerHTML = datornsVal;
      bestamVinnare(anvandarensVal, datornsVal);
      var anvandarensPoangElement = angular.element('anvandarens_poang');
      anvandarensPoangElement.innerHTML = anvandarensPoang;
      var datornsPoangElement = angular.element('datorns_poang');
      datornsPoangElement.innerHTML = datornsPoang;
      var slutresultat = angular.element('slutresultat');
      if (anvandarensPoang === 3) {
        slutresultat.innerHTML = 'Grattis! Du vann över datorn med ' + (anvandarensPoang - datornsPoang) + 'poäng';
        angular.element('Sten').disabled = true;
        angular.element('Sax').disabled = true;
        angular.element('Påse').disabled = true;
      } else if (datornsPoang === 3) {
        slutresultat.innerHTML = 'Tyvärr du förlorade! Datorn slog dig med ' + (datornsPoang - anvandarensPoang) + 'poäng';
        angular.element('Sten').disabled = true;
        angular.element('Sax').disabled = true;
        angular.element('Påse').disabled = true;
      }
    }
    var sten = angular.element('Sten');
    sten.onclick = function () {
      var anvandarensVal = angular.element('Anvandarens_val');
      anvandarensVal.innerHTML = 'Sten';
      spela('Sten');
    };
    var sax = angular.element('Sax');
    sax.onclick = function () {
      var anvandarensVal = angular.element('Anvandarens_val');
      anvandarensVal.innerHTML = 'Sax';
      spela('Sax');
    };
    var pase = angular.element('Påse');
    pase.onclick = function () {
      var anvandarensVal = angular.element('Anvandarens_val');
      anvandarensVal.innerHTML = 'Påse';
      spela('Påse');
    };

    var borjaOm = angular.element('borja_om');
    borjaOm.onclick = function () {
      anvandarensPoang = 0;
      datornsPoang = 0;
      angular.element('anvandarens_poang').innerHTML = anvandarensPoang;
      angular.element('datorns_poang').innerHTML = datornsPoang;
      angular.element('slutresultat').innerHTML = '';
      angular.element('Sten').disabled = false;
      angular.element('Sax').disabled = false;
      angular.element('Påse').disabled = false;
      angular.element('Anvandarens_val').innerHTML = '';
      angular.element('datornsVal').innerHTML = '';
      angular.element('spelresultat').innerHTML = '';
    };

  });
