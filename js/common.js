$(function() {
	$('#selectLingua').change(function() {
		if($.trim($(this).val()) !== '')
			window.location.href = ""+$(this).val()+"";
	});
	
	$('.blank').click(function() {
		window.open($(this).attr('href'));
		return false;
	});

//tarmacnuma informacian nkari dzax ankyunum
    $('#inp_l').keyup(function () {
    if($('#inp_l').val() >= 1000 && $('#inp_l').val() < 99999) {
        $('#tip_l').text($(this).val());
        updateTotaly();
    }else if($('#inp_l').val() < 1000){
        $('#tip_l').text('1000');
        updateTotaly();
    }
    });
    //Ushadir exi stex, aj koxi nkari tarmacumna
    $('#spessore').keyup(function () {
        $('#spessoreLamiera').text($(this).val());
        updateDyeOpening();
        updateMinRestLength();
        updateInternalRadius();
        updateTotaly();
        $('#bordoInterno').html($('.minRestLength').find('td').eq(0).html());
        $('#raggio').html($('.internalRadius').find('td').eq(0).html());
        $('#apertura').html($('.dieOpening').find('td').eq(0).html());
    });


});
/*
function updateTotaly() {
	var td = $('.required');
	var td_bending = $('.bending');
	
//ete bending force-um arjeq ka, bazmapatkuma lengthov, bajanuma 1000-i, sarqelem nra hamar vor demic 0 chgri
if(td_bending.find('.f1').html() !== '' && $('#inp_l').val() >= 1000){
  	td.find('td').eq(0).html(td_bending.find('.f1').html() * $('#inp_l').val()/1000);  
}
else if($('#inp_l').val() < 1000){
    td.find('td').eq(0).html(td_bending.find('.f1').html());
}
else{
    td.find('td').eq(0).html('');
}

//ete bending force-um arjeq ka, bazmapatkuma lengthov, bajanuma 1000-i, sarqelem nra hamar vor demic 0 chgri

if(td_bending.find('.f2').html() !== '' && $('#inp_l').val() >= 1000){
  	td.find('td').eq(1).html(td_bending.find('.f2').html() * $('#inp_l').val()/1000);  
}
else if($('#inp_l').val() < 1000){
    td.find('td').eq(1).html(td_bending.find('.f2').html());
}
else{
    td.find('td').eq(1).html('');
}

//ete bending force-um arjeq ka, bazmapatkuma lengthov, bajanuma 1000-i, sarqelem nra hamar vor demic 0 chgri
if(td_bending.find('.f3').html() !== '' && $('#inp_l').val() >= 1000){
  	td.find('td').eq(2).html(td_bending.find('.f3').html() * $('#inp_l').val()/1000);  
}
else if($('#inp_l').val() < 1000){
    td.find('td').eq(2).html(td_bending.find('.f3').html());
}
else{
    td.find('td').eq(2).html('');
}


//ete bending force-um arjeq ka, bazmapatkuma lengthov, bajanuma 1000-i, sarqelem nra hamar vor demic 0 chgri
if(td_bending.find('.f4').html() !== '' && $('#inp_l').val() >= 1000){
  	td.find('td').eq(3).html(td_bending.find('.f4').html() * $('#inp_l').val()/1000);  
}
else if($('#inp_l').val() < 1000){
    td.find('td').eq(3).html(td_bending.find('.f4').html());
}
else{
    td.find('td').eq(3).html('');
}

//ete bending force-um arjeq ka, bazmapatkuma lengthov, bajanuma 1000-i, sarqelem nra hamar vor demic 0 chgri
if(td_bending.find('.f5').html() !== '' && $('#inp_l').val() >= 1000){
  	td.find('td').eq(4).html(td_bending.find('.f5').html() * $('#inp_l').val()/1000);  
}
else if($('#inp_l').val() < 1000){
    td.find('td').eq(4).html(td_bending.find('.f5').html());
}
else{
    td.find('td').eq(4).html('');
}
*/
/*	
	html(td_required.find('.f1').html() * $('#inp_l').val());
	html(td_required.find('.f2').html() * $('#inp_l').val());
	html(td_required.find('.f3').html() * $('#inp_l').val());
	html(td_required.find('.f4').html() * $('#inp_l').val());
	html(td_required.find('.f5').html() * $('#inp_l').val());
}*/

 
function updateDyeOpening() {
	var td = $('.dieOpening');
	var V = 1;
  if($('#spessore').val() > 0 && $('#spessore').val() < 3){
      V = 6*$('#spessore').val()
  } else if($('#spessore').val() >= 3 && $('#spessore').val() < 9){
      V = 8*$('#spessore').val()
  } else if($('#spessore').val() >= 9 && $('#spessore').val() < 12){
      V = 10*$('#spessore').val()
  } else if($('#spessore').val() >= 12){
      V = 12*$('#spessore').val()
  }
  	td.find('td').eq(0).html(Math.round(V*10)/10);
  	
}

