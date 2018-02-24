import Route from '@ember/routing/route';
import {Promise as EmberPromise} from 'rsvp';
import {later} from '@ember/runloop';

export default Route.extend({
  beforeModel() {
  	return new EmberPromise((resolve) => {
    	later(resolve, 300);
    });
  },
  
  actions: {
  	loading() {
    	return true;
    }
  }
});

