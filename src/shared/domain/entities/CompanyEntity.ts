export class CompanyEntity {
  public name: string
  public image: string
  public desc: string
  public link: string
  public contact?: string

  constructor(
    name: string,
    image: string,
    desc: string,
    link: string,
    contact?: string
  ) {
    this.name = name
    this.image = image
    this.desc = desc
    this.link = link
    this.contact = contact
  }
}
