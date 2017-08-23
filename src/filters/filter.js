// 留存读者人数
export function BookListCount (val) {
  if (val >= 10000) {
    let num = val / 10000
    num = num.toFixed(1)
    return num + '万'
  } else {
    return val
  }
}

// 留存读者人数
export function BookCount (val) {
  if (val >= 10000) {
    let num = parseInt(val / 10000)
    return num + '万'
  } else {
    return val
  }
}

// 图片根路径
export function imgPath (val) {
  if (val) {
    if (val.indexOf('http://statics.zhuishushenqi.com') > -1) {
      return val
    } else {
      return 'http://statics.zhuishushenqi.com' + val
    }
  }
  // if (val !== '') {
  //   return 'http://statics.zhuishushenqi.com' + val
  // }
}
