
self.onmessage = (messageEvent) => {

  console.log(messageEvent);



  // 处理对象
  // const buffer = messageEvent.data;
  // const serializedData = new TextDecoder().decode(buffer);
  // const receivedData = JSON.parse(serializedData);
  // console.log(receivedData);

  // 处理函数
  const buffer = messageEvent.data;
  // 从 Uint8Array 获取字符串
  const decoder = new TextDecoder();
  const decodedData = decoder.decode(new Uint8Array(buffer));
  // 将字符串解析为函数
  const receivedFunction = eval('(' + decodedData + ')');
  // 调用接收到的函数
  const result = receivedFunction(10, 20);
  console.log(result);

};

