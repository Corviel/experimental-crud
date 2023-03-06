"use strict";
/**
 * banner controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

const BANNER_API_URL = "api::banner.banner";

module.exports = createCoreController(BANNER_API_URL, ({ strapi }) => ({
  async find(ctx) {
    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    strapi.service(BANNER_API_URL).increaseBannerViewCount(data, BANNER_API_URL)

    return { data, meta };
  },
}));
