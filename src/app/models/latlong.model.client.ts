/**
 * Created by hemanthshetty on 12/13/17.
 */

export class LatLong {
  public lat;
  public lng;
  public id: string;
  public name: string;





  constructor(lat,lng,id:string,name:string) {
    this.lat = lat;
    this.lng = lng;
    this.id =  id;
    this.name =  name;
  }
}


