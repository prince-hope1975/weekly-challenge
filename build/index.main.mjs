// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      noOfUsers: {
        users: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v493, v494, v501, v504, v508, v532] = svs;
              return (await ((async () => {
                
                
                return v501;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    customers_deposit0_71: ctc3,
    customers_joinBank0_71: ctc4,
    customers_withdrawFunds0_71: ctc3
    });
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v490 = stdlib.protect(ctc1, interact.fee, 'for Deployer\'s interact field fee');
  
  const txn1 = await (ctc.sendrecv({
    args: [v490],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v494], secs: v496, time: v495, didSend: v27, from: v493 } = txn1;
      
      ;
      const v498 = [v493, v493, v493, v493, v493];
      
      const v501 = v498;
      const v502 = true;
      const v504 = stdlib.checkedBigNumberify('./index.rsh:35:5:decimal', stdlib.UInt_max, '0');
      const v505 = v495;
      const v508 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v502;})()) {
        const v532 = stdlib.add(v505, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v493,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v494], secs: v496, time: v495, didSend: v27, from: v493 } = txn1;
  ;
  const v498 = [v493, v493, v493, v493, v493];
  stdlib.protect(ctc0, await interact.alert(), {
    at: './index.rsh:31:26:application',
    fs: ['at ./index.rsh:31:26:application call to [unknown function] (defined at: ./index.rsh:31:26:function exp)', 'at ./index.rsh:31:26:application call to "liftedInteract" (defined at: ./index.rsh:31:26:application)'],
    msg: 'alert',
    who: 'Deployer'
    });
  
  let v501 = v498;
  let v502 = true;
  let v504 = stdlib.checkedBigNumberify('./index.rsh:35:5:decimal', stdlib.UInt_max, '0');
  let v505 = v495;
  let v508 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v502;})()) {
    const v532 = stdlib.add(v505, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: ['time', v532],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v786], secs: v788, time: v787, didSend: v457, from: v785 } = txn3;
      undefined /* setApiDetails */;
      ;
      const v789 = false;
      await txn3.getOutput('customers_bankClosing', 'v789', ctc6, v789);
      const cv501 = v501;
      const cv502 = true;
      const cv504 = v504;
      const cv505 = v787;
      const cv508 = v508;
      
      v501 = cv501;
      v502 = cv502;
      v504 = cv504;
      v505 = cv505;
      v508 = cv508;
      
      continue;
      }
    else {
      const {data: [v590], secs: v592, time: v591, didSend: v374, from: v589 } = txn2;
      switch (v590[0]) {
        case 'customers_deposit0_71': {
          const v593 = v590[1];
          undefined /* setApiDetails */;
          const v598 = v593[stdlib.checkedBigNumberify('./index.rsh:58:9:spread', stdlib.UInt_max, '0')];
          const v603 = stdlib.add(v508, v598);
          ;
          const v606 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v589), null);
          const v607 = stdlib.fromSome(v606, stdlib.checkedBigNumberify('./index.rsh:63:42:decimal', stdlib.UInt_max, '0'));
          const v608 = stdlib.add(v607, v598);
          await stdlib.mapSet(map0, v589, v608);
          const v609 = true;
          await txn2.getOutput('customers_deposit', 'v609', ctc6, v609);
          const cv501 = v501;
          const cv502 = true;
          const cv504 = v504;
          const cv505 = v591;
          const cv508 = v603;
          
          v501 = cv501;
          v502 = cv502;
          v504 = cv504;
          v505 = cv505;
          v508 = cv508;
          
          continue;
          break;
          }
        case 'customers_joinBank0_71': {
          const v656 = v590[1];
          undefined /* setApiDetails */;
          const v666 = stdlib.add(v508, v494);
          ;
          const v682 = stdlib.mod(v504, stdlib.checkedBigNumberify('./index.rsh:52:63:decimal', stdlib.UInt_max, '5'));
          const v684 = stdlib.Array_set(v501, v682, v589);
          await stdlib.mapSet(map0, v589, stdlib.checkedBigNumberify('./index.rsh:53:22:decimal', stdlib.UInt_max, '0'));
          const v685 = true;
          await txn2.getOutput('customers_joinBank', 'v685', ctc6, v685);
          const v691 = stdlib.add(v504, stdlib.checkedBigNumberify('./index.rsh:55:36:decimal', stdlib.UInt_max, '1'));
          const cv501 = v684;
          const cv502 = true;
          const cv504 = v691;
          const cv505 = v591;
          const cv508 = v666;
          
          v501 = cv501;
          v502 = cv502;
          v504 = cv504;
          v505 = cv505;
          v508 = cv508;
          
          continue;
          break;
          }
        case 'customers_withdrawFunds0_71': {
          const v719 = v590[1];
          undefined /* setApiDetails */;
          ;
          const v758 = v719[stdlib.checkedBigNumberify('./index.rsh:70:9:spread', stdlib.UInt_max, '0')];
          const v759 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v589), null);
          const v760 = stdlib.fromSome(v759, stdlib.checkedBigNumberify('./index.rsh:78:57:decimal', stdlib.UInt_max, '0'));
          const v761 = stdlib.gt(v760, v758);
          const v762 = v761 ? v758 : v760;
          const v764 = stdlib.gt(v762, v508);
          const v765 = v764 ? v508 : v762;
          const v768 = stdlib.sub(v760, v765);
          await stdlib.mapSet(map0, v589, v768);
          const v769 = true;
          await txn2.getOutput('customers_withdrawFunds', 'v769', ctc6, v769);
          const v779 = stdlib.sub(v508, v765);
          ;
          const cv501 = v501;
          const cv502 = true;
          const cv504 = v504;
          const cv505 = v591;
          const cv508 = v779;
          
          v501 = cv501;
          v502 = cv502;
          v504 = cv504;
          v505 = cv505;
          v508 = cv508;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  return;
  
  
  };
