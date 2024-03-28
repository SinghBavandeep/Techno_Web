import { Component } from "@angular/core";
import { Link } from "models/links.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = [
    { name: "Accueil", href: "/etudiants" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  constructor() {}

  toggleUnderline(link: Link, isHovering: boolean): void {
    if (isHovering) {
      link.underlineStyle = { width: '70%' };
      link.iconStyle = {
        opacity: '1',
        transform: 'translateX(-40%)' // Image will now start from its original position
      };
    } else {
      link.underlineStyle = { width: '0' };
      link.iconStyle = {
        opacity: '0',
        transform: 'translateX(-150%)' // Return to centered when not hovering
      };
    }
  }
}
