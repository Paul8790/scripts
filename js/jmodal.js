var addressWeb = 'http://test.dinamoweb.net/rolleri/';

(function($) {
	var modaldialog = { };
	var docwidth = '';
	var docheight = '';

	// Creates and shows the modal dialog
	function showDialog (msg, options) {
		// Make sure the dialog type is valid. If not assign the default one (the first)
		if(!$.inArray(options.type, modaldialog.DialogTypes)) {
			options.type = modaldialog.DialogTypes[0];
		};

		// Merge default title (per type), default settings, and user defined settings
		var settings = $.extend({ title: modaldialog.DialogTitles[options.type] }, modaldialog.defaults, options);

		// If there's no timeout, make sure the close button is show (or the dialog can't close)
		settings.timeout = (typeof(settings.timeout) == "undefined") ? 0 : settings.timeout;
		settings.showClose = ((typeof(settings.showClose) == "undefined") | !settings.timeout) ? true : !!settings.showClose;

		// Check if the dialog elements exist and create them if not
		if (!document.getElementById('dialog')) {
			dialog = document.createElement('div');
			dialog.id = 'dialog';
			$(dialog).html(
				"<div id='dialog-header'>" +
					"<div id='dialog-title'></div>" +
					"<div id='dialog-close'></div>" +
				"</div>" +
				"<div id='dialog-content'>" +
					"<div id='dialog-content-inner' />" +
					"<div id='dialog-button-container'>" +
						"<input type='button' id='dialog-button' value='Chiudi'>" +
					"</div>" +
				"</div>"+
				"<div id='hiddenTesto'></div>"
				);

			dialogmask = document.createElement('div');
			dialogmask.id = 'dialog-mask';

			if (window.innerWidth || window.innerHeight){
			docwidth = window.innerWidth;
			docheight = window.innerHeight;
			}

			if (document.body.clientWidth || document.body.clientHeight){
			docwidth = document.body.clientWidth;
			docheight = document.body.clientHeight;
			}

			$(dialogmask).html(
				"<div id='mascheratrasp'><img width='"+docwidth+"px' height='"+docheight+"px' src='"+addressWeb+"images/jmodal/bg.gif' id='mascheratraspi'  /></div>"
				);

			$(dialogmask).hide();
			$(dialog).hide();

			document.body.appendChild(dialogmask);
			document.body.appendChild(dialog);

			// Set the click event for the "x" and "Close" buttons
			$("#dialog-close").click(modaldialog.hide);
			$("#dialog-button").click(modaldialog.hide);

			$("#mascheratraspi").attr("width",docwidth);
			$("#mascheratraspi").attr("height",docheight);
			$("#dialog-mask").css("height",docheight+"px");
			$("#dialog-mask").css("width",docwidth+"px");
			$("#mascheratrasp").css("width",docwidth+"px");
			$("#mascheratrasp").css("height",docheight+"px");
		}

		var dl = $('#dialog');
		var dlh = $('#dialog-header');
		var dlc = $('#dialog-content');
		var dlb = $('#dialog-button');

		$('#dialog-title').html(settings.title);
		$('#dialog-content-inner').html(msg);

		// Center the dialog in the window but make sure it's at least 25 pixels from the top
		// Without that check, dialogs that are taller than the visible window risk
		// having the close buttons off-screen, rendering the dialog unclosable

		dl.css('width', settings.width);
		if(docheight > 768)

		var dialogTop = Math.abs(docheight - dl.height()) / 2;
		dl.css('left', (docwidth - dl.width()) / 2);
		dl.css('top', (dialogTop >= 25) ? dialogTop : 25);

		// Clear the dialog-type classes and add the current dialog-type class
		$.each(modaldialog.DialogTypes, function () { dlh.removeClass(this + "header") });
		dlh.addClass(settings.type + "header")
		$.each(modaldialog.DialogTypes, function () { dlc.removeClass(this) });
		dlc.addClass(settings.type);
		$.each(modaldialog.DialogTypes, function () { dlb.removeClass(this + "button") });
		dlb.addClass(settings.type + "button")

		if (!settings.showClose) {
			$('#dialog-close').hide();
			$('#dialog-button-container').hide();
		} else {
			$('#dialog-close').show();
			$('#dialog-button-container').show();
		}

		if (settings.timeout) {
			window.setTimeout("$('#dialog').fadeOut('slow', 0); $('#dialog-mask').fadeOut('normal', 0);", (settings.timeout * 1000));
		}

		$('.elenco').attr('disabled','disabled');
		$('#dialog').fadeIn(1000);
		$(dialogmask).fadeIn(1000);
		$("#mascheratraspi").animate({opacity: 0.70}, 1000)

	};

	modaldialog.error = function $$modaldialog$error (msg, options) {
		if (typeof(options) == "undefined") {
			options = { };
		}
		options['type'] = "error";
		return(showDialog(msg, options));
	}
	modaldialog.warning = function $$modaldialog$error (msg, options) {
		if (typeof(options) == "undefined") {
			options = { };
		}
		options['type'] = "warning";
		return(showDialog(msg, options));
	}
	modaldialog.alert = function $$modaldialog$error (msg, options) {
		if (typeof(options) == "undefined") {
			options = { };
		}
		options['type'] = "alert";
		return(showDialog(msg, options));
	}
	modaldialog.success = function $$modaldialog$error (msg, options) {
		if (typeof(options) == "undefined") {
			options = { };
		}
		options['type'] = "success";
		return(showDialog(msg, options));
	}
	modaldialog.prompt = function $$modaldialog$error (msg, options) {
		if (typeof(options) == "undefined") {
			options = { };
		}
		options['type'] = "prompt";
		return(showDialog(msg, options));
	}
	modaldialog.view = function $$modaldialog$error (msg, options) {
		if (typeof(options) == "undefined") {
			options = { };
		}
		options['type'] = "view";
		return(showDialog(msg, options));
	}
	modaldialog.scelta = function $$modaldialog$error (msg, options) {
		if (typeof(options) == "undefined") {
			options = { };
		}
		options['type'] = "scelta";
		return(showDialog(msg, options));
	}

	modaldialog.hide = function $$modaldialog$hide () {
/*		if($('#dialog-content').attr("class") == "warning")
		location.href='http://www.unionecommerciantipc.it/piacenzainvetrina.php';*/

		$('.elenco').removeAttr('disabled');
		$('#dialog').fadeOut("slow", function () { $(this).hide(0); });
		$('#dialog-mask').fadeOut("normal", function () { $(this).hide(0); });

	};

	modaldialog.DialogTypes = new Array("error", "warning", "success", "prompt", "view", "alert","scelta");
	modaldialog.DialogTitles = {
		"error": "!! Error !!"
		, "warning": "Attenzione!"
		, "alert": "Attenzione!"
		, "success": "Invio effettuato con successo"
		, "prompt": "Please Choose"
		, "view": 'Scelta Utente'
		, "carrello" : 'Dettaglio Carrello'
		, "invio" : 'Invio dati in corso'
		, "scelta" : 'Feed Rss'
	};

	modaldialog.defaults = {
		timeout: 0
		, showClose: true
		, width: 525
	};

	$.extend({ modaldialog: modaldialog });
})(jQuery);