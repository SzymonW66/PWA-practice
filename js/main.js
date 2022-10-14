window.onload = () => {
'use strict';
if ('serviceWorker' in navigator) {
avigator.serviceWorker
.register('./sw.js'); 
}
}
