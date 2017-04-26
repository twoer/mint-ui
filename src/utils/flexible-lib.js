const remUnit = 75;

export function px2rem(d)
{
    var val = parseFloat(d) / remUnit;
    if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem';
    }
    return val;
}

