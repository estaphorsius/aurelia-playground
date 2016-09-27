import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .feature("resources")
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot());
}
