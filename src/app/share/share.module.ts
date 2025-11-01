import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterModule } from "@angular/router";

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Service
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// PrimeNG
import { PrimeNGConfig } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                  //api
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TableModule } from 'primeng/table';
import { ToastModule } from "primeng/toast";
import { MessagesModule } from "primeng/messages";
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ImageModule } from 'primeng/image';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FieldsetModule } from 'primeng/fieldset';
import { BadgeModule } from 'primeng/badge';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        AccordionModule,
        SidebarModule,
        ButtonModule,
        CascadeSelectModule,
        BrowserAnimationsModule,
        // FontAwesomeModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule,
        DialogModule,
        InputTextModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        RadioButtonModule,
        DropdownModule,
        InputSwitchModule,
        TabViewModule,
        InputMaskModule,
        AutoCompleteModule,
        FileUploadModule,
        CalendarModule,
        TooltipModule,
        PasswordModule,
        InputNumberModule,
        CheckboxModule,
        CardModule,
        PaginatorModule,
        ToggleButtonModule,
        PanelMenuModule,
        OverlayPanelModule,
        ImageModule,
        DataViewModule,
        GalleriaModule,
        CarouselModule,
        MessagesModule,
        InputTextareaModule,
        KeyFilterModule,
        FieldsetModule,
        BadgeModule,
        SkeletonModule,
        // BrowserAnimationsModule 
    ],
    exports: [
        CommonModule,
        AccordionModule,
        SidebarModule,
        ButtonModule,
        CascadeSelectModule,
        BrowserAnimationsModule,
        // FontAwesomeModule,
        TableModule,
        ToastModule,
        MessagesModule,
        ConfirmDialogModule,
        DialogModule,
        InputTextModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        RadioButtonModule,
        DropdownModule,
        InputSwitchModule,
        TabViewModule,
        InputMaskModule,
        AutoCompleteModule,
        FileUploadModule,
        CalendarModule,
        TooltipModule,
        PasswordModule,
        InputNumberModule,
        CheckboxModule,
        CardModule,
        PaginatorModule,
        PanelMenuModule,
        OverlayPanelModule,
        FieldsetModule,
        BadgeModule,
        SkeletonModule,
        ToggleButtonModule,
        ImageModule,
        DataViewModule,
        DataViewLayoutOptions,
        GalleriaModule,
        CarouselModule,
        InputTextareaModule,
        KeyFilterModule,
        // BrowserAnimationsModule 
    ],
    providers: [MessageService, ConfirmationService,],
})
export class ShareModule { }
