module.exports = {
    async afterFindMany(event) {
        const { result } = event

        result.forEach(async function(item, i) {
            const entry = await strapi.entityService.update('api::banner.banner', this[i].id, {
                data: {
                    qtd_views: this[i].qtd_views + 1
                }
            })
            console.log(entry.qtd_views);
        }, result)
    }
}