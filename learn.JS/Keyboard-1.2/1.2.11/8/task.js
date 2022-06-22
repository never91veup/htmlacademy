if (-1 || 0) alert( 'first' ); // -1 => true => first
if (-1 && 0) alert( 'second' ); // 0 => false => not
if (null || -1 && 1) alert( 'third' ); // 1 => true => third