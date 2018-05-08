
/**
 * Yaml-generation helper class.
 *
 * Currently pretty basic, should use something off-the-shelf, but this
 * is cute/easy and might end up getting prettier-type functionality,
 * e.g. smart wrapping of lists/etc.
 *
 * Note: I tried js-yaml, but it escapes `!Ref Foo`-style shortcuts by
 * wrapping them with quotes. This is technically correct, but I don't
 * see a way to avoid this behavior.
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