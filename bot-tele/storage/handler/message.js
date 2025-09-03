let started = /Halo/;
export function handleMessage(pesan, chatId, danbot) {
  console.log("Pesan diterima:", pesan.text);
  if (/^\/start$/i.test(pesan.text)) {
    danbot.sendMessage(chatId, "Selamat datang di bot Wildannn!");
    return;
  }

  //jika pesan halo kirim aja balasan!
  if (/Halo/i.test(pesan.text)) {
    danbot.sendMessage(chatId, "Halo! Ada yang bisa saya bantu?");
  }
}

export default handleMessage;
