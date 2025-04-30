import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { MainSideComponent } from '../../components/main-side/main-side.component';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { UserProfileComponent } from "../../components/user-profile/user-profile.component";

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    SidenavComponent,
    MainSideComponent,
    CardComponent,
    UserProfileComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isBrowser: boolean;
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0); // inicializa com 0 ou valor default

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() < 768) {
        this.isLeftSidebarCollapsed.set(true);
      }
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
