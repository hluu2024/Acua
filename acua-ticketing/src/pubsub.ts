// 'use strict';
// module.exports.PubSub = function (socket: any) {
//     var container: any[] = [];
//     return {
//         subscribe: function (options: any, callback: any, socket: any) {
//             if (options) {
//                 var collectionName = options.collectionName;
//                 var modelId = options.modelId;
//                 var method = options.method;
//                 if (method === 'POST') {
//                     var name = '/' + collectionName + '/' + method;
//                     socket.on(name, callback);
//                 } else {
//                     var name = '/' + collectionName + '/' + modelId + '/' + method;
//                     socket.on(name, callback);
//                 }
//                 this.pushContainer(name);
//             } else {
//                 throw new Error('Error: Option must be an object');
//             }
//         },
//
//         pushContainer (subscriptonName: any) {
//             container.push(subscriptonName);
//         },
//
//         unSubscribeAll: function () {
//             for (var i = 0; i < container.length; i++) {
//                 socket.removeAllListners(container[i])
//             }
//             container = [];
//         }
//     }
// };
//
//
//
//
//
//
