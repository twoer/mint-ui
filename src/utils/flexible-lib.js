const remUnit = 37.5;
const remUnitJS = 75;

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
  var dpr = document.documentElement.getAttribute('data-dpr') || 0;
  var val = Math.round(parseFloat(d) * remUnitJS);
  if (typeof d === 'string' && d.match(/px$/)) {
    val += 'px';
  }
  return val;
}

