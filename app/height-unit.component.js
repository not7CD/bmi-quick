angular.
  module('bmiQuick').
  component('heightUnit', {
    template:
    // '<div class="input-group-btn">'+
    '<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> TODO <span class="caret"></span></button>'+
    '<ul class="dropdown-menu dropdown-menu-right">'+
    '  <li ng-repeat="unit in $ctrl.units"><a href="#">{{unit.fullname}}</a></li>'+
    '  <li role="separator" class="divider"></li>'+
    '  <li><a href="#">Guess</a></li>'+
    '</ul>'
    // +
    // '</div>'
    ,
    controller: function HeightUnitListController() {
      this.units = [
        {
          name: 'cm',
          fullname: 'centimeters'
        }, {
          name: 'm',
          fullname: 'meters'
        },{
          name: 'ft',
          fullname: 'foots'
        }, {
          name: 'in',
          fullname: 'inches'
        }
      ];
    }
  });
