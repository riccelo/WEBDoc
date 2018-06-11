import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatTreeModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
 } from '@angular/material';

@NgModule({
    imports: [
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule, 
        MatButtonModule, 
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatTreeModule,
        MatSelectModule,
        MatCheckboxModule,
        MatMenuModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        FlexLayoutModule,
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatTreeModule,
        MatSelectModule,
        MatCheckboxModule,
        MatMenuModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})

export class CustomMaterial {}