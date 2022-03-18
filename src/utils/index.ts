/**
 * 驼峰转换横杠连接
 * @param value
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};

/**
 * 秒转化成 时分秒
 * @param second
 * @returns
 */
export function second(second: number) {
  second = second || 0;
  if (second === 0 || second === Infinity || second.toString() === "NaN") {
    return "00:00";
  }
  const add0 = (num: number) => (num < 10 ? "0" + num : "" + num);
  const hour = Math.floor(second / 3600);
  const min = Math.floor((second - hour * 3600) / 60);
  const sec = Math.floor(second - hour * 3600 - min * 60);
  return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(":");
}
