'use strict';

/**
 * @ngdoc overview
 * @name angularRangeSliderApp
 * @description
 * # angularRangeSliderApp
 *
 * Main module of the application.
 */
angular.module('rangeSlider',[])
    .run(['$templateCache',function($templateCache){
   $templateCache.put('../../views/rg-slider.html',
 '<div class="rg-slider">' +
 '<div class="rg-tracker-number outer" data-ng-show="showCurrentValue"><div class="inner"><div class="text">{{(boundVar | number).split(",").join(".")}}</div></div></div>' +
 '<div class="rg-slider-wrapper"> ' +
    '<div data-ng-if="colorBars" data-ng-repeat="color in colorBars track by $index" class="color-bar" data-ng-class="color.class" data-ng-style="{width: color.width, left: color.left}">&nbsp;</div> ' +
    '<div class="rg-trackbar-trail" data-ng-show="showTrackBarTrail"></div> ' +
    '<div data-ng-if="markers" data-ng-repeat="marker in markers track by $index" data-ng-class="{\'overstepped\': (boundVar > marker.atValue)}" class="marker-line {{marker.class}}" data-ng-style="{left: marker.left, height: marker.height}">&nbsp;</div> ' +
    '<div class="rg-slider-trackbar" ng-class="trackBarClass">' +
        '<div class="rg-tracker"  ng-class="trackerClass">' +
            '<div class="selector"></div>' +
        '</div> ' +
    '</div> ' +
    '<div data-ng-show="markers" data-ng-repeat="marker in markers track by $index" class="marker outer" data-ng-style="{left: marker.left}">' +
        '<div class="inner" data-ng-if="marker.text"><div class="text marker-text" data-ng-class="marker.class" data-ng-style="{marginLeft: marker.textLeft}">{{marker.text}}</div></div>' +
    '</div> ' +
 '</div>');
    }]);
