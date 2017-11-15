function socketNotConnected(wsPath, options) {
    attempts = 3;
    overlayBackgroundColor = 'rgba(0,0,0,.7)';
    textColor = 'inherit';
    contentBackgroundColor = '#fff';
    linkColor = '#f11442';

    if(options) {
        if(options.attempts) {
            attempts = options.attempts;
        }

        if(options.overlayBackgroundColor) {
            overlayBackgroundColor = options.overlayBackgroundColor;
        }

        if(options.contentBackgroundColor) {
            contentBackgroundColor = options.contentBackgroundColor;
        }

        if(options.textColor) {
            textColor = options.textColor;
        }

        if(options.linkColor) {
            linkColor = options.linkColor;
        }
    }

    var socket = new ReconnectingWebSocket(wsPath);

    socket.onerror = function() {
        if(socket.reconnectAttempts === attempts) {
            var overlayContainer = '<div id="socket-not-connected" style="position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;background-color: '+overlayBackgroundColor+';z-index: 9999;"/>'
            var contentContainer = '<div class="socket-not-connected-modal" style="position: absolute;top: 50%;left: 50%;width: 100%;max-width: 450px;color: '+textColor+';padding: 20px;transform: translate(-50%,-50%);text-align: center;background-color: '+contentBackgroundColor+';"/>'
            var content = '<h2 style="font-size: 28px;">Hay un problema de&nbsp;conexión.</h2><p style="font-size: 16px;">Espera un momento o <a href="#" onclick="location.reload(); return false;" style="color: '+linkColor+';">recarga la página</a>.</p>'

            $('body').append($(overlayContainer).append($(contentContainer).append(content)));
        }
    };

   socket.onopen = function () {
        $('#socket-not-connected').remove();
    };

    return socket;
}
