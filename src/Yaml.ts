
/**
 * Yaml-generated helper class.
 *
 * Currently very low-level/stack-ish, e.g.:
 *
 * - push(key) creates a new level,
 * - put(key, value) puts a simple/list value at current level
 * - pop() goes up a level
 */
export class Yaml {
  private current: any = {};
  private stack: any[] = [];

  put(key: string, value: any) {
    this.current[key] = value;
  }

  push(key: string) {
    const newLevel = {};
    this.current[key] = newLevel;
    this.stack.push(this.current);
    this.current = newLevel;
  }

  pop() {
    this.current = this.stack.pop();
  }

  output(): string {
    let s = '';
    function concat(prefix: string, o: any) {
      Object.keys(o).forEach(k => {
        const v = o[k];
        if (v instanceof Object) {
          s += `${prefix}${k}:\n`
          concat(prefix + ' ', v);
        } else {
          s += `${prefix}${k}: ${o[k]}\n`;
        }
      });
    }
    concat('', this.current);
    return s;
  }
}