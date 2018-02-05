import { Component, OnInit } from '@angular/core';
import { AppCompService } from './appComp.services';
import { AppModuleService } from './appModule.services';

declare var $: any;

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1 class="welcome">
        Welcome to {{title}}!
      </h1>
      <h2>{{ChangeDetect}}</h2>
      <h2 id="show-jquery"></h2>
      <h2>{{appModuleServiceData}}</h2>
      <h2>{{appCompServiceData}}</h2>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
  `,
  styleUrls: ['app.component.css'],
  styles: ['.welcome {background-color: gray;}'],
  providers: [AppCompService]
})
export class AppComponent implements OnInit {
  title = 'aot demo';
  ChangeDetect = '';

  appCompServiceData = '';
  appModuleServiceData = '';

  constructor(appCompService: AppCompService,
    appModuleService: AppModuleService) {
    this.appCompServiceData = appCompService.data;
    this.appModuleServiceData = appModuleService.data;
  }

  ngOnInit() {
    $('#show-jquery').text("import jquery successfully!").css("color", "red");
    setTimeout(() => this.ChangeDetect = 'Angular change detection works!', 1500);
  }
}
