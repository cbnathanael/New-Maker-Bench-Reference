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

$.fn.convertVolume = function(len, unit, precision) {
	
	var base;
	switch(unit) {
		case 'ul':
			base = len * 1e-6;
			break;
		case 'ml':
			base = len * 1e-3;
			break;
		case 'cl':
			base = len * 1e-2;
			break;
		case 'dl':
			base = len * 1e-1;
			break;
		case 'l':
			base = len * 1;
			break;
		case 'hl':
			base = len * 1e2;
			break;
		case 'm3':
			base = len * 1e3;
			break;
		case 'dm3':
			base = len * 1;
			break;
		case 'cc':
			base = len * 1e-3;
			break;
		case 'mm3':
			base = len * 1e-6;
			break;
		case 'lgal':
			base = len * 3.875;
			break;
		case 'lqt':
			base = len * 0.9464;
			break;
		case 'lpt':
			base = len * 0.4732;
			break;
		case 'floz':
			base = len * 0.02957;
			break;
		case 'dgal':
			base = len * 4.405;
			break;
		case 'dqt':
			base = len * 1.101;
			break;
		case 'dpt':
			base = len * 0.5506;
			break;
	}
	
	$("form#convVolume input#ul").val( (base/1e-6).toPrecision(precision) );
	$("form#convVolume input#ml").val( (base/1e-3).toPrecision(precision) );
	$("form#convVolume input#cl").val( (base/1e-2).toPrecision(precision) );
	$("form#convVolume input#dl").val( (base/1e-1).toPrecision(precision) );
	$("form#convVolume input#l").val( (base/1).toPrecision(precision) );
	$("form#convVolume input#hl").val( (base/1e2).toPrecision(precision) );
	$("form#convVolume input#m3").val( (base/1e3).toPrecision(precision) );
	$("form#convVolume input#dm3").val( (base/1).toPrecision(precision) );
	$("form#convVolume input#cc").val( (base/1e-3).toPrecision(precision) );
	$("form#convVolume input#mm3").val( (base/1e-6).toPrecision(precision) );
	$("form#convVolume input#lgal").val( (base/3.875).toPrecision(precision) );
	$("form#convVolume input#lqt").val( (base/0.9464).toPrecision(precision) );
	$("form#convVolume input#lpt").val( (base/0.4732).toPrecision(precision) );
	$("form#convVolume input#floz").val( (base/0.02957).toPrecision(precision) );
	$("form#convVolume input#dgal").val( (base/4.405).toPrecision(precision) );
	$("form#convVolume input#dqt").val( (base/1.101).toPrecision(precision) );
	$("form#convVolume input#dpt").val( (base/0.5506).toPrecision(precision) );
	
	return base;
}