function updateMinRestLength() {
	var td = $('.minRestLength');
	var td_dieOpening = $('.dieOpening');
	var A = $('#gradi').val();
	
	if (A == 30){
	    td.find('td').eq(0).html(Math.round(1.94*td_dieOpening.find('td').eq(0).html()*10)/10);
	} else if (A == 45){
	    td.find('td').eq(0).html(Math.round(1.31*td_dieOpening.find('td').eq(0).html()*10)/10);
	} else if (A == 60){
	    td.find('td').eq(0).html(Math.round(1*td_dieOpening.find('td').eq(0).html()*10)/10);
	} else if (A == 90){
	    td.find('td').eq(0).html(Math.round(0.71*td_dieOpening.find('td').eq(0).html()*10)/10);
	} else if (A == 120){
	    td.find('td').eq(0).html(Math.round(0.58*td_dieOpening.find('td').eq(0).html()*10)/10);
	} else if (A == 135){
	    td.find('td').eq(0).html(Math.round(0.55*td_dieOpening.find('td').eq(0).html()*10)/10);
	} else if (A == 165){
	    td.find('td').eq(0).html(Math.round(0.51*td_dieOpening.find('td').eq(0).html()*10)/10);
	}
	    $('#angolo').html($('#gradi').val());
	    $('#bordoInterno').html($('.minRestLength').find('td').eq(0).html());
}

function updateInternalRadius() {
	var td = $('.internalRadius');
	var td_dieOpening = $('.dieOpening');
  	td.find('td').eq(0).html(Math.round(td_dieOpening.find('td').eq(0).html() * 5/32*10)/10);
}

function updateTotaly() {
	var td = $('.bending');
	var V = 0;
  if($('#spessore').val() >0 && $('#spessore').val() < 3){
      V = 6*$('#spessore').val()
  } else if($('#spessore').val() >= 3 && $('#spessore').val() < 9){
      V = 8*$('#spessore').val()
  } else if($('#spessore').val() >= 9 && $('#spessore').val() < 12){
      V = 10*$('#spessore').val()
  } else if($('#spessore').val() >= 12){
      V = 12*$('#spessore').val()
  }

  	td.find('td').eq(0).html(Math.round(1.42 * $('#materiale').val() * $('#spessore').val() * $('#spessore').val() * $('#inp_l').val()/(1000 * V)*10)/10);

}
function trim(stringa) {
    while (stringa.substring(0,1) == ' ') {
        stringa = stringa.substring(1, stringa.length);
    }
    while (stringa.substring(stringa.length-1, stringa.length) == ' ') {
        stringa = stringa.substring(0,stringa.length-1);
    }

    return stringa;
}

function validEmail(text) {

	if(text.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/))
		return true;

	return false;
}

function validDouble(text) {

	if(text.match(/^\+?[0-9\.,]+$/))
		return true;

	return false;
}

function validPhone(text) {

	if(text.match(/^\+?[0-9\.-\/ ]+$/))
		return true;

	return false;
}

function validNumeric(text) {
	if(text.match(/^[0-9]+$/))
		return true;

	return false;
}

// Verifico se il campo è solo letterale (a-zA-Z)
function validString(text) {
	if(text.match(/^[a-zA-Z]+$/))
		return true;

	return false;
}

// Aggiungi ai preferiti
function bookmark(titolo, url) {
	if (document.all)
		window.external.AddFavorite(url, titolo);
	else if (window.sidebar)
		window.sidebar.addPanel(titolo, url, "");
}

function sendOrder() {

    
    var zakaz;



    zakaz = '<b>Company:</b> ' + document.getElementById('field_qh4icy3').value + ',<br>';
    zakaz += '<b>Name:</b> ' + document.getElementById('field_yhswh2').value + ',<br>';
    zakaz += '<b>EMAIL :</b> ' + document.getElementById('field_29yf4d3').value + ',<br>';
    zakaz += '<b>PHONE NUMBER:</b> ' + document.getElementById('field_x6kar').value + '.<br><br>';
    zakaz += '<b>MESSAGE:</b> ' + document.getElementById('field_rdo45').value + '.<br><br>';

    var res = {
        zakaz: zakaz
    };

if (document.getElementById('field_qh4icy3').value != '' && document.getElementById('field_yhswh2').value != '' && document.getElementById('field_29yf4d3').value != '' && document.getElementById('field_x6kar').value != '' && document.getElementById('field_rdo45').value != ''){
    jQuery.ajax({
        type: "POST",
        url: "./answer.php",
        data: res,
        success: function () {
            document.getElementById('frm_form_10_container').innerHTML = '<center><h2>YOUR RESPONSES WERE SUCCESSFULLY SUBMITTED. THANK YOU!</h2><h3>We will be in contact with you shortly. </h3></center>';
        }
    });
} else {
    alert("Please fill out all fields");
}
    return false;
}
