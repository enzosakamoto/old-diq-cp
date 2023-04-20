export class CompanyEntity {
  private name!: string;
  private image!: string;
  private desc: string;
  private link: string;
  private contact?: string;

  constructor(
    name: string,
    image: string,
    desc: string,
    link: string,
    contact?: string
  ) {
    this.name = name;
    this.image = image;
    this.desc = desc;
    this.link = link;
    this.contact = contact;

    // Trocar imagem string por StaticImageData
  }

  public getName(): string {
    if (this.name === undefined) {
      return "Error";
    }
    return this.name;
  }

  public getImage(): string {
    if (this.image === undefined) {
      return "@/assets/error.svg";
    }
    return this.image;
  }

  public getDesc(): string {
    return this.desc;
  }

  public getLink(): string {
    return this.link;
  }

  public getContact(): string {
    if (this.contact === undefined) {
      return "Sem informações de contato";
    }
    return this.contact;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setImage(image: string): void {
    this.image = image;
  }

  public setDesc(desc: string): void {
    this.desc = desc;
  }

  public setLink(link: string): void {
    this.link = link;
  }

  public setContact(contact: string): void {
    this.contact = contact;
  }
}
