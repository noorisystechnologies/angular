
**Step 1 :** npm install @angular/cdk @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons ngx-sharebuttons

**Step 2 :** Configure the ngx-sharebuttons library. Change the angular.json file and add the circles-dark-theme.scss file as below.

"styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "node_modules/ngx-sharebuttons/themes/circles.scss",
  "node_modules/ngx-sharebuttons/themes/modern.scss",
  "src/styles.scss"
],

**Step 3 :** Import the ShareButtonsModule and ShareIconsModule modules. Change the app.module.ts file and add the lines as below.

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

imports: [
  BrowserModule,
  AppRoutingModule,
  ShareButtonsModule,
  ShareIconsModule,
],

**Step 4 :**  Remove the contents of the src/app/app.component.html file. Add the buttons component as below.

<div class="container-fluid py-3">
  <h1>Angular Share Buttons</h1>

  <share-buttons theme="circles-dark"
    [include]="['copy', 'facebook', 'email', 'messenger', 'mix', 'line', 'linkedin', 'pinterest', 'print', 'reddit', 'sms', 'telegram', 'tumblr', 'twitter', 'viber', 'vk', 'xing', 'whatsapp']"
    [showIcon]="true"
    [showText]="false"
    url="https://rodrigo.kamada.com.br/"
    description="Angular Share Buttons"
    twitterAccount="rodrigokamada"
    class="pt-5">
  </share-buttons>

  <share-buttons theme="modern-dark"
    [include]="['copy', 'facebook', 'email', 'messenger', 'mix', 'line', 'linkedin', 'pinterest', 'print', 'reddit', 'sms', 'telegram', 'tumblr', 'twitter', 'viber', 'vk', 'xing', 'whatsapp']"
    [showIcon]="true"
    [showText]="true"
    url="https://rodrigo.kamada.com.br/"
    description="Angular Share Buttons"
    twitterAccount="rodrigokamada"
    class="pt-5">
  </share-buttons>

  <share-buttons theme="modern-dark"
    [include]="['copy', 'facebook', 'email', 'messenger', 'mix', 'line', 'linkedin', 'pinterest', 'print', 'reddit', 'sms', 'telegram', 'tumblr', 'twitter', 'viber', 'vk', 'xing', 'whatsapp']"
    [showIcon]="false"
    [showText]="true"
    url="https://rodrigo.kamada.com.br/"
    description="Angular Share Buttons"
    twitterAccount="rodrigokamada"
    class="pt-5">
  </share-buttons>
</div>

**Step 5 :** Run the application with the command below.
        ng serve


