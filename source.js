//convert every second ###%20 to Timestamps
javascript:(function () {
    function insertTS() {
        var padlines = padeditor.ace.exportText().split('\n'),
            timestamp = Math.round(new Date().getTime() / 1000),
            i = 0;
        for (i = 0; i < padlines.length; i++) {
            if (padlines[i].indexOf('###%20') === 0) {
                padeditor.ace.replaceRange([i, 0], [i, 3], '' + timestamp);
                console.log(i);
            }
        }
        window.setTimeout(insertTS, 1000);
    }
    insertTS();
})();

//convert every second ###%20 to current time in HH:MM:SS format
javascript:(function () {
    var currentTime = new Date();
    var startDMY = prompt('Enter your Start-Day', currentTime.getDate() + '.' + (currentTime.getMonth() + 1) + '.' + currentTime.getFullYear()).split('.');
    var startHMS = prompt('Enter your Start-Time', currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds()).split(':');
    var starttime = new Date(startDMY[2], (startDMY[1] - 1), startDMY[0], startHMS[0], startHMS[1], startHMS[2], 0);
    var starttimestamp = Math.round(starttime.getTime() / 1000);

    function calculateTime(now) {
        var time = parseInt(now, 10) - parseInt(starttimestamp, 10),
            date, hours, minutes, seconds, returntime = '';

        console.log(time + ' ' + now + ' ' + starttimestamp);

        hours = Math.floor(time / 3600);
        minutes = Math.floor((time - (hours * 3600)) / 60);
        seconds = time - (hours * 3600) - (minutes * 60);

        returntime += (hours < 10) ? '0' + hours + ':' : hours + ':';
        returntime += (minutes < 10) ? '0' + minutes + ':' : minutes + ':';
        returntime += (seconds < 10) ? '0' + seconds : seconds;

        return returntime;
    }

    function insertHMS(starttimestamp) {
        var padlines = padeditor.ace.exportText().split('\n'),
            timestamp = Math.round(new Date().getTime() / 1000),
            i = 0;
        for (i = 0; i < padlines.length; i++) {
            if (padlines[i].indexOf('###%20') === 0) {
                padeditor.ace.replaceRange([i, 0], [i, 3], '' + calculateTime(timestamp));
                console.log(i);
            }
        }
        window.setTimeout(insertHMS, 750, starttimestamp);
    }
    insertHMS(starttimestamp);
})();

//change Timestamps to HH:MM:SS
javascript:(function () {
    function calculateTime(starttime, now) {
        var time = parseInt(now, 10) - parseInt(starttime, 10),
            date, hours, minutes, seconds, returntime = '';

        hours = Math.floor(time / 3600);
        minutes = Math.floor((time - (hours * 3600)) / 60);
        seconds = time - (hours * 3600) - (minutes * 60);

        returntime += (hours < 10) ? '0' + hours + ':' : hours + ':';
        returntime += (minutes < 10) ? '0' + minutes + ':' : minutes + ':';
        returntime += (seconds < 10) ? '0' + seconds : seconds;

        return returntime;
    }
    var padlines = padeditor.ace.exportText().split('\n'),
        i = 0,
        starttime = false,
        timestamp, newtime;

    for (i = 0; i < padlines.length; i++) {
        if (starttime === false) {
            if (padlines[i].substr(10, 1) === ' ') {
                if (isNaN(parseInt(padlines[i].substr(0, 10), 10)) === false) {
                    starttime = prompt('Enter your Start-Timestamp', padlines[i].substr(0, 10));
                }
            }
        } else {
            if (padlines[i].substr(10, 1) === ' ') {
                timestamp = padlines[i].substr(0, 10);
                if (isNaN(parseInt(timestamp, 10)) === false) {
                    newtime = calculateTime(starttime, timestamp);
                    padeditor.ace.replaceRange([i, 0], [i, 10], '' + newtime);
                    console.log('timestamp: ' + timestamp + ' time: ' + newtime);
                }
            }
        }
    }
})();

//export Pad to chapter file
javascript:(function () {
    var padcontent = padeditor.ace.exportText();

    function post_to_url(path, params) {
        var form = cpWindow.document.createElement('form'),
            hiddenField;
        form.setAttribute('method', 'post');
        form.setAttribute('action', path);
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }
        }
        cpWindow.document.body.appendChild(form);
        form.submit();
    }
    cpWindow = window.open('about:blank');
    post_to_url('http://cdn.simon.waldherr.eu/projects/osf-parser-suite/api/', {
        'amazon': 'shownot.es-21',
        'thomann': '93439',
        'fullmode': 1,
        'pad': padcontent,
        'download': 1,
        'exportmode': 'chapter'
    });
})();

//export Pad to anycast-full style HTML
javascript:(function () {
    var padcontent = padeditor.ace.exportText();

    function post_to_url(path, params) {
        var form = cpWindow.document.createElement('form'),
            hiddenField;
        form.setAttribute('method', 'post');
        form.setAttribute('action', path);
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }
        }
        cpWindow.document.body.appendChild(form);
        form.submit();
    }
    cpWindow = window.open('about:blank');
    post_to_url('http://cdn.simon.waldherr.eu/projects/osf-parser-suite/api/', {
        'amazon': 'shownot.es-21',
        'thomann': '93439',
        'fullmode': 1,
        'pad': padcontent,
        'download': 1,
        'exportmode': 'anycast-full'
    });
})();

//open Pad in Parser
javascript:(function () {
    var padcontent = padeditor.ace.exportText();

    function post_to_url(path, params) {
        var form = cpWindow.document.createElement('form'),
            hiddenField;
        form.setAttribute('method', 'post');
        form.setAttribute('action', path);
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }
        }
        cpWindow.document.body.appendChild(form);
        form.submit();
    }
    cpWindow = window.open('about:blank');
    post_to_url('http://tools.shownot.es/parser/', {
        'padcontent': padcontent
    });
})();
