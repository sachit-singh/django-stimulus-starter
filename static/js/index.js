import Turbolinks from 'turbolinks';

import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

import './../css/index.css'

const application = Application.start();
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));
Turbolinks.start();
