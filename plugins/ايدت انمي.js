const dir = [
'https://telegra.ph/file/d6269a1f7f2bf94a406df.mp4',  'https://telegra.ph/file/8034305ce5330ebc11a99.mp4',  'https://telegra.ph/file/5c70fbac268fb54ff847e.mp4',  'https://telegra.ph/file/f2a6bec5b7635364d6768.mp4',  'https://telegra.ph/file/d7f5799da8e64b9aff5aa.mp4',  'https://telegra.ph/file/261100ff5fe590b08e35d.mp4', 'https://telegra.ph/file/6214d68e0da156ef8e54a.mp4',
'https://telegra.ph/file/960bece94cac521c5fd68.mp4',
'https://telegra.ph/file/759c10b0e0a1605ae9716.mp4',
'https://telegra.ph/file/1d4d8d50e19929f4870f6.mp4',
'https://telegra.ph/file/07941ba2e117fea621e5d.mp4',
'https://telegra.ph/file/5fb988f765cd747cde120.mp4',
'https://telegra.ph/file/5ddb8eec9a8d4883dde9c.mp4',
'https://telegra.ph/file/bc4cafca3f25376e7cb2e.mp4',
'https://telegra.ph/file/2243a5e4d437536f7dc8b.mp4',
'https://telegra.ph/file/65ffa16e5eaee2715e713.mp4',
'https://telegra.ph/file/d1ae62ec93fdfbfb44f11.mp4',
'https://telegra.ph/file/539d50387958f5d58e76c.mp4',
'https://telegra.ph/file/aa6c00ce3e0e07d6775dd.mp4',
'https://telegra.ph/file/6a8818cad48e79495390a.mp4',
'https://telegra.ph/fil e/141b6f6cda402a8de3c3e.mp4',
'https://telegra.ph/file/1180e55bd2cf29924c8d2.mp4',
'https://telegra.ph/file/38bde47b6402f2bfb06aa.mp4', 
'https://telegra.ph/file/32344686758198df923a1.mp4',
'https://telegra.ph/file/38bc86129afa59776ec41.mp4',
'https://telegra.ph/file/db3c8672cde1ca5e6552a.mp4',
'https://telegra.ph/file/830101289dc6bd39811bb.mp4',
'https://telegra.ph/file/822c53d16b73d2dde32d3.mp4',
'https://telegra.ph/file/886982e1eebd12cd53395.mp4',
'https://telegra.ph/file/7d2cdc5219bf3a551aa63.mp4',
'https://telegra.ph/file/0ac041f0b5a3afc29e017.mp4',
'https://telegra.ph/file/ea5e5e24b7fb66974473d.mp4',
'https://telegra.ph/file/92c7e1232a8bf6363e4f9.mp4',
'https://telegra.ph/file/961d4145ccc3e7f1c01ad.mp4',
'https://telegra.ph/file/7678a0f51d614c4c16f13.mp4',
'https://telegra.ph/file/0bd52734057a8a8edb95e.mp4',
'https://telegra.ph/file/02ca204f4e6a35f857574.mp4',
'https://telegra.ph/file/fdee2c0ae99a871c879f2.mp4',
'https://telegra.ph/file/c390eb0c4663ec4c58e9f.mp4',
'https://telegra.ph/file/e53d1ca92142e93a9d3b8.mp4',
'https://telegra.ph/file/0584a114a36c10db6a611.mp4',
'https://telegra.ph/file/6b04390e25c21b28b482c.mp4',
'https://telegra.ph/file/de7eda58ae3b945410c19.mp4',
'https://telegra.ph/file/8be0819b1a9ccafd74653.mp4',
'https://telegra.ph/file/3affb77764c72e541c9c7.mp4',
'https://telegra.ph/file/75299bee060e8342daf3c.mp4',
'https://telegra.ph/file/a64a814e561242128d11e.mp4',
'https://telegra.ph/file/28db308ee36082e5bb9fd.mp4',
'https://telegra.ph/file/fdba7df79b5d2971ebcce.mp4',
'https://telegra.ph/file/712b555f518b24d6273d7.mp4',
'https://telegra.ph/file/da33f92a37947b82edcc9.mp4',
'https://telegra.ph/file/c222f5c8ce4d66911d435.mp4',
'https://telegra.ph/file/c3e8533c5df68002637e9.mp4',
'https://telegra.ph/file/5e7468de28080d22104f0.mp4',
'https://telegra.ph/file/ed501cdd941485700f0f7.mp4',
'https://telegra.ph/file/cf45ccea95042c50418d2.mp4',
'https://telegra.ph/file/9899a1a07e39ea63be5a8.mp4',
'https://telegra.ph/file/d3fe11465828b4e0beecc.mp4',
'https://telegra.ph/file/29cde46d96fda3f045362.mp4',
'https://telegra.ph/file/6263c04d8f76973db3749.mp4',
'https://telegra.ph/file/5725142ead78e6256e10c.mp4',
'https://telegra.ph/file/79c6aaa170276c6ba738f.mp4',
'https://telegra.ph/file/8ecab77ffbfd9508a79fa.mp4',
'https://telegra.ph/file/18f985d7424118cbc7c2c.mp4',
'https://telegra.ph/file/d2a191a0b1d37e8d438fb.mp4',
'https://telegra.ph/file/e30de06c74b03ec7f4dbe.mp4',
'https://telegra.ph/file/603b72935fa4924336013.mp4',
'https://telegra.ph/file/84fec549407826b771eff.mp4',
'https://telegra.ph/file/a545f1cc71495012116d9.mp4',
'https://telegra.ph/file/7387b6026b7372e010145.mp4',
'https://telegra.ph/file/6546e9c03537ce7790c1c.mp4',
'https://telegra.ph/file/d88c1ab8eb13516b0bffb.mp4',
'https://telegra.ph/file/6d7e9af01b965e9a77a97.mp4',
'https://telegra.ph/file/1f3ed23448a453aeb0fb8.mp4',
'https://telegra.ph/file/b4445a437bfed85ce1cfe.mp4',
'https://telegra.ph/file/c89842f113d6400f41189.mp4',
'https://telegra.ph/file/1dfa3514ea124ee1ac55d.mp4',
'https://telegra.ph/file/ef550078be389259671e2.mp4',
'https://telegra.ph/file/1ecdb51a887b4904c3f2c.mp4',
'https://telegra.ph/file/52ba35ab28b69b6edf237.mp4',
'https://telegra.ph/file/3ac2a77adb75720510469.mp4',
'https://telegra.ph/file/3bab53e94f43e79976c32.mp4',
'https://telegra.ph/file/0cd0f980a1ab7cae6a12b.mp4',
'https://telegra.ph/file/2d5bd17c074b14e93e314.mp4',
'https://telegra.ph/file/6ca61110a794e1fc7c9dd.mp4',
'https://telegra.ph/file/02e5beca86beafe662567.mp4',
'https://telegra.ph/file/e43ff3ba75463bbbbdbc9.mp4',
'https://telegra.ph/file/0e40492445fb2fe69e4a1.mp4',
'https://telegra.ph/file/e788988cb6d8ac0db05e3.mp4',
'https://telegra.ph/file/c2d9ef1f6ca34215439ff.mp4', 
'https://telegra.ph/file/0457f7a02bdb67c61d3ae.mp4',
'https://telegra.ph/file/33c16eb693cb7ab2143d3.mp4',
'https://telegra.ph/file/f17e992b482faac8277d8.mp4',
'https://telegra.ph/file/9d280c6661216a563a634.mp4',
'https://telegra.ph/file/f625ff6e72a106bd3ad64.mp4',
'https://telegra.ph/file/2f6615a2dc758b2cbafe5.mp4',
'https://telegra.ph/file/c7b1e8332d9419bd6c9b1.mp4',
'https://telegra.ph/file/100086ce83b6acefef13e.mp4',
'https://telegra.ph/file/43c150ec7d1ee7585e0c5.mp4',
'https://telegra.ph/file/4ac20f665d9bbdddb1ec3.mp4',
'https://telegra.ph/file/4481aa2d976322954ac31.mp4',
'https://telegra.ph/file/12b12a6c25f621a7fbf1e.mp4',
'https://telegra.ph/file/e96b2d68236f14616d679.mp4',
'https://telegra.ph/file/f9b30a7f909382b0b412c.mp4',
'https://telegra.ph/file/a8ad7dafc61f657d65691.mp4',
'https://telegra.ph/file/09df6adc8e27b1b3e9555.mp4',
'https://telegra.ph/file/e1d6dd041976751c9189f.mp4',
'https://telegra.ph/file/ce155a13f8446cfda2f4f.mp4',
'https://telegra.ph/file/34a6d72c30a58521996ea.mp4',
'https://telegra.ph/file/13421fa0a32788e239610.mp4', 
'https://telegra.ph/file/9ebd762576501b3bec5f0.mp4',
'https://telegra.ph/file/fee01966fdc42f8090d74.mp4',
'https://telegra.ph/file/c4864ffcb148e223c8663.mp4',
'https://telegra.ph/file/760b393696b91bf63fa3b.mp4',
'https://telegra.ph/file/8dff34106860983490cb1.mp4',
'https://telegra.ph/file/1fd3208de653179112fae.mp4',
'https://telegra.ph/file/0022181ce977641f187e1.mp4',
'https://telegra.ph/file/ced15c522f5a9a7368e6c.mp4', 
'https://telegra.ph/file/af424114779538297f8d8.mp4',
'https://telegra.ph/file/7fb95a67c400f73b1d70b.mp4',
'https://telegra.ph/file/7acb56bba95d24ada26d6.mp4', 
'https://telegra.ph/file/40a949a860c720841e64a.mp4', 
'https://telegra.ph/file/eaca558c81ce6da77d46c.mp4', 
'https://telegra.ph/file/ee5ef13b8a78a80b4d036.mp4', 
'https://telegra.ph/file/3309a3d6d57d7a2cd59ca.mp4', 
'https://telegra.ph/file/792c8a6457d2e6f895ec5.mp4', 
'https://telegra.ph/file/8932278c62d3bca3e2603.mp4', 
'https://telegra.ph/file/217aa7bcf5247e1f655aa.mp4', 
'https://telegra.ph/file/70517c1f73c5ecdc61a63.mp4', 
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايديت2', 'اديت'] 

export default handler
