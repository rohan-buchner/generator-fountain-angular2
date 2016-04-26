/// <reference path="../../typings/main.d.ts"/>
<% if (modules === 'webpack') { -%>
/// <reference path="../../node_modules/angular2/typings/browser.d.ts"/>
<% } -%>

<% if (modules === 'webpack') { -%>
import 'zone.js/dist/zone';
<% } -%>
import 'zone.js/dist/async-test';
import {Component} from 'angular2/core';
import {Main} from './main';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import {Header} from './header';
import {Title} from './title';
import {describe, it, expect, inject, async, TestComponentBuilder, setBaseTestProviders} from 'angular2/testing';
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from 'angular2/platform/testing/browser';

@Component({
  selector: 'Techs',
  template: ''
})
class MockTechs {}
@Component({
  selector: 'Footer',
  template: ''
})
class MockFooter {}
@Component({
  selector: 'Header',
  template: ''
})
class MockHeader {}
@Component({
  selector: 'Title',
  template: ''
})
class MockTitle {}

describe('main component', () => {
  setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

  it('should render the header, title, techs and footer', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb
      .overrideDirective(Main, Techs, MockTechs)
      .overrideDirective(Main, Footer, MockFooter)
      .overrideDirective(Main, Header, MockHeader)
      .overrideDirective(Main, Title, MockTitle)
      .createAsync(Main)
      .then(fixture => {
        fixture.detectChanges();
        const main = fixture.nativeElement;
        expect(main.querySelector('Header')).toBeDefined();
        expect(main.querySelector('TitleComponent')).toBeDefined();
        expect(main.querySelector('Techs')).toBeDefined();
        expect(main.querySelector('Footer')).toBeDefined();
      });
  })));
});