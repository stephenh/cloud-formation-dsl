
/**
 * Yaml-generation helper class.
 *
 * Currently pretty basic, should use something off-the-shelf, but this
 * is cute/easy and might end up getting prettier-type functionality.
 */
export class Yaml {

  output(top: any): string {
    let s = '';
    function concat(prefix: string, o: any) {
      Object.keys(o).forEach(k => {
        const v = o[k];
        if (v instanceof Object) {
          s += `${prefix}${k}:\n`
          concat(prefix + '  ', v);
        } else {
          s += `${prefix}${k}: ${o[k]}\n`;
        }
      });
    }
    concat('', top);
    return s;
  }
}