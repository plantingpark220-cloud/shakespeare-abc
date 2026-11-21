// 所有文字與圖片路徑都在這裡。要改金句、翻譯、小知識或檔名，只改這個檔。
// 圖片：用相同檔名覆蓋 assets/images 裡的檔案即可。
// 發音：使用瀏覽器內建的英式英語語音，朗讀 word 與 quote 這兩個欄位，不需要音檔。
const WORDS = [
  {
    "letter": "A",
    "word": "aroint",
    "ipa": "/əˈrɔɪnt/",
    "zh": "滾開（古語）",
    "quote": "“Aroint thee, witch!” the rump-fed ronyon cries.",
    "quoteZh": "「滾開，巫婆！」那肥臀的賤貨喊道。",
    "source": "《馬克白》1.3",
    "fact": "這是第一女巫轉述的：水手之妻對她吼「滾開，巫婆！」。aroint 是專門用來趕走女巫的古語，對開本拼成 Aroynt。",
    "image": "assets/images/a-aroint.jpg"
  },
  {
    "letter": "B",
    "word": "bodkin",
    "ipa": "/ˈbɒd.kɪn/",
    "zh": "短劍（古語）",
    "quote": "When he himself might his quietus make With a bare bodkin?",
    "quoteZh": "當他只要拿一把出鞘的短劍，就能給自己一個了結的時候？",
    "source": "《哈姆雷特》3.1",
    "fact": "出自哈姆雷特「To be or not to be」的獨白。bodkin 在這裡是短劍，quietus 是「了結」；bodkin 也可以指粗針或髮簪。",
    "image": "assets/images/b-bodkin.jpg"
  },
  {
    "letter": "C",
    "word": "contumely",
    "ipa": "/ˈkɒn.tjuː.mə.li/",
    "zh": "傲慢的侮辱",
    "quote": "The oppressor's wrong, the proud man's contumely, The pangs of despised love, the law's delay.",
    "quoteZh": "壓迫者的暴行，傲慢者的輕蔑，失戀的痛苦，法律的拖延。",
    "source": "《哈姆雷特》3.1",
    "fact": "同一段獨白裡列舉人生的種種苦楚。contumely 是帶著輕蔑的侮辱；有的版本寫成 proud man's，有的寫成 poor man's。",
    "image": "assets/images/c-contumely.jpg"
  },
  {
    "letter": "D",
    "word": "dateless",
    "ipa": "/ˈdeɪt.ləs/",
    "zh": "無期限的、永恆的",
    "quote": "O you The doors of breath, seal with a righteous kiss A dateless bargain to engrossing death!",
    "quoteZh": "噢，你們這氣息之門，用一個正當的吻，封印這與霸佔一切的死亡所訂的永恆契約！",
    "source": "《羅密歐與茱麗葉》5.3",
    "fact": "羅密歐在茱麗葉的墓室裡說的。dateless 是「沒有期限」，engrossing 是「獨占一切」。",
    "image": "assets/images/d-dateless.jpg"
  },
  {
    "letter": "E",
    "word": "equivocation",
    "ipa": "/ɪˌkwɪv.əˈkeɪ.ʃən/",
    "zh": "模稜兩可的話",
    "quote": "To doubt the equivocation of the fiend That lies like truth.",
    "quoteZh": "開始懷疑那魔鬼的模稜兩可，它說起謊來像真話。",
    "source": "《馬克白》5.5",
    "fact": "馬克白聽說樹林真的在移動，才發現女巫的預言字面是真的，意思卻不是他以為的那樣。守門人在 2.3 也談過 equivocator。",
    "image": "assets/images/e-equivocation.jpg"
  },
  {
    "letter": "F",
    "word": "fitful",
    "ipa": "/ˈfɪt.fəl/",
    "zh": "時斷時續的、不安穩的",
    "quote": "After life's fitful fever he sleeps well.",
    "quoteZh": "歷經人生時斷時續的熱病之後，他安睡了。",
    "source": "《馬克白》3.2",
    "fact": "馬克白對妻子談起剛被殺害的鄧肯，說他終於安息。",
    "image": "assets/images/f-fitful.jpg"
  },
  {
    "letter": "G",
    "word": "gossamer",
    "ipa": "/ˈɡɒs.ə.mə/",
    "zh": "蛛絲、輕柔細絲",
    "quote": "Hadst thou been aught but gossamer, feathers, air, So many fathom down precipitating, Thou'dst shiver'd like an egg.",
    "quoteZh": "你若不是蛛絲、羽毛和空氣，從這麼多尋的高處墜下，早就像蛋一樣摔碎了。",
    "source": "《李爾王》4.6",
    "fact": "愛德伽騙盲眼的葛羅斯特說他剛從多佛懸崖摔下來；fathom（尋）約六英尺。",
    "image": "assets/images/g-gossamer.jpg"
  },
  {
    "letter": "H",
    "word": "halcyon",
    "ipa": "/ˈhæl.si.ən/",
    "zh": "太平安寧的",
    "quote": "Expect Saint Martin's summer, halcyon days.",
    "quoteZh": "期待聖馬丁的小陽春，太平安寧的日子。",
    "source": "《亨利六世（上）》1.2",
    "fact": "貞德所說。halcyon 原指傳說中的翡翠鳥，後來指太平安寧的日子；Folger 版寫成 halcyons' days。",
    "image": "assets/images/h-halcyon.jpg"
  },
  {
    "letter": "I",
    "word": "insubstantial",
    "ipa": "/ˌɪn.səbˈstæn.ʃəl/",
    "zh": "虛幻無實的",
    "quote": "And, like this insubstantial pageant faded, Leave not a rack behind.",
    "quoteZh": "如同這虛幻的盛會消散，不留一縷雲絮。",
    "source": "《暴風雨》4.1",
    "fact": "普洛斯彼羅在假面劇結束後所說。rack 是飄散的薄雲，這段話常被當作莎士比亞對舞台的告別。",
    "image": "assets/images/i-insubstantial.jpg"
  },
  {
    "letter": "J",
    "word": "jocund",
    "ipa": "/ˈdʒɒk.ənd/",
    "zh": "歡快的",
    "quote": "Night's candles are burnt out, and jocund day Stands tiptoe on the misty mountain tops.",
    "quoteZh": "夜的蠟燭已燃盡，歡快的白晝踮起腳尖，站在迷霧籠罩的山頭。",
    "source": "《羅密歐與茱麗葉》3.5",
    "fact": "羅密歐在清晨催自己離開時說的，把白晝寫成踮著腳尖、準備起舞的人。",
    "image": "assets/images/j-jocund.jpg"
  },
  {
    "letter": "K",
    "word": "knell",
    "ipa": "/nɛl/",
    "zh": "喪鐘",
    "quote": "Hear it not, Duncan; for it is a knell That summons thee to heaven or to hell.",
    "quoteZh": "別聽見它，鄧肯；那是召喚你上天堂或下地獄的喪鐘。",
    "source": "《馬克白》2.1",
    "fact": "馬克白聽見鈴聲，知道該動手了，就走向鄧肯的寢室。knell 是為死者敲的鐘聲。",
    "image": "assets/images/k-knell.jpg"
  },
  {
    "letter": "L",
    "word": "luxury",
    "ipa": "/ˈlʌk.ʃər.i/",
    "zh": "縱慾、淫逸（古義）",
    "quote": "Let not the royal bed of Denmark be A couch for luxury and damned incest.",
    "quoteZh": "別讓丹麥的王床，成為縱慾與可憎亂倫的臥榻。",
    "source": "《哈姆雷特》1.5",
    "fact": "老哈姆雷特的鬼魂所說。luxury 在這裡是古義的「淫逸、縱慾」，不是現在的奢華。",
    "image": "assets/images/l-luxury.jpg"
  },
  {
    "letter": "M",
    "word": "mutiny",
    "ipa": "/ˈmjuː.tɪ.ni/",
    "zh": "暴亂、叛亂",
    "quote": "From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean.",
    "quoteZh": "從古老的仇恨，爆發為新的暴亂，市民的鮮血玷污了市民的雙手。",
    "source": "《羅密歐與茱麗葉》序幕",
    "fact": "這是開場的合唱團所說。mutiny 在這裡是紛爭與暴亂；civil 兼有「市民的」與「文明有禮的」兩層意思。",
    "image": "assets/images/m-mutiny.jpg"
  },
  {
    "letter": "N",
    "word": "nightingale",
    "ipa": "/ˈnaɪ.tɪŋ.ɡeɪl/",
    "zh": "夜鶯",
    "quote": "It was the nightingale, and not the lark, That pierced the fearful hollow of thine ear.",
    "quoteZh": "那是夜鶯，不是雲雀，它的歌聲刺進你驚懼的耳窩。",
    "source": "《羅密歐與茱麗葉》3.5",
    "fact": "茱麗葉想假裝天還沒亮，說那是夜鶯；羅密歐卻說那是報曉的雲雀。",
    "image": "assets/images/n-nightingale.jpg"
  },
  {
    "letter": "O",
    "word": "oblivion",
    "ipa": "/əˈblɪv.i.ən/",
    "zh": "遺忘",
    "quote": "Is second childishness and mere oblivion, Sans teeth, sans eyes, sans taste, sans everything.",
    "quoteZh": "是第二次的童年，全然的遺忘，沒牙、沒眼、沒味覺，什麼都沒有。",
    "source": "《皆大歡喜》2.7",
    "fact": "這是傑克斯「人生七個階段」演說的最後一幕。他說完時，奧蘭多正好扶著年老的亞當進場。sans 是法語借詞，意思是「沒有」。",
    "image": "assets/images/o-oblivion.jpg"
  },
  {
    "letter": "P",
    "word": "perdition",
    "ipa": "/pəˈdɪʃ.ən/",
    "zh": "沉淪、地獄",
    "quote": "Perdition catch my soul, But I do love thee!",
    "quoteZh": "若我不愛你，就讓地獄攫走我的靈魂！",
    "source": "《奧賽羅》3.3",
    "fact": "奧賽羅在苔絲狄蒙娜離開後獨自說的，接著說：當我不再愛你，混沌就會重臨。wretch 在這裡是「可憐的小東西」的昵稱。",
    "image": "assets/images/p-perdition.jpg"
  },
  {
    "letter": "Q",
    "word": "quintessence",
    "ipa": "/kwɪnˈtɛs.əns/",
    "zh": "精華、典型",
    "quote": "And yet, to me, what is this quintessence of dust?",
    "quoteZh": "然而對我來說，這塵土的精華又算什麼？",
    "source": "《哈姆雷特》2.2",
    "fact": "哈姆雷特對羅森克蘭茲和吉爾登斯吞說的。quintessence 是「第五元素」，早期煉金術士認為它比四大元素更純粹。",
    "image": "assets/images/q-quintessence.jpg"
  },
  {
    "letter": "R",
    "word": "rosemary",
    "ipa": "/ˈrəʊz.mər.i/",
    "zh": "迷迭香",
    "quote": "There's rosemary, that's for remembrance; pray, love, remember.",
    "quoteZh": "這是迷迭香，代表回憶；請你，愛人，記得。",
    "source": "《哈姆雷特》4.5",
    "fact": "奧菲莉亞發瘋後分送花草。當時婚禮與葬禮都會用到迷迭香；接著她說三色堇代表思念（pansy 源自法語 pensée）。",
    "image": "assets/images/r-rosemary.jpg"
  },
  {
    "letter": "S",
    "word": "sleave",
    "ipa": "/sliːv/",
    "zh": "糾結的絲線",
    "quote": "Sleep that knits up the ravell'd sleave of care.",
    "quoteZh": "睡眠，能把煩惱纏亂的絲線重新編織整齊。",
    "source": "《馬克白》2.2",
    "fact": "馬克白殺人後說，他聽見有聲音喊「不要再睡了」。sleave 是糾結的絲線，有些版本拼成 sleeve。",
    "image": "assets/images/s-sleave.jpg"
  },
  {
    "letter": "T",
    "word": "trumpet-tongued",
    "ipa": "/ˈtrʌm.pɪt.tʌŋd/",
    "zh": "如號角般響亮的",
    "quote": "His virtues Will plead like angels, trumpet-tongued, against The deep damnation of his taking-off.",
    "quoteZh": "他的美德將像天使一樣，用號角般響亮的聲音，控訴他被害的深重罪孽。",
    "source": "《馬克白》1.7",
    "fact": "馬克白在行刺前猶豫，想到鄧肯的美德會像天使一樣為他發聲。",
    "image": "assets/images/t-trumpettongued.jpg"
  },
  {
    "letter": "U",
    "word": "unaccommodated",
    "ipa": "/ˌʌn.əˈkɒm.ə.deɪ.tɪd/",
    "zh": "未經文明修飾的、赤裸的",
    "quote": "Unaccommodated man is no more but such a poor, bare, forked animal as thou art.",
    "quoteZh": "未經修飾的人，不過是像你這樣一頭可憐、赤裸、兩腿分叉的動物。",
    "source": "《李爾王》3.4",
    "fact": "李爾在暴風雨中，看見裝瘋、近乎赤身的愛德伽（扮成可憐的湯姆）所說。",
    "image": "assets/images/u-unaccommodated.jpg"
  },
  {
    "letter": "V",
    "word": "votaress",
    "ipa": "/ˈvəʊ.tər.əs/",
    "zh": "女信徒、女修行者",
    "quote": "And the imperial votaress passed on, In maiden meditation, fancy-free.",
    "quoteZh": "那位尊貴的女修行者款款走過，沉浸在少女的冥想裡，心中不染情愛。",
    "source": "《仲夏夜之夢》2.1",
    "fact": "歐伯龍描述丘比特的箭射偏了，那名女子毫髮無傷地走過；常被解讀為影射終身未婚的伊莉莎白一世。",
    "image": "assets/images/v-votaress.jpg"
  },
  {
    "letter": "W",
    "word": "welkin",
    "ipa": "/ˈwɛl.kɪn/",
    "zh": "蒼穹、天空",
    "quote": "But shall we make the welkin dance indeed?",
    "quoteZh": "我們真要讓蒼穹也跟著跳舞嗎？",
    "source": "《第十二夜》2.3",
    "fact": "托比爵士和朋友半夜狂歡時所說；welkin 是蒼穹，也出現在《暴風雨》1.2。",
    "image": "assets/images/w-welkin.jpg"
  },
  {
    "letter": "X",
    "word": "Xanthippe",
    "ipa": "/zænˈtɪp.i/",
    "zh": "贊西佩（悍婦的代稱）",
    "quote": "As old as Sibyl, and as curst and shrewd As Socrates' Xanthippe, or a worse.",
    "quoteZh": "像女先知一樣老，像蘇格拉底的贊西佩一樣暴躁刁鑽，甚至更糟。",
    "source": "《馴悍記》1.2",
    "fact": "彼特魯喬以此表示，不管對方脾氣多壞，只要有嫁妝他都敢娶。curst 是暴躁，shrewd 在當時有「刁鑽」之意。",
    "image": "assets/images/x-xanthippe.jpg"
  },
  {
    "letter": "Y",
    "word": "yoke",
    "ipa": "/jəʊk/",
    "zh": "軛、枷鎖",
    "quote": "And shake the yoke of inauspicious stars From this world-wearied flesh.",
    "quoteZh": "從這具厭世疲憊的身軀上，甩掉不祥之星的軛。",
    "source": "《羅密歐與茱麗葉》5.3",
    "fact": "羅密歐在墓室裡說的，與序幕裡「星象不吉的戀人」（star-crossed）互相呼應。",
    "image": "assets/images/y-yoke.jpg"
  },
  {
    "letter": "Z",
    "word": "zenith",
    "ipa": "/ˈzɛn.ɪθ/",
    "zh": "天頂、巔峰",
    "quote": "I find my zenith doth depend upon A most auspicious star.",
    "quoteZh": "我發現我命運的巔峰，全繫於一顆最吉利的星。",
    "source": "《暴風雨》1.2",
    "fact": "普洛斯彼羅對米蘭達說，他的命運正到最高點，必須把握；zenith 是占星與天文用語。",
    "image": "assets/images/z-zenith.jpg"
  }
];
