import BaseBuilder from "../BaseBuilder";
import Esk8palPoint from "./models/Esk8palPoint";

export default class Esk8palBuilder extends BaseBuilder {
  public static MODELS = {
    ...BaseBuilder.MODELS,
    Point: Esk8palPoint,
  };

  public constructor() {
    super();
    this.schemaLocation = [...this.schemaLocation];
    this.data = {
      ...this.data,
      attributes: {
        ...this.data.attributes,
      },
    };
  }
}
