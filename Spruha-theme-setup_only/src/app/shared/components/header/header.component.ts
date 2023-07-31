import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  public isSidebar = false;
  public config: any = {};
  layoutSubscription: Subscription;
  toggleClass = "fe fe-maximize";
  
  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    public switcherService: SwitcherService,
    private authService : AuthService
  ) {
    this.layoutSubscription = layoutService.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;
      }
    )
   
  }

  ngOnInit(): void {
  }
  categories = [
    { id: 1, name: 'IT Projects' },
    { id: 2, name: 'Business Case' },
    { id: 3, name: 'Microsoft Project' },
    { id: 4, name: 'Risk Management' },
    { id: 5, name: 'Team Building' },
  ]

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }


  toggleSwitcher() {
    let emit:any = false;
    if(emit != !emit) {
      emit = !emit
      this.switcherService.emitSwitcherChange(emit);
    }
  }
  providerLogout() {
    this.authService.providerLogout()
  }
}

