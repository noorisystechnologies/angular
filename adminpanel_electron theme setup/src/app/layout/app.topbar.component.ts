import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';
import { DatabaseService } from '../demo/service/database.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    currentTheme: string = 'light';
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService ,
        private router:Router , private database :DatabaseService) { }


    ngOnInit(){
        
    }

    logOut(){
        this.router.navigate(['/'])
        this.database.logout()
    }
    // ngOnInit() {
    //     localStorage.getItem('Light')
    //     // Retrieve the theme from localStorage during initialization
    //     this.currentTheme = localStorage.getItem('Light') || 'light';
    //     document.body.setAttribute('data-theme', this.currentTheme || 'light');
    // }

    // modeToggle() {
    //     this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    //     document.body.setAttribute('data-theme', this.currentTheme);
    //     localStorage.setItem("Light", this.currentTheme)
    // }
}
