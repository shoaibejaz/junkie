import UserDataClass from "./UserDataClass";
class DisplayAllOrdersClass {
  constructor(element) {
    this.orderid = element.orderid;
    this.fileduration = element.fileduration;
    this.filename = element.filename;
    this.filepath = element.filepath;
    this.minutecost = element.minutecost;
    this.noofspeaker = element.noofspeaker;
    this.paypalstatus = element.paypalstatus;
    this.startorder = element.startorder;
    this.status = element.status;
    this.submitorder = element.submitorder;
    this.taroundtime = element.taroundtime;
    this.timestamp = element.timestamp;
    this.totlcost = element.totlcost;
    this.verbitam = element.verbitam;
    this.workedfilename = element.workedfilename;
    this.workedfilepath = element.workedfilepath;
    this.userid = new UserDataClass(element.userid);
  }
}
export default DisplayAllOrdersClass;
