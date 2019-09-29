/*
var model = Model({
  resourceName: '表名'
})
*/

window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'RGtCuRgKv4G4ezvLaEu9jGxL-gzGzoHsz'
            var APP_KEY = 'oivD4n5NaYjamGxCXrg9CCpN'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find() // Promise 对象
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object) // Promise 对象
        }
    }
}