export async function _customers_bankClosing3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _customers_bankClosing3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _customers_bankClosing3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v501, v504, v508, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1]);
  const v784 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:87:7:application',
    fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:7:function exp)', 'at ./index.rsh:86:37:application call to [unknown function] (defined at: ./index.rsh:86:37:function exp)'],
    msg: 'in',
    who: 'customers_bankClosing'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v501, v504, v508, v532, v784],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:87:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v786], secs: v788, time: v787, didSend: v457, from: v785 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "customers_bankClosing"
        });
      ;
      const v789 = false;
      const v790 = await txn1.getOutput('customers_bankClosing', 'v789', ctc6, v789);
      
      const v1125 = v501;
      const v1127 = v504;
      const v1129 = v508;
      const v1130 = stdlib.add(v787, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v786], secs: v788, time: v787, didSend: v457, from: v785 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v789 = false;
  const v790 = await txn1.getOutput('customers_bankClosing', 'v789', ctc6, v789);
  stdlib.protect(ctc0, await interact.out(v786, v790), {
    at: './index.rsh:87:7:application',
    fs: ['at ./index.rsh:87:7:application call to [unknown function] (defined at: ./index.rsh:87:7:function exp)', 'at ./index.rsh:88:8:application call to "k" (defined at: ./index.rsh:87:7:function exp)', 'at ./index.rsh:86:37:application call to [unknown function] (defined at: ./index.rsh:86:37:function exp)'],
    msg: 'out',
    who: 'customers_bankClosing'
    });
  
  const v1125 = v501;
  const v1127 = v504;
  const v1129 = v508;
  const v1130 = stdlib.add(v787, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
  return;
  
  
  
  };
