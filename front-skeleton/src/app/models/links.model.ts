export interface Link {
  name: string
  href: string
  underlineStyle?: { [key: string]: string | number }; // Ajout de la propriété
  // Vous pouvez aussi ajouter iconStyle si nécessaire
  iconStyle?: { [key: string]: string | number };
}
