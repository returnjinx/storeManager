var browser = {
  mobileVersion(e, t) {
    var i = window.navigator.userAgent,
      n = i.match(e);
    return (
      (n = n ? n[1].split(t) : []),
      {
        major: parseInt(n[0]) || 0,
        minor: parseInt(n[1]) || 0,
        patch: parseInt(n[2]) || 0,
      }
    );
  },
  isFullscreen() {
    return document.fullscreenElement || document.mozFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  },
  supportsFullscreen() {
    return document.fullscreenEnabled || document.mozFullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
  },
  isPointerLocked() {
    return document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement;
  },
  requestFullscreen(dom, t) {
    dom.requestFullscreen
      ? dom.requestFullscreen()
      : dom.mozRequestFullScreen
      ? dom.mozRequestFullScreen()
      : dom.webkitRequestFullscreen
      ? dom.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
      : dom.msRequestFullscreen && dom.msRequestFullscreen(),
      t && $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', browser.requestPointerLock);
  },
  requestPointerLock() {
    var e;
    if (document.fullscreenElement) e = document.fullscreenElement();
    else if (document.mozFullscreenElement) e = document.mozFullscreenElement();
    else if (document.mozFullScreenElement) e = document.mozFullScreenElement();
    else {
      if (!document.webkitFullscreenElement) return;
      e = document.webkitFullscreenElement();
    }
    (e.requestPointerLock = e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock),
      e.requestPointerLock(),
      $(document).off('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', this);
  },
  exitPointerLock() {
    (document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock), document.exitPointerLock();
  },
  exitFullscreen() {
    document.exitFullscreen
      ? document.exitFullscreen()
      : document.msExitFullscreen
      ? document.msExitFullscreen()
      : document.mozCancelFullScreen
      ? document.mozCancelFullScreen()
      : document.webkitExitFullscreen && document.webkitExitFullscreen();
  },
  details() {
    var e = navigator.userAgent.match('(Firefox|Chrome|Safari)/([\\d]+)');
    return e
      ? {
          name: e[1],
          version: parseInt(e[2]),
          platform: navigator.platform,
        }
      : {};
  },
  is(e) {
    return this.details() && this.details().name === e;
  },
  inIframe() {
    return window.parent !== window;
  },
  aspectRatio() {
    var e = window.innerWidth / window.innerHeight;
    return isFinite(e) ? e : 0;
  },
  userAgent() {
    return window.navigator.userAgent;
  },
  isMobile() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4)
      )
    );
  },
  isLandscape() {
    return this.isMobile && this.aspectRatio() > 1;
  },
  isSmallScreen() {
    var e = screen.width / window.devicePixelRatio;
    return e < 240;
  },
  detectWeixin: function () {
    //微信 包括PC的微信
    return window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
  },
  detectWeixinMiniProgram: function () {
    return window.navigator.userAgent.match('miniProgram');
  },
  detectIE() {
    var e = window.navigator.userAgent,
      t = e.indexOf('MSIE ');
    return t !== -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
  },
  detectSafari() {
    var e = window.navigator.userAgent,
      t = e.indexOf('Safari');
    return t !== -1 && !this.detectChrome();
  },
  detectFirefox() {
    var e = window.navigator.userAgent;
    return e.indexOf('Firefox') !== -1;
  },
  detectChrome() {
    var e = window.navigator.userAgent;
    return e.indexOf('Chrome') !== -1 && !this.detectOpera();
  },
  detectOpera() {
    var e = window.navigator.userAgent;
    return e.indexOf('OPR') !== -1;
  },
  detectIOS() {
    return this.detectIPhone() || this.detectIPad() || this.detectIPod();
  },
  detectIPad() {
    var e = window.navigator.userAgent,
      t = /iPad/;
    return t.test(e);
  },

  detectIPhone() {
    var e = window.navigator.userAgent,
      t = /iPhone/;
    return t.test(e);
  },
  detectAndroid() {
    var e = window.navigator.userAgent;
    return e.indexOf('Android') !== -1;
  },
  detectAndroidMobile() {
    var e = window.navigator.userAgent;
    return this.detectAndroid() && e.indexOf('Mobile') !== -1;
  },

  iosVersion() {
    if (!this.detectIOS()) throw new DeviceMismatchException('Did not detect an iDevice');
    var e = /((?:\d+\_?){1,3}) like Mac OS/,
      t = '_';
    return this.mobileVersion(e, t);
  },
  androidVersion() {
    if (!this.detectAndroid()) throw new DeviceMismatchException('Did not detect an Android based device');
    var e = /Android ((?:\d+\.?){1,3})/,
      t = '.';
    return this.mobileVersion(e, t);
  },
  valueFromCookie(e, t) {
    var i = new RegExp(e + '=([0-9a-f]+)(; ?|$)').exec(document.cookie);
    if (!i) return t;
    var n = i[1];
    return 'boolean' == typeof t ? 'true' === n || '1' === n : 'number' == typeof t ? parseFloat(n) : n;
  },
  valueFromHash(e, t) {
    var i = new RegExp('[#&?]' + e + '=([^#&?]*)'),
      n = i.exec(window.location.href);
    if (!n) return t;
    var r = n[1];
    return 'boolean' == typeof t ? 'true' === r || '1' === r : 'number' == typeof t ? parseFloat(r) : window.decodeURIComponent(r);
  },
  valueFromUrl(key) {
    return this.urlHasValue(key, true);
  },
  urlHasValue: function (key, isGetValue) {
    let querys = window.location.search.substr(1).split('&');
    if (isGetValue) {
      for (let i = 0; i < querys.length; i++) {
        let keypair = querys[i].split('=');
        if (keypair.length === 2 && keypair[0] === key) {
          return keypair[1];
        }
      }
      return '';
    } else {
      //return window.location.search.match("&" + key + "|\\?" + key) != null  有bug
      for (let i = 0; i < querys.length; i++) {
        let keypair = querys[i].split('=');
        if (keypair[0] == key) {
          return true;
        }
      }
      return false;
    }
  },
};

export default browser;
