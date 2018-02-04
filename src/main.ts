import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/app.module.ngfactory';

console.log('Running AOT compiled');
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);