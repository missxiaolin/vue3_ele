
/**
 * 驼峰转换横杠连接
 * @param value 
 */
export const toLine = (value: string) => {
    return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}