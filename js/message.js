var APP_ID = 'RGtCuRgKv4G4ezvLaEu9jGxL-gzGzoHsz';
var APP_KEY = 'oivD4n5NaYjamGxCXrg9CCpN';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.set('content', content);
    message.save().then(function (object) {
        console.log('存入成功')
        console.log(object)
    })
})

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.set('words', 'Hello world!');
// testObject.save().then(function (testObject) {
//   console.log('保存成功。')
// })