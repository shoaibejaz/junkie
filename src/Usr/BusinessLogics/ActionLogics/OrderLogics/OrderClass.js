class OrderClass {
  constructor(
    UserID,
    FilePath,
    FileName,
    TurnAroundTime,
    NoOfSpeakers,
    TimeStamp,
    Verbitam,
    TotalCost,
    FileDuration,
    SecondsDuration
  ) {
    this._userId = UserID;
    this._filePath = FilePath;
    this._fileName = FileName;
    this._turnAroundTime = TurnAroundTime;
    this._noOfSpeakers = NoOfSpeakers;
    this._timeStamp = TimeStamp;
    this._verbitam = Verbitam;
    this._totalCost = TotalCost;
    this._fileDuration = FileDuration;
    this._secondsDuration = SecondsDuration;
  }
}
export default OrderClass;
