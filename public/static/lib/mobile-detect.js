;(function (win) {
    var orgLink = win.location.href
    var newLink = ''
    if (orgLink.indexOf('&mobile=true') != -1) {
        Object.defineProperty(navigator, 'userAgent', {
            value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            writable: false,
        })
    } else if (/iPhone|iPad|Android/i.test(win.navigator.userAgent)) {
        if (orgLink.indexOf('pg.html') !== -1) {
            newLink = orgLink.replace('pg.html', 'mg.html')
        }
    } else {
        if (orgLink.indexOf('mg.html') !== -1) {
            newLink = orgLink.replace('mg.html', 'pg.html')
        }
    }
    if (newLink) {
        win.location.href = newLink
    }
})(window)
