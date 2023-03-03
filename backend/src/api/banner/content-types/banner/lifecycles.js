module.exports = {
    async afterFindMany(event) {
        const { result, params } = event
        console.log(params);

        const promises = result.map(async (item, i, array) => await strapi.entityService.update('api::banner.banner', array[i].id, {
            data: {
                qtd_views: array[i].qtd_views + 1
            }
        }))
            
        await Promise.all(promises)
    }
}