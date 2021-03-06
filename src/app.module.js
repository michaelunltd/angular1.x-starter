import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import homeModule from './home';
import todosModule from './todos';

import factories from './factories';

export default angular.module('app', [uirouter, homeModule, todosModule, factories])
    .config(config)