'use strict';

angular.module('silviaApp')
  .controller('PicturesCtrl', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];

    slides.push({
      image: 'images/vi.JPG',
      text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });

    slides.push({
      image: 'images/sille.JPG',
      text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });

    slides.push({
      image: 'images/sille2.JPG',
      text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });

    slides.push({
      image: 'images/helikopter.JPG',
      text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });

    /*
    $scope.addSlide = function () {
      var newWidth = 600 + slides.length;
      slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i = 0; i < 4; i++) {
      $scope.addSlide();
    }*/
  });
