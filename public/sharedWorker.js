// importScripts('constant.js'); // 引用其他文件
let val = 6667;

self.onconnect = function (e) {
  const port = e.ports[0];
  console.log("shared-worker connect");

  port.postMessage(val);

  port.onmessage = (messageEvent) => {
    console.log(messageEvent);
    const { type, payload } = messageEvent.data;
    console.log(type);
    switch (type) {
      case "increase":
        port.postMessage(++val);
        break;
      case "decrease":
        port.postMessage(--val);
        break;
      case "fresh":
        console.log("fresh", val);
        port.postMessage(val);
        break;
    }
  };
};

console.log("shared-worker", self);
