import { BrowserModule } from '@angular/platform-browser';
import { JsonApiModule } from 'angular2-jsonapi';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePicker } from '@ionic-native/date-picker';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Datastore } from '../providers/datastore/datastore';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { PostService } from "../providers/post-service/post-service";
import { IonicStorageModule } from '@ionic/storage';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { CommentServiceProvider } from '../providers/comment-service/comment-service';
import { ContentTypeServiceProvider } from '../providers/content-type-service/content-type-service';
import { GoogleMaps } from "@ionic-native/google-maps";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { LocationServiceProvider } from '../providers/location-service/location-service';
import { StatusServiceProvider } from '../providers/status-service/status-service';
import { LocationTypeServiceProvider } from '../providers/location-type-service/location-type-service';
import { RatingServiceProvider } from '../providers/rating-service/rating-service';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { Ionic2RatingModule } from "ionic2-rating";
import { Geolocation } from '@ionic-native/geolocation';
import { StreetViewServiceProvider } from '../providers/street-view-service/street-view-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AssignmentServiceProvider } from '../providers/assignment-service/assignment-service';
import { AssignmentTypeServiceProvider } from '../providers/assignment-type-service/assignment-type-service';
import { AnswerServiceProvider } from '../providers/answer-service/answer-service';
import { UserAnswerServiceProvider } from '../providers/user-answer-service/user-answer-service';
import { AnswerTypeServiceProvider } from '../providers/answer-type-service/answer-type-service';
import { PostTypeServiceProvider } from "../providers/post-type-service/post-type-service";
import { Camera } from '@ionic-native/camera';
import { PictureService } from "../providers/picture-service/picture-service";
import { DiscoveryService } from "../providers/discovery-service/discovery-service";
import { Base64 } from "@ionic-native/base64";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    JsonApiModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AlertServiceProvider,
    Datastore,
    DatePicker,
    PostService,
    CommentServiceProvider,
    ContentTypeServiceProvider,
    GoogleMaps,
    AndroidPermissions,
    ScreenOrientation,
    LocationServiceProvider,
    StatusServiceProvider,
    LocationTypeServiceProvider,
    RatingServiceProvider,
    ThemeServiceProvider,
    Geolocation,
    StreetViewServiceProvider,
    InAppBrowser,
    AssignmentServiceProvider,
    AssignmentTypeServiceProvider,
    Geolocation,
    AnswerServiceProvider,
    UserAnswerServiceProvider,
    AnswerTypeServiceProvider,
    PostTypeServiceProvider,
    DiscoveryService,
    Camera,
    PictureService,
    Base64,
    PostTypeServiceProvider
  ]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
