EtherpadBookmarklets
====================

Eine Sammlung an Bookmarklets für Etherpads

* <a href="javascript:(function(){function insertTS(){var padlines=padeditor.ace.exportText().split('\n');var timestamp=Math.round(new Date().getTime()/1000);for(var i = 0; i<padlines.length; i++){if(padlines[i].indexOf('###') == 0){padeditor.ace.replaceRange([i,0], [i,3], ''+timestamp);console.log(i);}}window.setTimeout(insertTS, 1000);}insertTS();})()">Insert Timestamp</a>: Dieses Bookmarklet ändert alle ```###``` am Anfang von Zeilen innerhalb des Pads zum aktuellen UNIX-Timestamp
* <a href="javascript:(function(){var padcontent=padeditor.ace.exportText();function post_to_url(path,params){var form=cpWindow.document.createElement('form');form.setAttribute('method','post');form.setAttribute('action',path);for(var key in params){if(params.hasOwnProperty(key)){var hiddenField = document.createElement('input');hiddenField.setAttribute('type','hidden');hiddenField.setAttribute('name',key);hiddenField.setAttribute('value',params[key]);form.appendChild(hiddenField);}}cpWindow.document.body.appendChild(form);form.submit();}cpWindow = window.open('about:blank');post_to_url('http://cdn.simon.waldherr.eu/projects/osf-parser-suite/api/', {'amazon':'shownot.es-21','thomann':'93439','fullmode':1, 'pad':padcontent, 'download':1,'exportmode':'chapter'});})()">Export Chapter</a>: Ein Klick auf dieses Bookmarklet überträgt den Padinhalt zum OSF-Parser wo der Inhalt zu Chapters gewandelt werden

Bei Problemen einfach der [Installationsanleitung](http://marklets.com/FAQ.aspx#howDoIAddABookmarkletToMyBrowser) folgen.