export async function _customers_deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _customers_deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _customers_deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    customers_deposit0_71: ctc5,
    customers_joinBank0_71: ctc6,
    customers_withdrawFunds0_71: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v501, v504, v508, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1]);
  const v549 = ctc.selfAddress();
  const v551 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_deposit0_71" (defined at: ./index.rsh:58:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'in',
    who: 'customers_deposit'
    });
  const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v554 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v549), null);
  let v555;
  switch (v554[0]) {
    case 'None': {
      const v556 = v554[1];
      v555 = false;
      
      break;
      }
    case 'Some': {
      const v557 = v554[1];
      v555 = true;
      
      break;
      }
    }
  stdlib.assert(v555, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:19:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)', 'at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:11:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_deposit0_71" (defined at: ./index.rsh:58:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'Not member',
    who: 'customers_deposit'
    });
  const v562 = ['customers_deposit0_71', v551];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v501, v504, v508, v532, v562],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v552, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v590], secs: v592, time: v591, didSend: v374, from: v589 } = txn1;
      
      switch (v590[0]) {
        case 'customers_deposit0_71': {
          const v593 = v590[1];
          sim_r.txns.push({
            kind: 'api',
            who: "customers_deposit"
            });
          const v598 = v593[stdlib.checkedBigNumberify('./index.rsh:58:9:spread', stdlib.UInt_max, '0')];
          const v603 = stdlib.add(v508, v598);
          sim_r.txns.push({
            amt: v598,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v606 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v589), null);
          const v607 = stdlib.fromSome(v606, stdlib.checkedBigNumberify('./index.rsh:63:42:decimal', stdlib.UInt_max, '0'));
          const v608 = stdlib.add(v607, v598);
          await stdlib.simMapSet(sim_r, 0, v589, v608);
          const v609 = true;
          const v610 = await txn1.getOutput('customers_deposit', 'v609', ctc8, v609);
          
          const v1131 = v501;
          const v1133 = v504;
          const v1135 = v603;
          const v1136 = stdlib.add(v591, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'customers_joinBank0_71': {
          const v656 = v590[1];
          
          break;
          }
        case 'customers_withdrawFunds0_71': {
          const v719 = v590[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v590], secs: v592, time: v591, didSend: v374, from: v589 } = txn1;
  switch (v590[0]) {
    case 'customers_deposit0_71': {
      const v593 = v590[1];
      undefined /* setApiDetails */;
      const v598 = v593[stdlib.checkedBigNumberify('./index.rsh:58:9:spread', stdlib.UInt_max, '0')];
      const v603 = stdlib.add(v508, v598);
      ;
      const v606 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v589), null);
      const v607 = stdlib.fromSome(v606, stdlib.checkedBigNumberify('./index.rsh:63:42:decimal', stdlib.UInt_max, '0'));
      const v608 = stdlib.add(v607, v598);
      await stdlib.mapSet(map0, v589, v608);
      const v609 = true;
      const v610 = await txn1.getOutput('customers_deposit', 'v609', ctc8, v609);
      if (v374) {
        stdlib.protect(ctc0, await interact.out(v593, v610), {
          at: './index.rsh:59:7:application',
          fs: ['at ./index.rsh:59:7:application call to [unknown function] (defined at: ./index.rsh:59:7:function exp)', 'at ./index.rsh:64:10:application call to "h" (defined at: ./index.rsh:62:14:function exp)', 'at ./index.rsh:62:14:application call to [unknown function] (defined at: ./index.rsh:62:14:function exp)'],
          msg: 'out',
          who: 'customers_deposit'
          });
        }
      else {
        }
      
      const v1131 = v501;
      const v1133 = v504;
      const v1135 = v603;
      const v1136 = stdlib.add(v591, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
      return;
      
      break;
      }
    case 'customers_joinBank0_71': {
      const v656 = v590[1];
      return;
      break;
      }
    case 'customers_withdrawFunds0_71': {
      const v719 = v590[1];
      return;
      break;
      }
    }
  
  
  };
export async function _customers_joinBank3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _customers_joinBank3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _customers_joinBank3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    customers_deposit0_71: ctc6,
    customers_joinBank0_71: ctc5,
    customers_withdrawFunds0_71: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v501, v504, v508, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1]);
  const v534 = ctc.selfAddress();
  const v536 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_joinBank0_71" (defined at: ./index.rsh:44:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'in',
    who: 'customers_joinBank'
    });
  const v538 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v534), null);
  let v539;
  switch (v538[0]) {
    case 'None': {
      const v540 = v538[1];
      v539 = true;
      
      break;
      }
    case 'Some': {
      const v541 = v538[1];
      v539 = false;
      
      break;
      }
    }
  stdlib.assert(v539, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_joinBank0_71" (defined at: ./index.rsh:44:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'Already a member',
    who: 'customers_joinBank'
    });
  const v543 = stdlib.le(v504, stdlib.checkedBigNumberify('./index.rsh:48:24:decimal', stdlib.UInt_max, '5'));
  stdlib.assert(v543, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_joinBank0_71" (defined at: ./index.rsh:44:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'Limit Exceeded cannot register in Bank',
    who: 'customers_joinBank'
    });
  const v547 = ['customers_joinBank0_71', v536];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v501, v504, v508, v532, v547],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v494, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v590], secs: v592, time: v591, didSend: v374, from: v589 } = txn1;
      
      switch (v590[0]) {
        case 'customers_deposit0_71': {
          const v593 = v590[1];
          
          break;
          }
        case 'customers_joinBank0_71': {
          const v656 = v590[1];
          sim_r.txns.push({
            kind: 'api',
            who: "customers_joinBank"
            });
          const v666 = stdlib.add(v508, v494);
          sim_r.txns.push({
            amt: v494,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v682 = stdlib.mod(v504, stdlib.checkedBigNumberify('./index.rsh:52:63:decimal', stdlib.UInt_max, '5'));
          const v684 = stdlib.Array_set(v501, v682, v589);
          await stdlib.simMapSet(sim_r, 0, v589, stdlib.checkedBigNumberify('./index.rsh:53:22:decimal', stdlib.UInt_max, '0'));
          const v685 = true;
          const v686 = await txn1.getOutput('customers_joinBank', 'v685', ctc8, v685);
          
          const v691 = stdlib.add(v504, stdlib.checkedBigNumberify('./index.rsh:55:36:decimal', stdlib.UInt_max, '1'));
          const v1155 = v684;
          const v1157 = v691;
          const v1159 = v666;
          const v1160 = stdlib.add(v591, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'customers_withdrawFunds0_71': {
          const v719 = v590[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v590], secs: v592, time: v591, didSend: v374, from: v589 } = txn1;
  switch (v590[0]) {
    case 'customers_deposit0_71': {
      const v593 = v590[1];
      return;
      break;
      }
    case 'customers_joinBank0_71': {
      const v656 = v590[1];
      undefined /* setApiDetails */;
      const v666 = stdlib.add(v508, v494);
      ;
      const v682 = stdlib.mod(v504, stdlib.checkedBigNumberify('./index.rsh:52:63:decimal', stdlib.UInt_max, '5'));
      const v684 = stdlib.Array_set(v501, v682, v589);
      await stdlib.mapSet(map0, v589, stdlib.checkedBigNumberify('./index.rsh:53:22:decimal', stdlib.UInt_max, '0'));
      const v685 = true;
      const v686 = await txn1.getOutput('customers_joinBank', 'v685', ctc8, v685);
      if (v374) {
        stdlib.protect(ctc0, await interact.out(v656, v686), {
          at: './index.rsh:45:7:application',
          fs: ['at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:7:function exp)', 'at ./index.rsh:54:10:application call to "k" (defined at: ./index.rsh:51:11:function exp)', 'at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:11:function exp)'],
          msg: 'out',
          who: 'customers_joinBank'
          });
        }
      else {
        }
      
      const v691 = stdlib.add(v504, stdlib.checkedBigNumberify('./index.rsh:55:36:decimal', stdlib.UInt_max, '1'));
      const v1155 = v684;
      const v1157 = v691;
      const v1159 = v666;
      const v1160 = stdlib.add(v591, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
      return;
      
      break;
      }
    case 'customers_withdrawFunds0_71': {
      const v719 = v590[1];
      return;
      break;
      }
    }
  
  
  };
export async function _customers_withdrawFunds3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _customers_withdrawFunds3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _customers_withdrawFunds3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    customers_deposit0_71: ctc5,
    customers_joinBank0_71: ctc6,
    customers_withdrawFunds0_71: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v501, v504, v508, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1]);
  const v564 = ctc.selfAddress();
  const v566 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:72:11:application call to [unknown function] (defined at: ./index.rsh:72:11:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_withdrawFunds0_71" (defined at: ./index.rsh:70:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'in',
    who: 'customers_withdrawFunds'
    });
  const v570 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v564), null);
  let v571;
  switch (v570[0]) {
    case 'None': {
      const v572 = v570[1];
      v571 = false;
      
      break;
      }
    case 'Some': {
      const v573 = v570[1];
      v571 = true;
      
      break;
      }
    }
  stdlib.assert(v571, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:72:11:application call to [unknown function] (defined at: ./index.rsh:72:11:function exp)', 'at ./index.rsh:72:11:application call to [unknown function] (defined at: ./index.rsh:72:11:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_withdrawFunds0_71" (defined at: ./index.rsh:70:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'Not a member',
    who: 'customers_withdrawFunds'
    });
  const v576 = stdlib.fromSome(v570, stdlib.checkedBigNumberify('./index.rsh:74:36:decimal', stdlib.UInt_max, '0'));
  const v577 = stdlib.gt(v576, stdlib.checkedBigNumberify('./index.rsh:74:41:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v577, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:74:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:72:11:application call to [unknown function] (defined at: ./index.rsh:72:11:function exp)', 'at ./index.rsh:72:11:application call to [unknown function] (defined at: ./index.rsh:72:11:function exp)', 'at ./index.rsh:33:67:application call to "runcustomers_withdrawFunds0_71" (defined at: ./index.rsh:70:9:function exp)', 'at ./index.rsh:33:67:application call to [unknown function] (defined at: ./index.rsh:33:67:function exp)'],
    msg: 'Insufficient',
    who: 'customers_withdrawFunds'
    });
  const v582 = ['customers_withdrawFunds0_71', v566];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v501, v504, v508, v532, v582],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v590], secs: v592, time: v591, didSend: v374, from: v589 } = txn1;
      
      switch (v590[0]) {
        case 'customers_deposit0_71': {
          const v593 = v590[1];
          
          break;
          }
        case 'customers_joinBank0_71': {
          const v656 = v590[1];
          
          break;
          }
        case 'customers_withdrawFunds0_71': {
          const v719 = v590[1];
          sim_r.txns.push({
            kind: 'api',
            who: "customers_withdrawFunds"
            });
          ;
          const v758 = v719[stdlib.checkedBigNumberify('./index.rsh:70:9:spread', stdlib.UInt_max, '0')];
          const v759 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v589), null);
          const v760 = stdlib.fromSome(v759, stdlib.checkedBigNumberify('./index.rsh:78:57:decimal', stdlib.UInt_max, '0'));
          const v761 = stdlib.gt(v760, v758);
          const v762 = v761 ? v758 : v760;
          const v764 = stdlib.gt(v762, v508);
          const v765 = v764 ? v508 : v762;
          const v768 = stdlib.sub(v760, v765);
          await stdlib.simMapSet(sim_r, 0, v589, v768);
          const v769 = true;
          const v770 = await txn1.getOutput('customers_withdrawFunds', 'v769', ctc8, v769);
          
          const v779 = stdlib.sub(v508, v765);
          sim_r.txns.push({
            kind: 'from',
            to: v589,
            tok: undefined /* Nothing */
            });
          const v1179 = v501;
          const v1181 = v504;
          const v1183 = v779;
          const v1184 = stdlib.add(v591, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc4, ctc1, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v590], secs: v592, time: v591, didSend: v374, from: v589 } = txn1;
  switch (v590[0]) {
    case 'customers_deposit0_71': {
      const v593 = v590[1];
      return;
      break;
      }
    case 'customers_joinBank0_71': {
      const v656 = v590[1];
      return;
      break;
      }
    case 'customers_withdrawFunds0_71': {
      const v719 = v590[1];
      undefined /* setApiDetails */;
      ;
      const v758 = v719[stdlib.checkedBigNumberify('./index.rsh:70:9:spread', stdlib.UInt_max, '0')];
      const v759 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v589), null);
      const v760 = stdlib.fromSome(v759, stdlib.checkedBigNumberify('./index.rsh:78:57:decimal', stdlib.UInt_max, '0'));
      const v761 = stdlib.gt(v760, v758);
      const v762 = v761 ? v758 : v760;
      const v764 = stdlib.gt(v762, v508);
      const v765 = v764 ? v508 : v762;
      const v768 = stdlib.sub(v760, v765);
      await stdlib.mapSet(map0, v589, v768);
      const v769 = true;
      const v770 = await txn1.getOutput('customers_withdrawFunds', 'v769', ctc8, v769);
      if (v374) {
        stdlib.protect(ctc0, await interact.out(v719, v770), {
          at: './index.rsh:71:7:application',
          fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:81:10:application call to "k" (defined at: ./index.rsh:77:16:function exp)', 'at ./index.rsh:77:16:application call to [unknown function] (defined at: ./index.rsh:77:16:function exp)'],
          msg: 'out',
          who: 'customers_withdrawFunds'
          });
        }
      else {
        }
      
      const v779 = stdlib.sub(v508, v765);
      ;
      const v1179 = v501;
      const v1181 = v504;
      const v1183 = v779;
      const v1184 = stdlib.add(v591, stdlib.checkedBigNumberify('./index.rsh:86:27:decimal', stdlib.UInt_max, '5000'));
      return;
      
      break;
      }
    }
  
  
  };
