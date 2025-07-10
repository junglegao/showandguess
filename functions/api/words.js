
const defaultWords = [
    '小猫', '小狗', '兔子', '大象', '猴子', '老虎', '跑步', '跳舞', '刷牙', '游泳', '骑车', '踢球', '苹果', '香蕉', '面条', '冰淇淋', '包子', '西瓜', '写字', '画画', '读书', '剪刀', '橡皮', '尺子', '汽车', '飞机', '火车', '轮船', '公交车', '自行车', '下雨', '太阳', '刮风', '下雪', '彩虹', '打雷', '张牙舞爪', '手舞足蹈', '摇头摆尾', '抓耳挠腮', '拍手叫好', '守株待兔', '画蛇添足', '井底之蛙', '掩耳盗铃', '狐假虎威', '亡羊补牢', '刻舟求剑', '盲人摸象', '对牛弹琴', '杯弓蛇影', '鹤立鸡群', '叶公好龙', '买椟还珠', '南辕北辙', '塞翁失马'
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
        let words = await env.WORDS_KV.get("words", "json");
        if (!words || words.length === 0) {
          await env.WORDS_KV.put("words", JSON.stringify(defaultWords));
          words = defaultWords;
        }
        return new Response(JSON.stringify(words), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'POST': {
        const { word } = await request.json();
        if (!word) {
          return new Response('Bad Request: "word" is required', { status: 400, headers: corsHeaders });
        }
        const words = await env.WORDS_KV.get("words", "json") || [];
        if (!words.includes(word)) {
          words.push(word);
          await env.WORDS_KV.put("words", JSON.stringify(words));
        }
        return new Response(JSON.stringify({ success: true, word }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'DELETE': {
        const { word } = await request.json();
        if (!word) {
          return new Response('Bad Request: "word" is required', { status: 400, headers: corsHeaders });
        }
        let words = await env.WORDS_KV.get("words", "json") || [];
        const initialLength = words.length;
        words = words.filter(w => w !== word);

        if (words.length === initialLength) {
            return new Response('Word not found', { status: 404, headers: corsHeaders });
        }

        await env.WORDS_KV.put("words", JSON.stringify(words));
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
