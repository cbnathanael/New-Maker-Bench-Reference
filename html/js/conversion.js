$.fn.convertLength = function(len, unit, precision) {
	
	var base;
	switch(unit) {
		case 'ang':
			base = len * 1e-10;
			break;
		case 'nm':
			base = len * 1e-9;
			break;
		case 'um':
			base = len * 1e-6;
			break;
		case 'mm':
			base = len * 1e-3;
			break;
		case 'cm':
			base = len * 1e-2;
			break;
		case 'm':
			base = len;
			break;
		case 'km':
			base = len * 1e3;
			break;
		case 'micron':
			base = len * 1e-6;
			break;
		case 'mil':
			base = len * 2.54e-5;
			break;
		case 'in':
			base = len * 0.0254;
			break;
		case 'ft':
			base = len * 0.3048;
			break;
		case 'yd':
			base = len * 0.9144;
			break;
		case 'mi':
			base = len * 1609.344;
			break;
	}
	
	$("form#convLength input#ang").val( (base/1e-10).toPrecision(precision) );
	$("form#convLength input#nm").val( (base/1e-9).toPrecision(precision) );
	$("form#convLength input#um").val( (base/1e-6).toPrecision(precision) );
	$("form#convLength input#mm").val( (base/1e-3).toPrecision(precision) );
	$("form#convLength input#cm").val( (base/1e-2).toPrecision(precision) );
	$("form#convLength input#m").val( (base/1).toPrecision(precision) );
	$("form#convLength input#km").val( (base/1e3).toPrecision(precision) );
	$("form#convLength input#micron").val( (base/1e-6).toPrecision(precision) );
	$("form#convLength input#mil").val( (base/2.54e-5).toPrecision(precision) );
	$("form#convLength input#in").val( (base/0.0254).toPrecision(precision) );
	$("form#convLength input#ft").val( (base/0.3048).toPrecision(precision) );
	$("form#convLength input#yd").val( (base/0.9144).toPrecision(precision) );
	$("form#convLength input#mi").val( (base/1609.344).toPrecision(precision) );
	
	return base;
}

$.fn.convertMass = function(len, unit, precision) {
	
	var base;
	switch(unit) {
		case 'mg':
			base = len * 1e3;
			break;
		case 'oz':
			base = len / 28.35;
			break;
		case 'g':
			base = len;
			break;
		case 'lb':
			base = len / 0.002205;
			break;
		case 'kg':
			base = len * 1e-3;
			break;
		case 'sTon':
			base = len / 1.102e-6;
			break;
		case 'n':
			base = len * 9.807e-3;
			break;
		case 'lTon':
			base = len / 9.842e-7;
			break;
		case 'tn':
			base = len / 1.0e-6;
			break;
		case 'cd':
			base = len / 5;
			break;
		
	}
	
	$("form#convMass input#mg").val( (base/1e3).toPrecision(precision) );
	$("form#convMass input#oz").val( (base*28.35).toPrecision(precision) );
	$("form#convMass input#g").val( (base/1).toPrecision(precision) );
	$("form#convMass input#lb").val( (base*0.002205).toPrecision(precision) );
	$("form#convMass input#kg").val( (base/1e-3).toPrecision(precision) );
	$("form#convMass input#sTon").val( (base*1.102e-6).toPrecision(precision) );
	$("form#convMass input#n").val( (base/9.807e-3).toPrecision(precision) );
	$("form#convMass input#lTon").val( (base*9.842e-7).toPrecision(precision) );
	$("form#convMass input#cd").val( (base*5).toPrecision(precision) );
	$("form#convMass input#tn").val( (base*1.0e-6).toPrecision(precision) );
	
	return base;
}