export async function customers_bankClosing(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for customers_bankClosing expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for customers_bankClosing expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _customers_bankClosing3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function customers_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for customers_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for customers_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _customers_deposit3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function customers_joinBank(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for customers_joinBank expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for customers_joinBank expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _customers_joinBank3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function customers_withdrawFunds(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for customers_withdrawFunds expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for customers_withdrawFunds expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _customers_withdrawFunds3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`customers_bankClosing()byte`, `customers_deposit(uint64)byte`, `customers_joinBank()byte`, `customers_withdrawFunds(uint64)byte`],
    pure: [`noOfUsers_users()address[5]`],
    sigs: [`customers_bankClosing()byte`, `customers_deposit(uint64)byte`, `customers_joinBank()byte`, `customers_withdrawFunds(uint64)byte`, `noOfUsers_users()address[5]`]
    },
  appApproval: `BiAPAAEDIAIFCAnW087AB7PVp/oKkJz8iQ7O2LeLBdgByAHQASYDAQABAQAiNQAxGEEDgCpkSSJbNQEhBls1AjEZIxJBAAoxACghB69mQgNMNhoAF0lBAHsiNQQjNQZJIQgMQAA6SSEJDEAAIUkhCgxAABIhChJENhoBNf+AAQI0/1BCAMghCRJEKkIAYyEIEkQqNf8pNP9QIQavUEIArkkhCwxAABkhCxJENAEkEkQoZClkUEk1A1cooDUHQgLsgaf7pI8DEkQ2GgE1/yg0/1BCAHo2GgIXNQQ2GgM2GgEXSSEEDEAB20kkDEAAXyQSRCQ0ARJENARJIhJMNAISEUQoZClkUDUDSTUFNf+ABMiaD7s0/1CwMgY0AyEMWw9EgAkAAAAAAAADFQCwKDUHNANXACA0AyVbNANXKKAjNAMhDVsyBjQDIQ5bQgG7SCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSVcAIDX/JVs1/lcooDX9IQ1bNfwhDls1+0k1BTX6gAQeBuawNPpQsDIGNAMhDFsMRDT6IlVJIwxAANJJIQQMQAB2IQQSRDT6VwEINfk0+Rc1+CIxAIgCEUk19iNbNPYiVU1JNfc0+DT3NPgNTUk19jT7NPY0+w1NNfUxACgpNPc09QkWUGaACQAAAAAAAAMBAbApNQexIrIBNPWyCCOyEDEAsgezNP80/jT9IzT8MgY0+zT1CUIA6Eg0/ogBujEAKIAJAQAAAAAAAAAAZoAJAAAAAAAAAq0BsCk1BzT/NP40/SIlNPwhBRgLUjEAUDT9JUk0/CEFGAsIgaABUlAjNPwjCDIGNPs0/ghCAJNINPpXAQg1+TT5FzX4NPiIAVkxACgpIjEAiAFASTX3I1s09yJVTTT4CBZQZoAJAAAAAAAAAmEBsCk1BzT/NP40/SM0/DIGNPs0+AhCAEUiEkSBoI0GiAETIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQA0/zEAMQBQMQBQMQBQMQBQIyIyBiJCAAA1/zX+Nf01/DX7Nfo1+TT8QQA2NP6BiCcINfg0+TT6FlA0+1A0/RZQNP8WUDT4FlAoSwFXAH9nKUsBV39hZ0gkNQEyBjUCQgAvsSKyATT/sggjshA0+bIHs0IAADEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAAFSCEHr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 224,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v494",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v494",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_customers_deposit0_71",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_customers_joinBank0_71",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_customers_withdrawFunds0_71",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v590",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v786",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v609",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v685",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v769",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v789",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_customers_deposit0_71",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_customers_joinBank0_71",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T8",
                    "name": "_customers_withdrawFunds0_71",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v590",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v786",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "customers_bankClosing",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "customers_deposit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "customers_joinBank",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "customers_withdrawFunds",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "noOfUsers_users",
    "outputs": [
      {
        "internalType": "address payable[5]",
        "name": "",
        "type": "address[5]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001d1338038062001d13833981016040819052620000269162000422565b60008055436003556200003862000262565b604080513381528351602080830191909152840151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008c3415600862000110565b80513390819052815160200181905281516040018190528151606001819052815160800152620000bb6200027c565b805133905260208084015151825182015282518183018051919091528051600192019190915280516000604090910181905281514360609091015290516080015262000107816200013a565b5050506200059f565b81620001365760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516020810190915260008152816020015160200151156200020657611388826020015160600151620001709190620004c4565b81526200017c620002a7565b8251516001600160a01b0316815282516020908101518183015280840180515160408085019190915281518101516060850152905160809081015190840152835160a084015260036000554360015551620001da91839101620004eb565b6040516020818303038152906040526002908051906020019062000200929190620002e3565b50505050565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000249573d6000803e3d6000fd5b5060008080556001819055620001369060029062000372565b604051806020016040528062000277620003b4565b905290565b60408051608081018252600091810182815260608201929092529081526020810162000277620003d2565b6040805160c08101825260008082526020820152908101620002c8620003b4565b81526020016000815260200160008152602001600081525090565b828054620002f19062000562565b90600052602060002090601f01602090048101928262000315576000855562000360565b82601f106200033057805160ff191683800117855562000360565b8280016001018555821562000360579182015b828111156200036057825182559160200191906001019062000343565b506200036e9291506200040b565b5090565b508054620003809062000562565b6000825580601f1062000391575050565b601f016020900490600052602060002090810190620003b191906200040b565b50565b6040518060a001604052806005906020820280368337509192915050565b6040518060a00160405280620003e7620003b4565b81526020016000151581526020016000815260200160008152602001600081525090565b5b808211156200036e57600081556001016200040c565b60008183036040808212156200043757600080fd5b80518082016001600160401b0380821183831017156200046757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200048157600080fd5b835194506020850191508482108183111715620004ae57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620004e657634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b039081168252602080840151818401526040808501516101408501939291850160005b60058110156200053857825185168252918301919083019060010162000517565b50505050606084015160e084015250608083015161010083015260a0909201516101209091015290565b600181811c908216806200057757607f821691505b602082108114156200059957634e487b7160e01b600052602260045260246000fd5b50919050565b61176480620005af6000396000f3fe60806040526004361061009a5760003560e01c806383230757116100615780638323075714610132578063ab53f2c614610147578063cd2bc9661461016a578063dcdb954014610172578063e06fcf8c14610194578063e2186a08146101a757005b80631e93b0f1146100a35780633bc5b7bf146100c7578063661d54e2146100f457806368922b81146101075780637e91982e1461011f57005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100d357600080fd5b506100e76100e2366004611164565b6101ba565b6040516100be919061119e565b6100a16101023660046111d5565b6101e6565b61010f610226565b60405190151581526020016100be565b61010f61012d3660046111ed565b61026a565b34801561013e57600080fd5b506001546100b4565b34801561015357600080fd5b5061015c6102bd565b6040516100be929190611206565b61010f61035a565b34801561017e57600080fd5b506101876103a6565b6040516100be9190611263565b61010f6101a23660046111ed565b610468565b6100a16101b536600461129d565b6104c0565b60408051606081018252600080825260208201819052918101919091526101e0826104fc565b92915050565b60408051608081018252600080825260208201819052918101829052606081019190915261022261021c368490038401846113a9565b826105cf565b5050565b6000610230610ef0565b60208181015160009081905260408051608081018252828152928301829052820181905260608201526102638282610b52565b5192915050565b6000610274610f1f565b602081810180515160009081905290515182015185905260408051608081018252828152928301829052820181905260608201526102b282826105cf565b602001519392505050565b6000606060005460028080546102d290611464565b80601f01602080910402602001604051908101604052809291908181526020018280546102fe90611464565b801561034b5780601f106103205761010080835404028352916020019161034b565b820191906000526020600020905b81548152906001019060200180831161032e57829003601f168201915b50505050509050915091509091565b6000610364610f1f565b6020818101515160019052604080516080810182526000808252928101839052908101829052606081019190915261039c82826105cf565b6040015192915050565b6103ae610f39565b60036000541415610459576000600280546103c890611464565b80601f01602080910402602001604051908101604052809291908181526020018280546103f490611464565b80156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b505050505080602001905181019061039c9190611499565b61046560006007610d25565b90565b6000610472610f1f565b6020818101805151600290525151606090810151859052604080516080810182526000808252938101849052908101839052908101919091526104b582826105cf565b606001519392505050565b6040805160808101825260008082526020820181905291810182905260608101919091526102226104f636849003840184611547565b82610b52565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561054857610548611188565b14156105bf576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561058957610589611188565b600181111561059a5761059a611188565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b6105df600360005414600c610d25565b81516105fa9015806105f357508251600154145b600d610d25565b60008080556002805461060c90611464565b80601f016020809104026020016040519081016040528092919081815260200182805461063890611464565b80156106855780601f1061065a57610100808354040283529160200191610685565b820191906000526020600020905b81548152906001019060200180831161066857829003601f168201915b505050505080602001905181019061069d9190611499565b90506106a7610f57565b6106b88260a001514310600e610d25565b7fbfb63e1e99ba5a98879df7b6537dd4495564e078580209ef9b2d8bd98f160d7e33856040516106e99291906115bd565b60405180910390a1600060208501515151600281111561070b5761070b611188565b141561085a576020808501515101518082525161072b9034146009610d25565b336000818152600460205260409020805460ff1916600190811790915582515191610755906104fc565b51600181111561076757610767611188565b14610773576000610781565b61077c336104fc565b604001515b61078b9190611637565b3360009081526004602090815260409182902060019081019390935590519182527f1deacf8e55870875978010fcb9993ab536f13df312434eba184a3ecd873c2665910160405180910390a1600160208401526107e6610f9a565b825181516001600160a01b03909116905260208084015182518201526040808501518284018051919091528051600193019290925260608086015183519092019190915290514391015281515160808401516108429190611637565b60208201516080015261085481610d4a565b50610b4c565b600160208501515151600281111561087457610874611188565b14156109795761088b82602001513414600a610d25565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527f87fc1e28b76db94219dcba9b15efd9353f8a0dbd8ed4b7f8aba259e9b3a105bd910160405180910390a1600160408401526108ef610f9a565b825181516001600160a01b0390911690526020808401518251909101526040830151606084015161092d91906109279060059061164f565b33610e60565b602080830180519290925290516001910181905260608401516109509190611637565b602080830180516040019290925290514360609091015283015160808401516108429190611637565b600260208501515151600281111561099357610993611188565b1415610b4c576020808501515160600151908201526109b43415600b610d25565b60016109bf336104fc565b5160018111156109d1576109d1611188565b146109dd5760006109eb565b6109e6336104fc565b604001515b6040820181905260208201515110610a07578060400151610a0e565b6020810151515b60608201819052608083015110610a29578060600151610a2f565b81608001515b608082019081523360009081526004602052604090819020805460ff19166001179055905190820151610a629190611671565b3360009081526004602090815260409182902060019081019390935590519182527fe1fe08cacb438b50240a16047b6b067c97b1ce119137c945d17166d4103dd728910160405180910390a1600160608401526080810151604051339180156108fc02916000818181858888f19350505050158015610ae5573d6000803e3d6000fd5b50610aee610f9a565b825181516001600160a01b039091169052602080840151825182015260408085015182840180519190915280516001930192909252606080860151835190920191909152905143910152608080830151908401516108429190611671565b50505050565b610b626003600054146010610d25565b8151610b7d901580610b7657508251600154145b6011610d25565b600080805560028054610b8f90611464565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbb90611464565b8015610c085780601f10610bdd57610100808354040283529160200191610c08565b820191906000526020600020905b815481529060010190602001808311610beb57829003601f168201915b5050505050806020019051810190610c209190611499565b9050610c348160a001514310156012610d25565b6040805133815284516020808301919091528501515115158183015290517fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e359181900360600190a1610c883415600f610d25565b604051600081527fd009df69e7e0edfbb964bdde794313b8c8c2873e14b23de495305a313c3073ef9060200160405180910390a160008252610cc8610f9a565b815181516001600160a01b03909116905260208083015182518201526040808401518284018051919091528051600193019290925260608085015183519092019190915281514391015260808084015191510152610b4c81610d4a565b816102225760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815281602001516020015115610e0757611388826020015160600151610d7d9190611637565b8152610d87610fc3565b8251516001600160a01b0316815282516020908101518183015280840180515160408085019190915281518101516060850152905160809081015190840152835160a084015260036000554360015551610de391839101611688565b60405160208183030381529060405260029080519060200190610b4c929190610fe2565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610e49573d6000803e3d6000fd5b506000808055600181905561022290600290611066565b610e68610f39565b60005b6005811015610ec257848160058110610e8657610e866116fd565b6020020151828260058110610e9d57610e9d6116fd565b6001600160a01b03909216602092909202015280610eba81611713565b915050610e6b565b5081818460058110610ed657610ed66116fd565b6001600160a01b0390921660209290920201529392505050565b604051806040016040528060008152602001610f1a60405180602001604052806000151581525090565b905290565b604051806040016040528060008152602001610f1a6110a3565b6040518060a001604052806005906020820280368337509192915050565b6040805160c081018252600060a0820181815282528251602081810190945290815290918201905b81526020016000815260200160008152602001600081525090565b604080516080810182526000918101828152606082019290925290815260208101610f1a6110b6565b6040805160c08101825260008082526020820152908101610f7f610f39565b828054610fee90611464565b90600052602060002090601f0160209004810192826110105760008555611056565b82601f1061102957805160ff1916838001178555611056565b82800160010185558215611056579182015b8281111561105657825182559160200191906001019061103b565b506110629291506110ed565b5090565b50805461107290611464565b6000825580601f10611082575050565b601f0160209004906000526020600020908101906110a091906110ed565b50565b6040518060200160405280610f1a611102565b6040518060a001604052806110c9610f39565b81526020016000151581526020016000815260200160008152602001600081525090565b5b8082111561106257600081556001016110ee565b6040805160808101909152806000815260200161112b6040518060200160405280600081525090565b8152602001600015158152602001610f1a6040518060200160405280600081525090565b6001600160a01b03811681146110a057600080fd5b60006020828403121561117657600080fd5b81356111818161114f565b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106111b5576111b5611188565b808352506020830151151560208301526040830151604083015292915050565b600060a082840312156111e757600080fd5b50919050565b6000602082840312156111ff57600080fd5b5035919050565b82815260006020604081840152835180604085015260005b8181101561123a5785810183015185820160600152820161121e565b8181111561124c576000606083870101525b50601f01601f191692909201606001949350505050565b60a08101818360005b60058110156112945781516001600160a01b031683526020928301929091019060010161126c565b50505092915050565b6000604082840312156111e757600080fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156112e8576112e86112af565b60405290565b6040516080810167ffffffffffffffff811182821017156112e8576112e86112af565b60405160c0810167ffffffffffffffff811182821017156112e8576112e86112af565b60405160a0810167ffffffffffffffff811182821017156112e8576112e86112af565b60006020828403121561136957600080fd5b6040516020810181811067ffffffffffffffff8211171561138c5761138c6112af565b6040529135825250919050565b803580151581146105ca57600080fd5b600081830360a08112156113bc57600080fd5b6040516040810181811067ffffffffffffffff821117156113df576113df6112af565b604052833581526080601f19830112156113f857600080fd5b6114006112c5565b915061140a6112ee565b60208501356003811061141c57600080fd5b815261142b8660408701611357565b602082015261143c60608601611399565b604082015261144e8660808701611357565b6060820152825260208101919091529392505050565b600181811c9082168061147857607f821691505b602082108114156111e757634e487b7160e01b600052602260045260246000fd5b600061014082840312156114ac57600080fd5b6114b4611311565b82516114bf8161114f565b815260208381015181830152605f840185136114da57600080fd5b6114e2611334565b8060e08601878111156114f457600080fd5b604087015b8181101561151957805161150c8161114f565b84529284019284016114f9565b506040850191909152516060840152505061010083015160808201526101209092015160a083015250919050565b6000818303604081121561155a57600080fd5b6040516040810181811067ffffffffffffffff8211171561157d5761157d6112af565b604052833581526020601f198301121561159657600080fd5b61159e6112c5565b91506115ac60208501611399565b825260208101919091529392505050565b6001600160a01b0383168152815160208083019190915282015151805160c083019190600381106115f0576115f0611188565b80604085015250602081015151606084015260408101511515608084015260608101515160a0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561164a5761164a611621565b500190565b60008261166c57634e487b7160e01b600052601260045260246000fd5b500690565b60008282101561168357611683611621565b500390565b81516001600160a01b039081168252602080840151818401526040808501516101408501939291850160005b60058110156116d35782518516825291830191908301906001016116b4565b50505050606084015160e084015250608083015161010083015260a0909201516101209091015290565b634e487b7160e01b600052603260045260246000fd5b600060001982141561172757611727611621565b506001019056fea2646970667358221220047cd9a31ca863d1b277b6e06623808c0392c1fd5abd9a2cfe8ef8fb5f60059064736f6c634300080c0033`,
  BytecodeLen: 7443,
  Which: `oD`,
  version: 7,
  views: {
    noOfUsers: {
      users: `noOfUsers_users`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:33:67:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "customers_bankClosing": customers_bankClosing,
  "customers_deposit": customers_deposit,
  "customers_joinBank": customers_joinBank,
  "customers_withdrawFunds": customers_withdrawFunds
  };
export const _APIs = {
  customers: {
    bankClosing: customers_bankClosing,
    deposit: customers_deposit,
    joinBank: customers_joinBank,
    withdrawFunds: customers_withdrawFunds
    }
  };
