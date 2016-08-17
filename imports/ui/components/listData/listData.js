import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import Chart from 'angular-chart.js';

import template from './listData.html';
import { Touche } from '../../../api/touche';
import { Match } from '../../../api/match';
import { name as chartpie } from '../chartPie/chartPie';

class ListData {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.selectedPrise = null;
    this.selectedMise = null;
    this.selectedFilter = "type";
    this.labels = ["1", "2"];
    this.data = [1, 2];
    this.helpers({
      touche() {
        return Touche.find({});
      },
      match() {
        return Match.find({});
      }
    });
  }
  lol() {
    this.match.forEach((match) => {
      console.log(match._id);
    });
    this.touche.forEach((touche) => {
      console.log(touche.id_match);
    });
  }
}

const name = 'listdata';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  Chart,
  chartpie
]).component(name, {
  template,
  controllerAs: name,
  controller: ListData
}).config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ListData', {
      url: '/ListData',
      template: '<listdata></listdata>'
    });
}