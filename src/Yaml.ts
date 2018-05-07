
export class Yaml {
  private current: any = {};

  put(key: string, value: any) {
    this.current[key] = value;
  }

  output(): string {
    let s = '';
    Object.keys(this.current).forEach(k => {
      s += `${k}: ${this.current[k]}`;
    });
    return s;
  }
}