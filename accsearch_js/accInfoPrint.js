$(document).ready(function() {
	$.each($("#accInfoDiv div span[id]"), function(i, span) {
		if (parent.$("#accinfo_ui_accInfoForm #" + span.id).is("input")) {
			span.innerHTML = parent.$("#accinfo_ui_accInfoForm #" + span.id).val();
		}
		$("#accInfoDiv div span[id=accFlag]").html(parent.getAccountFlag(parent.accInfo));
		
		if (parent.$("#accinfo_ui_accInfoForm #" + span.id).is("select")) {
			span.innerHTML = parent.$("#accinfo_ui_accInfoForm #" + span.id + " option:selected").text();
		}
	});
	$.each(parent.accInfo.sealCards, function(i, sealCard) {
		var sealCardDiv = $("<div></div>").addClass("sealCard");
		sealCardDiv.append('<div class="span">印鉴卡号：<span id="cardId">' + sealCard.cardId + '</span></div>');
		sealCardDiv.append('<div class="span">印鉴卡启用日期：<span id="startDate">' + sealCard.startDate + '</span></div>');
		sealCardDiv.append('<div class="span">印鉴卡注销日期：<span id="endDate">' + sealCard.endDate + '</span></div>');

		$.each(sealCard.cardImages, function(j, cardImage) {
			var cardImageDiv = $("<div></div>").addClass("cardImage");
			$("<img></img>").prop("src", $$.CtrlLib.ChromeEncode(cardImage.localPath)).appendTo(cardImageDiv);
			
			$.each(cardImage.sealInfos, function(k, sealInfo) {
				var sealInfoDiv = $("<div></div>").addClass("sealInfo");
				$("<img></img>").prop("src", $$.CtrlLib.ChromeEncode(sealInfo.seal_white)).appendTo(sealInfoDiv);
				sealInfoDiv.append('<div class="span">印鉴：<span id="sealId">' + sealInfo.sealId + '</span></div>');
				cardImageDiv.append(sealInfoDiv);
			});
			
			cardImageDiv.appendTo(sealCardDiv);
		});
		$("#sealCardList").append("<hr />").append(sealCardDiv);
	});

	window.print();
	window.close();
});