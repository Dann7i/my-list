let started = /Halo/;
let pembuatBot = /^Siapa pembuat bot ini. WILDAN$/;
//let siapakamu = /^Siapa kamu$/;
//let apaKabar = /^Apa kabar$/;
//let botName = /^Nama kamu siapa$/;
let namabot = "Danbot";
let startedCommand = "/start";
export function handleMessage(pesan, chatId, danbot) {
  console.log("Pesan diterima:", pesan.text);
  if (typeof pesan.text === "string") {
    if (/^\/start$/i.test(pesan.text)) {
      console.log("DEBUG: /start terdeteksi");
      danbot.sendMessage(chatId, `Selamat datang dibot saya. Ketik  ${startedCommand} untuk mulai`);
    }
    if (/Halo/i.test(pesan.text)) {
      danbot.sendMessage(chatId, `Halo! Ada yang bisa saya bantu?`);
    }
  } else {
    console.log("DEBUG: pesan.text tidak ada atau bukan string");
  }
  danbot.onText(pembuatBot, (pesan) => {
    danbot.sendMessage(pesan.from.id, "namanya Wildan");
  });
}

export default handleMessage;
