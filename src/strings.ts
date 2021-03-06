export function prependEach (elem: string, array: string[]): string[] {
  const init: string[] = [];
  return array.reduce((r, a) => r.concat(elem, a), init)
};
  
export function nonEmptySplit (str: string, separator): string[] {
  return str.split(separator).filter(word => word != "")
}