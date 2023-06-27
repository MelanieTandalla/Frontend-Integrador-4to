import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
import { CategoriesDetailsComponent } from './pages/categories/categories-details/categories-details.component';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { NewCategoriesComponent } from './pages/categories/new-categories/new-categories.component';
import { NewInputDetailsComponent } from './pages/input-detail/new-input-details/new-input-details.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        NoFoundPageComponent,
        CategoriesDetailsComponent,
        NewProductComponent,
        NewCategoriesComponent,
        NewInputDetailsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
      AppRoutingModule,
      SharedModule,
        AuthModule,
        PagesModule,
        FormsModule,
    ]
})
export class AppModule {}
