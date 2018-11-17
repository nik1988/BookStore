export class LocalUrl{

  private static LOCAL_URL:string = "http:/\\localhost:8282";

  public static getLocalUrl(){
    return LocalUrl.LOCAL_URL;
  }

}
