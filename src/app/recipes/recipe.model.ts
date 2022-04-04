export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, imagePath: string, desc: string) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
  }
}
