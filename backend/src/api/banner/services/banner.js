"use strict";

/**
 * banner service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::banner.banner", ({ strapi }) => ({
  async increaseBannerViewCount(data, url) {
    // Increasing the view count (qtd_views field value)
    const promises = data.map(async (item) =>
      strapi.entityService.update(url, item.id, {
        data: {
          qtd_views: item.attributes.qtd_views + 1,
        },
      })
    );
    await Promise.all(promises)
  },
}));
