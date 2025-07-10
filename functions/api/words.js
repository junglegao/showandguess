
const defaultCards = [
    { word: '小猫', hint: '学猫叫，做洗脸动作', difficulty: 'easy' },
    { word: '小狗', hint: '学狗叫，摇尾巴', difficulty: 'easy' },
    { word: '兔子', hint: '竖耳朵，蹦蹦跳跳', difficulty: 'easy' },
    { word: '大象', hint: '用手臂做象鼻子甩动', difficulty: 'medium' },
    { word: '猴子', hint: '抓痒痒，做攀爬动作', difficulty: 'medium' },
    { word: '老虎', hint: '做扑食动作，张大嘴', difficulty: 'hard' },
    { word: '跑步', hint: '原地做跑步动作', difficulty: 'easy' },
    { word: '跳舞', hint: '摆动身体，做舞蹈动作', difficulty: 'easy' },
    { word: '刷牙', hint: '做刷牙的动作', difficulty: 'easy' },
    { word: '游泳', hint: '做游泳划水动作', difficulty: 'medium' },
    { word: '骑车', hint: '做骑自行车动作', difficulty: 'medium' },
    { word: '踢球', hint: '做踢足球动作', difficulty: 'medium' },
    { word: '苹果', hint: '做啃苹果动作', difficulty: 'easy' },
    { word: '香蕉', hint: '做剥香蕉皮动作', difficulty: 'easy' },
    { word: '面条', hint: '做吃面条动作', difficulty: 'medium' },
    { word: '冰淇淋', hint: '做舔冰淇淋动作', difficulty: 'medium' },
    { word: '包子', hint: '双手捧着吃的动作', difficulty: 'hard' },
    { word: '西瓜', hint: '做切西瓜、吃西瓜动作', difficulty: 'medium' },
    { word: '写字', hint: '做写字动作', difficulty: 'easy' },
    { word: '画画', hint: '做画画动作', difficulty: 'easy' },
    { word: '读书', hint: '翻书页，做读书动作', difficulty: 'easy' },
    { word: '剪刀', hint: '做剪东西动作', difficulty: 'medium' },
    { word: '橡皮', hint: '做擦字动作', difficulty: 'hard' },
    { word: '尺子', hint: '做量长度、画直线动作', difficulty: 'hard' },
    { word: '汽车', hint: '做开车动作', difficulty: 'easy' },
    { word: '飞机', hint: '张开双臂做飞行动作', difficulty: 'easy' },
    { word: '火车', hint: '做火车开动作，发出"呜呜"声', difficulty: 'medium' },
    { word: '轮船', hint: '做船在水上摇摆动作', difficulty: 'medium' },
    { word: '公交车', hint: '做司机开车、开门动作', difficulty: 'hard' },
    { word: '自行车', hint: '做骑车动作', difficulty: 'medium' },
    { word: '下雨', hint: '手指做雨滴往下落动作', difficulty: 'easy' },
    { word: '太阳', hint: '双手画圆圈，做温暖动作', difficulty: 'easy' },
    { word: '刮风', hint: '做风吹动作，头发飘动', difficulty: 'medium' },
    { word: '下雪', hint: '做雪花飘落动作', difficulty: 'medium' },
    { word: '彩虹', hint: '用手画弧形，表示彩色', difficulty: 'hard' },
    { word: '打雷', hint: '做闪电动作，表示害怕', difficulty: 'hard' },
    { word: '张牙舞爪', hint: '张开嘴巴，挥动手臂做凶猛的样子', difficulty: 'easy' },
    { word: '手舞足蹈', hint: '高兴地挥动手臂，跳舞的动作', difficulty: 'easy' },
    { word: '摇头摆尾', hint: '左右摇头，扭动身体像小狗', difficulty: 'easy' },
    { word: '抓耳挠腮', hint: '用手抓耳朵，挠脸颊，表示着急', difficulty: 'easy' },
    { word: '拍手叫好', hint: '用力拍手，嘴巴张开喊好', difficulty: 'easy' },
    { word: '守株待兔', hint: '靠着一棵树坐着等待，眼睛盯着前方', difficulty: 'medium' },
    { word: '画蛇添足', hint: '先画蛇的动作，然后给它加上脚', difficulty: 'medium' },
    { word: '井底之蛙', hint: '蹲在地上，手做圆圈放在头顶，向上看', difficulty: 'medium' },
    { word: '掩耳盗铃', hint: '用手捂住耳朵，偷偷摸摸拿东西', difficulty: 'medium' },
    { word: '狐假虎威', hint: '先做狐狸狡猾的样子，再做老虎威猛的动作', difficulty: 'medium' },
    { word: '亡羊补牢', hint: '先做丢失的难过样子，然后做修补围栏的样子', difficulty: 'medium' },
    { word: '刻舟求剑', hint: '在船上刻记号，然后跳下水找东西', difficulty: 'medium' },
    { word: '盲人摸象', hint: '闭上眼睛，用手到处摸，做出困惑的表情', difficulty: 'hard' },
    { word: '对牛弹琴', hint: '做弹琴的动作，然后做牛的样子表示听不懂', difficulty: 'hard' },
    { word: '杯弓蛇影', hint: '拿杯子喝水，突然害怕地后退', difficulty: 'hard' },
    { word: '鹤立鸡群', hint: '先做鸡的样子，然后站得很高很直像鹤', difficulty: 'hard' },
    { word: '叶公好龙', hint: '先做喜欢的样子，然后看到真的时候害怕', difficulty: 'hard' },
    { word: '买椟还珠', hint: '拿一个盒子，把里面的珠子扔掉，只要盒子', difficulty: 'hard' },
    { word: '南辕北辙', hint: '指着南边说要去，但是走向北边', difficulty: 'hard' },
    { word: '塞翁失马', hint: '先做失去的难过样子，然后变成高兴的样子', difficulty: 'hard' }
];

export async function onRequest(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    switch (request.method) {
      case 'GET': {
        let cards = await env.WORDS_KV.get("cards", "json");
        if (!cards || cards.length === 0) {
          await env.WORDS_KV.put("cards", JSON.stringify(defaultCards));
          cards = defaultCards;
        }
        return new Response(JSON.stringify(cards), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'POST': {
        const card = await request.json();
        if (!card || !card.word || !card.hint || !card.difficulty) {
          return new Response('Bad Request: "word", "hint", and "difficulty" are required', { status: 400, headers: corsHeaders });
        }
        const cards = await env.WORDS_KV.get("cards", "json") || [];
        if (!cards.find(c => c.word === card.word)) {
          cards.push(card);
          await env.WORDS_KV.put("cards", JSON.stringify(cards));
        }
        return new Response(JSON.stringify({ success: true, card }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'DELETE': {
        const { word } = await request.json();
        if (!word) {
          return new Response('Bad Request: "word" is required', { status: 400, headers: corsHeaders });
        }
        let cards = await env.WORDS_KV.get("cards", "json") || [];
        const initialLength = cards.length;
        cards = cards.filter(c => c.word !== word);

        if (cards.length === initialLength) {
            return new Response('Word not found', { status: 404, headers: corsHeaders });
        }

        await env.WORDS_KV.put("cards", JSON.stringify(cards));
        return new Response(JSON.stringify({ success: true, word }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      default:
        return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500, headers: corsHeaders });
  }
}
