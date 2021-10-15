import { request } from "./request"

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  })
}

export function getRecommend() {
  return request({
    url: "/recommend",
  })
}

export class Goods {
  // constructor 接收的是传进来的三个对象并赋给对象实例
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.goodsCount = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
export class Params {
  constructor(info, rule) {
    this.img = info.images ? info.images[0] : ""
    this.infos = info.set
    this.sizes = rule.tables
  }
}
