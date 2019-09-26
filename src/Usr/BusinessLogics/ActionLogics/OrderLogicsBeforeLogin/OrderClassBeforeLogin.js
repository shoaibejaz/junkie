class OrderClass {
  constructor(
    FilePath,
    FileName,
    FileSize,
    TurnAroundTime,
    NoOfSpeakers,
    TimeStamp,
    Verbitam,
    TotalCost,
    FileDuration,
    SecondsDuration
  ) {
    this._filePath = FilePath;
    this._fileName = FileName;
    this._fileSize = FileSize;
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
