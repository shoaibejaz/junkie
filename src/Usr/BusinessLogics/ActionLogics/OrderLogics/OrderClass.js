class OrderClass {
  constructor(
    UserID,
    PerMinuteCost,
    TurnAroundTime,
    NoOfSpeakers,
    TimeStamp,
    TotalCost,
    Status
  ) {
    this._userId = UserID;
    this._minuteCost = PerMinuteCost;
    this._turnAroundTime = TurnAroundTime;
    this._noOfSpeakers = NoOfSpeakers;
    this._timeStamp = TimeStamp;
    this._totalCost = TotalCost;
    this._Status = Status;
  }
}
export default OrderClass;
