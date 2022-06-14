export class TimeHelper {
  static HMStoSeconds(hms: string): number {
    const a = hms.split(":"); // split it at the colons
    return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  }

  static secondsToHMS(seconds: number): string {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  }
}
