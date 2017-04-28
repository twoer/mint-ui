// var isAndroid = window.navigator.appVersion.match(/android/gi);
var isIPhone = window.navigator.appVersion.match(/iphone/gi);
var devicePixelRatio = window.devicePixelRatio;

var dpr = 0;
if (isIPhone) {
  // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
  if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
    dpr = 3;
  } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
    dpr = 2;
  } else {
    dpr = 1;
  }
} else {
  // 其他设备下，仍旧使用1倍的方案
  dpr = 1;
}

var remUnit = (document.documentElement.getBoundingClientRect().width / 10 / dpr) || 37.5;
var remUnitJS = remUnit * dpr ;

export function px2rem(d) {
  var val = parseFloat(d) / remUnit;
  if (typeof d === 'string' && d.match(/px$/)) {
    val += 'rem';
  }
  return val;
}

export function rem2px(d) {
  var dpr = document.documentElement.getAttribute('data-dpr') || 0;
  var val = Math.round(parseFloat(d) * remUnit * dpr);
  if (typeof d === 'string' && d.match(/px$/)) {
    val += 'px';
  }
  return val;
}

export function px2remJS(d) {
  var val = parseFloat(d) / remUnitJS;
  if (typeof d === 'string' && d.match(/px$/)) {
    val += 'rem';
  }
  return val;
}

export function rem2pxJS(d) {
  // var dpr = document.documentElement.getAttribute('data-dpr') || 0;
  var val = Math.round(parseFloat(d) * remUnitJS);
  if (typeof d === 'string' && d.match(/px$/)) {
    val += 'px';
  }
  return val;
}

