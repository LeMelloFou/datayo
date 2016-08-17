import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './salutRemove.html';
import { Touche } from '../../../api/touche';
 
class SalutRemove {
  remove() {
    if (this.data) {
      Touche.remove(this.data._id);
    }
  }
}
 
const name = 'salutRemove';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    data: '<'
  },
  controllerAs: name,
  controller: SalutRemove
});