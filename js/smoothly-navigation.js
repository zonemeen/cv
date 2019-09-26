!function() {
    let liTags = document.querySelectorAll('nav.menu > ul > li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }

    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    // Setup the animation loop.
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault()
            //let a = x.currentTarget //获取a标签
            //let href = a.getAttribute('href') //'siteSkills'
            //let element = document.querySelector(href) //得到元素
            //let top = element.offsetTop //得到element离顶部不变的距离
            let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop

            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop
            var coords = { y: currentTop } // Start at (y:currentTop)
            var t = Math.abs((s / 100) * 300)
            if (t > 500) {
                t = 500
            }
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: targetTop }, t) // Move to (y: targetTop) in 1 second.
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y)
                })
                .start(); // Start the tween immediately.
        }
    }
}.call()

