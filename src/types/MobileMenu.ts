export interface MobileMenuType {
  title: string;
  contents: MobileMenuDetail[]
}

export interface MobileMenuDetail {
  content: string;
  href: string | null;
}