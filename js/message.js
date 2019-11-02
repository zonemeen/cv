// !function () {
//   var view = View('section.message')

//   var model = Model({resourceName:'Message'})

//   var controller = Controller({
//     init: function(view, controller){
//       this.messageList = view.querySelector('#messageList')
//       this.form = view.querySelector('form')
//       this.loadMessages()
//     },
//     loadMessages: function () {
//       this.model.fetch().then((messages) => {
//         let array = messages.map((item) => item.attributes)
//         array.forEach((item) => {
//           let li = document.createElement('li')
//           li.innerText = `${item.name}: ${item.content}`
//           this.messageList.appendChild(li)
//         })
//       })
//     },
//     bindEvents: function () {
//       this.form.addEventListener('submit', (e) => {
//         e.preventDefault()
//         this.saveMessage()
//       })
//     },
//     saveMessage: function () {
//       let myForm = this.form
//       let content = myForm.querySelector('input[name=content]').value
//       let name = myForm.querySelector('input[name=name]').value
//       this.model.save({
//         'name': name, 'content': content}).then(function (object) {
//         let li = document.createElement('li')
//         li.innerText = `${object.attributes.name}: ${object.attributes.content}`
//         let messageList = document.querySelector('#messageList')
//         messageList.appendChild(li)
//         myForm.querySelector('input[name=content]').value = ''
//         myForm.querySelector('input[name=name]').value = ''
//         console.log(object)
//       })
//     }
//   })
//   controller.init(view, model)
// }.call()

{
  let APP_ID = 'tlWx7uOdL7tCxFEiI7tGnKhk-gzGzoHsz';
  let APP_KEY = 'NIbjwxH5o2pzWtz3A3mOJUn5';
  let timeArray = []

  AV.init({
      appId: APP_ID,
      appKey: APP_KEY
  });

  let form = document.querySelector('#seitmessage form')
  form.addEventListener('submit', (e) => {
      let value = form.firstElementChild.value
      e.preventDefault()
      let Messages = AV.Object.extend('Messages');
      let messages = new Messages();
      if (value != '') {
          let name = prompt('请输入您的名字', '')
          messages.set('message', value);
          messages.set('name', name);
          messages.save().then(function (testObject) {
              alert('提交成功')
              form.firstElementChild.value = ''
              location.reload()
          })
      } else {
          alert('请输入内容')
      }

  })
  var query = new AV.Query('Messages');
  query.find().then(function (messages) {
      messages.reverse()
      let array = messages.map((items) => {
          return { 'message': items.attributes.message, 'id': items.attributes.name }
      })
      for (let i = 0; i < array.length; i++) {
          let li = createElement('li')
          let div = createElement('div')
          document.querySelector('#seitmessage main>ol').appendChild(li).appendChild(div)
          let div1 = document.querySelectorAll('#seitmessage main>ol li>div')
          let div2 = createElement('div')
          let div3 = createElement('div')
          let div4 = createElement('div')
          let div5 = createElement('div')
          let div6 = createElement('div')
          let dateArray = new Date(messages[i].updatedAt)
          let img = createElement('img')
          let time = dateArray.getFullYear() + '.' + (dateArray.getMonth() + 1) + '.' + dateArray.getDate()

          div5.textContent = array[i].id
          div6.textContent = time
          img.src = "./img/timg.jpeg"
          div2.textContent = array[i].message
          div1[i].appendChild(div2).classList.add('userMessage')
          div1[i].appendChild(div3).classList.add('userName')
          div1[i].lastElementChild.appendChild(img)
          div1[i].lastElementChild.appendChild(div4).appendChild(div5)
          div1[i].lastElementChild.appendChild(div4).appendChild(div6)
      }
  });

  function createElement(element) {
      return document.createElement(element)
  }

}

