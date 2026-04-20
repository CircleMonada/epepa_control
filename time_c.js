/*************** 
 * Time_C *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'time_c';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_1RoutineBegin());
flowScheduler.add(instr_1RoutineEachFrame());
flowScheduler.add(instr_1RoutineEnd());
flowScheduler.add(instr_2RoutineBegin());
flowScheduler.add(instr_2RoutineEachFrame());
flowScheduler.add(instr_2RoutineEnd());
const train_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(train_loopLoopBegin(train_loopLoopScheduler));
flowScheduler.add(train_loopLoopScheduler);
flowScheduler.add(train_loopLoopEnd);








flowScheduler.add(exp_start_instrRoutineBegin());
flowScheduler.add(exp_start_instrRoutineEachFrame());
flowScheduler.add(exp_start_instrRoutineEnd());
flowScheduler.add(block_instrRoutineBegin());
flowScheduler.add(block_instrRoutineEachFrame());
flowScheduler.add(block_instrRoutineEnd());
const controlLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(controlLoopBegin(controlLoopScheduler));
flowScheduler.add(controlLoopScheduler);
flowScheduler.add(controlLoopEnd);








flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(data_2RoutineBegin());
flowScheduler.add(data_2RoutineEachFrame());
flowScheduler.add(data_2RoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 's_train.xlsx', 'path': 's_train.xlsx'},
    {'name': 's_control.xlsx', 'path': 's_control.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instr_1Clock;
var instr_1_text;
var instr_1_stop;
var instr_2Clock;
var instr_2_text;
var instr_2_stop;
var codeClock;
var maskClock;
var text;
var ref_trainClock;
var ref_train_stim;
var start_repordClock;
var start_repord_key;
var stop_repord_trainClock;
var stop_repord_stim;
var stop_repord_key;
var accuracyClock;
var acc_text;
var acc_slider;
var stop_slider_mouse;
var acc_slider_t;
var acc_slider_tt;
var stop_slider_text;
var accuracy_specClock;
var acc_spec_text;
var acc_spec_slider;
var stop_acc_spec_mouse;
var stop_acc_spec_text;
var exp_start_instrClock;
var start_instr_text;
var block_instrClock;
var block_instr_text;
var block_instr_mouse;
var code_5Clock;
var refClock;
var ref_stim;
var start_repord_2Clock;
var start_repord_key_cntrl;
var stop_repordClock;
var stop_repord_stim_cntrl;
var stop_repord_key_cntrl;
var byeClock;
var thanks;
var data_2Clock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr_1"
  instr_1Clock = new util.Clock();
  instr_1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_1_text',
    text: 'Здравствуйте, уважаемые коллеги! \n\nДалее Вам будет предложено пройти эксперимент. Важно, пожалуйста, при прохождении уберите часы и телефоны, чтобы не было отвлекающих факторов. Также убедительно просим не считать и не отбивать ритм при прохождении\n\nВремя прохождения займет у Вас 20-30 минут. Все данные конфиденциальны и не передаются третьим лицам. \nНажмите на ЛЕВУЮ КЛАВИШУ МЫШИ, чтобы ознакомиться с задачей.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_1_stop = new core.Mouse({
    win: psychoJS.window,
  });
  instr_1_stop.mouseClock = new util.Clock();
  // Initialize components for Routine "instr_2"
  instr_2Clock = new util.Clock();
  instr_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_2_text',
    text: 'Сначала на экране появится белый круг, затем исчезнет.\n\nНажмите на ПРОБЕЛ, чтобы круг появился снова. После появления черного круга Ваша задача — нажать клавишу ПРОБЕЛ в тот момент, когда, по вашему мнению, прошло ТОЧНО СТОЛЬКО ЖЕ времени, сколько белый круг был на экране.\n\nНжмите ЛЕВУЮ КЛАВИШУ МЫШИ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_2_stop = new core.Mouse({
    win: psychoJS.window,
  });
  instr_2_stop.mouseClock = new util.Clock();
  // Initialize components for Routine "code"
  codeClock = new util.Clock();
  // Initialize components for Routine "mask"
  maskClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ref_train"
  ref_trainClock = new util.Clock();
  ref_train_stim = new visual.Polygon({
    win: psychoJS.window, name: 'ref_train_stim', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "start_repord"
  start_repordClock = new util.Clock();
  start_repord_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stop_repord_train"
  stop_repord_trainClock = new util.Clock();
  stop_repord_stim = new visual.Polygon({
    win: psychoJS.window, name: 'stop_repord_stim', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  stop_repord_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "accuracy"
  accuracyClock = new util.Clock();
  acc_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_text',
    text: 'Оцените, насколько сильно Вы ошиблись ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  acc_slider = new visual.Slider({
    win: psychoJS.window, name: 'acc_slider',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stop_slider_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  stop_slider_mouse.mouseClock = new util.Clock();
  acc_slider_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_slider_t',
    text: 'Не ошибся',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.05)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  acc_slider_tt = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_slider_tt',
    text: 'Сильно ошибся',
    font: 'Arial',
    units: undefined, 
    pos: [0.55, (- 0.05)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  stop_slider_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stop_slider_text',
    text: 'продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "accuracy_spec"
  accuracy_specClock = new util.Clock();
  acc_spec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'acc_spec_text',
    text: 'Оцените, в какую сторону произошла ошибка',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  acc_spec_slider = new visual.Slider({
    win: psychoJS.window, name: 'acc_spec_slider',
    startValue: undefined,
    size: [1.0, 0.03], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u0441\u0438\u043b\u044c\u043d\u043e \u0432 \u043c\u0435\u043d\u044c\u0448\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443", "2", "3", "\u0442\u043e\u0447\u043d\u043e", "5", "6", "\u0441\u0438\u043b\u044c\u043d\u043e \u0432 \u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stop_acc_spec_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  stop_acc_spec_mouse.mouseClock = new util.Clock();
  stop_acc_spec_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stop_acc_spec_text',
    text: 'продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "exp_start_instr"
  exp_start_instrClock = new util.Clock();
  start_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_instr_text',
    text: 'тренировка окончена\n\nсейчас начнется эксперимент',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "block_instr"
  block_instrClock = new util.Clock();
  block_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_instr_text',
    text: 'Нажмите левую кнопку мыши, чтобы начать экспериментальный блок',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  block_instr_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  block_instr_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "code_5"
  code_5Clock = new util.Clock();
  // Initialize components for Routine "ref"
  refClock = new util.Clock();
  ref_stim = new visual.Polygon({
    win: psychoJS.window, name: 'ref_stim', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "start_repord_2"
  start_repord_2Clock = new util.Clock();
  start_repord_key_cntrl = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stop_repord"
  stop_repordClock = new util.Clock();
  stop_repord_stim_cntrl = new visual.Polygon({
    win: psychoJS.window, name: 'stop_repord_stim_cntrl', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  stop_repord_key_cntrl = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Эксперимент окончен\n\nСпасибо большое за участие!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "data_2"
  data_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Данные сохраняются \n\nПожалуйста, не закрывайте страницу',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instr_1MaxDurationReached;
var gotValidClick;
var instr_1MaxDuration;
var instr_1Components;
function instr_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_1Clock.reset();
    routineTimer.reset();
    instr_1MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the instr_1_stop
    // current position of the mouse:
    instr_1_stop.x = [];
    instr_1_stop.y = [];
    instr_1_stop.leftButton = [];
    instr_1_stop.midButton = [];
    instr_1_stop.rightButton = [];
    instr_1_stop.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instr_1.started', globalClock.getTime());
    instr_1MaxDuration = null
    // keep track of which components have finished
    instr_1Components = [];
    instr_1Components.push(instr_1_text);
    instr_1Components.push(instr_1_stop);
    
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function instr_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_1' ---
    // get current time
    t = instr_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_1_text* updates
    if (t >= 0.0 && instr_1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_1_text.tStart = t;  // (not accounting for frame time here)
      instr_1_text.frameNStart = frameN;  // exact frame index
      
      instr_1_text.setAutoDraw(true);
    }
    
    
    // if instr_1_text is active this frame...
    if (instr_1_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *instr_1_stop* updates
    if (t >= 0.0 && instr_1_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_1_stop.tStart = t;  // (not accounting for frame time here)
      instr_1_stop.frameNStart = frameN;  // exact frame index
      
      instr_1_stop.status = PsychoJS.Status.STARTED;
      instr_1_stop.mouseClock.reset();
      prevButtonState = instr_1_stop.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if instr_1_stop is active this frame...
    if (instr_1_stop.status === PsychoJS.Status.STARTED) {
      _mouseButtons = instr_1_stop.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = instr_1_stop.getPos();
          instr_1_stop.x.push(_mouseXYs[0]);
          instr_1_stop.y.push(_mouseXYs[1]);
          instr_1_stop.leftButton.push(_mouseButtons[0]);
          instr_1_stop.midButton.push(_mouseButtons[1]);
          instr_1_stop.rightButton.push(_mouseButtons[2]);
          instr_1_stop.time.push(instr_1_stop.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_1' ---
    for (const thisComponent of instr_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_1.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('instr_1_stop.x', instr_1_stop.x);
    psychoJS.experiment.addData('instr_1_stop.y', instr_1_stop.y);
    psychoJS.experiment.addData('instr_1_stop.leftButton', instr_1_stop.leftButton);
    psychoJS.experiment.addData('instr_1_stop.midButton', instr_1_stop.midButton);
    psychoJS.experiment.addData('instr_1_stop.rightButton', instr_1_stop.rightButton);
    psychoJS.experiment.addData('instr_1_stop.time', instr_1_stop.time);
    
    // the Routine "instr_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_2MaxDurationReached;
var instr_2MaxDuration;
var instr_2Components;
function instr_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_2Clock.reset();
    routineTimer.reset();
    instr_2MaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the instr_2_stop
    // current position of the mouse:
    instr_2_stop.x = [];
    instr_2_stop.y = [];
    instr_2_stop.leftButton = [];
    instr_2_stop.midButton = [];
    instr_2_stop.rightButton = [];
    instr_2_stop.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instr_2.started', globalClock.getTime());
    instr_2MaxDuration = null
    // keep track of which components have finished
    instr_2Components = [];
    instr_2Components.push(instr_2_text);
    instr_2Components.push(instr_2_stop);
    
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_2' ---
    // get current time
    t = instr_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_2_text* updates
    if (t >= 0.0 && instr_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2_text.tStart = t;  // (not accounting for frame time here)
      instr_2_text.frameNStart = frameN;  // exact frame index
      
      instr_2_text.setAutoDraw(true);
    }
    
    
    // if instr_2_text is active this frame...
    if (instr_2_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *instr_2_stop* updates
    if (t >= 0.0 && instr_2_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2_stop.tStart = t;  // (not accounting for frame time here)
      instr_2_stop.frameNStart = frameN;  // exact frame index
      
      instr_2_stop.status = PsychoJS.Status.STARTED;
      instr_2_stop.mouseClock.reset();
      prevButtonState = instr_2_stop.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if instr_2_stop is active this frame...
    if (instr_2_stop.status === PsychoJS.Status.STARTED) {
      _mouseButtons = instr_2_stop.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = instr_2_stop.getPos();
          instr_2_stop.x.push(_mouseXYs[0]);
          instr_2_stop.y.push(_mouseXYs[1]);
          instr_2_stop.leftButton.push(_mouseButtons[0]);
          instr_2_stop.midButton.push(_mouseButtons[1]);
          instr_2_stop.rightButton.push(_mouseButtons[2]);
          instr_2_stop.time.push(instr_2_stop.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_2' ---
    for (const thisComponent of instr_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_2.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('instr_2_stop.x', instr_2_stop.x);
    psychoJS.experiment.addData('instr_2_stop.y', instr_2_stop.y);
    psychoJS.experiment.addData('instr_2_stop.leftButton', instr_2_stop.leftButton);
    psychoJS.experiment.addData('instr_2_stop.midButton', instr_2_stop.midButton);
    psychoJS.experiment.addData('instr_2_stop.rightButton', instr_2_stop.rightButton);
    psychoJS.experiment.addData('instr_2_stop.time', instr_2_stop.time);
    
    // the Routine "instr_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_loop;
function train_loopLoopBegin(train_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    train_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 's_train.xlsx',
      seed: undefined, name: 'train_loop'
    });
    psychoJS.experiment.addLoop(train_loop); // add the loop to the experiment
    currentLoop = train_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrain_loop of train_loop) {
      snapshot = train_loop.getSnapshot();
      train_loopLoopScheduler.add(importConditions(snapshot));
      train_loopLoopScheduler.add(codeRoutineBegin(snapshot));
      train_loopLoopScheduler.add(codeRoutineEachFrame());
      train_loopLoopScheduler.add(codeRoutineEnd(snapshot));
      train_loopLoopScheduler.add(maskRoutineBegin(snapshot));
      train_loopLoopScheduler.add(maskRoutineEachFrame());
      train_loopLoopScheduler.add(maskRoutineEnd(snapshot));
      train_loopLoopScheduler.add(ref_trainRoutineBegin(snapshot));
      train_loopLoopScheduler.add(ref_trainRoutineEachFrame());
      train_loopLoopScheduler.add(ref_trainRoutineEnd(snapshot));
      train_loopLoopScheduler.add(start_repordRoutineBegin(snapshot));
      train_loopLoopScheduler.add(start_repordRoutineEachFrame());
      train_loopLoopScheduler.add(start_repordRoutineEnd(snapshot));
      train_loopLoopScheduler.add(stop_repord_trainRoutineBegin(snapshot));
      train_loopLoopScheduler.add(stop_repord_trainRoutineEachFrame());
      train_loopLoopScheduler.add(stop_repord_trainRoutineEnd(snapshot));
      train_loopLoopScheduler.add(accuracyRoutineBegin(snapshot));
      train_loopLoopScheduler.add(accuracyRoutineEachFrame());
      train_loopLoopScheduler.add(accuracyRoutineEnd(snapshot));
      train_loopLoopScheduler.add(accuracy_specRoutineBegin(snapshot));
      train_loopLoopScheduler.add(accuracy_specRoutineEachFrame());
      train_loopLoopScheduler.add(accuracy_specRoutineEnd(snapshot));
      train_loopLoopScheduler.add(train_loopLoopEndIteration(train_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function train_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(train_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function train_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var control;
function controlLoopBegin(controlLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    control = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 's_control.xlsx',
      seed: undefined, name: 'control'
    });
    psychoJS.experiment.addLoop(control); // add the loop to the experiment
    currentLoop = control;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisControl of control) {
      snapshot = control.getSnapshot();
      controlLoopScheduler.add(importConditions(snapshot));
      controlLoopScheduler.add(code_5RoutineBegin(snapshot));
      controlLoopScheduler.add(code_5RoutineEachFrame());
      controlLoopScheduler.add(code_5RoutineEnd(snapshot));
      controlLoopScheduler.add(maskRoutineBegin(snapshot));
      controlLoopScheduler.add(maskRoutineEachFrame());
      controlLoopScheduler.add(maskRoutineEnd(snapshot));
      controlLoopScheduler.add(refRoutineBegin(snapshot));
      controlLoopScheduler.add(refRoutineEachFrame());
      controlLoopScheduler.add(refRoutineEnd(snapshot));
      controlLoopScheduler.add(start_repord_2RoutineBegin(snapshot));
      controlLoopScheduler.add(start_repord_2RoutineEachFrame());
      controlLoopScheduler.add(start_repord_2RoutineEnd(snapshot));
      controlLoopScheduler.add(stop_repordRoutineBegin(snapshot));
      controlLoopScheduler.add(stop_repordRoutineEachFrame());
      controlLoopScheduler.add(stop_repordRoutineEnd(snapshot));
      controlLoopScheduler.add(accuracyRoutineBegin(snapshot));
      controlLoopScheduler.add(accuracyRoutineEachFrame());
      controlLoopScheduler.add(accuracyRoutineEnd(snapshot));
      controlLoopScheduler.add(accuracy_specRoutineBegin(snapshot));
      controlLoopScheduler.add(accuracy_specRoutineEachFrame());
      controlLoopScheduler.add(accuracy_specRoutineEnd(snapshot));
      controlLoopScheduler.add(controlLoopEndIteration(controlLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function controlLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(control);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function controlLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var codeMaxDurationReached;
var codeMaxDuration;
var codeComponents;
function codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'code' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    codeClock.reset();
    routineTimer.reset();
    codeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('code.started', globalClock.getTime());
    codeMaxDuration = null
    // keep track of which components have finished
    codeComponents = [];
    
    for (const thisComponent of codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'code' ---
    // get current time
    t = codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'code' ---
    for (const thisComponent of codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('code.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    // ==========================================
    // БЛОК train_loop - JavaScript (ИСПРАВЛЕННЫЙ)
    // ==========================================
    
    // Вспомогательная функция для безопасного получения данных с клавиатуры
    function getKeyData(kbComponent) {
        if (typeof kbComponent === 'undefined' || !kbComponent.keys) {
            return { key: 'none', rt: 'none' };
        }
        
        // Обработка keys (может быть строкой или массивом)
        var key;
        if (Array.isArray(kbComponent.keys)) {
            key = kbComponent.keys[0];
        } else {
            key = kbComponent.keys;
        }
        
        // Обработка rt (может быть числом или массивом)
        var rt;
        if (Array.isArray(kbComponent.rt)) {
            rt = kbComponent.rt[0];
        } else {
            rt = kbComponent.rt;
        }
        
        return { key: key, rt: rt };
    }
    
    // 1. Стимул ref_train_stim
    if (typeof ref_train_stim !== 'undefined') {
        psychoJS.experiment.addData('ref_stim_value', 'presented');
    } else {
        psychoJS.experiment.addData('ref_stim_value', 'missing');
    }
    
    // 2. Клавиша start_repord_key
    var startData = getKeyData(start_repord_key);
    psychoJS.experiment.addData('start_key', startData.key);
    psychoJS.experiment.addData('start_rt', startData.rt);
    
    // 3. Клавиша stop_repord_key
    var stopData = getKeyData(stop_repord_key);
    psychoJS.experiment.addData('stop_key', stopData.key);
    psychoJS.experiment.addData('stop_rt', stopData.rt);
    
    // 4. Слайдер acc_slider
    if (typeof acc_slider !== 'undefined') {
        var sliderVal = acc_slider.getRating();
        psychoJS.experiment.addData('acc_slider_value', sliderVal !== null ? sliderVal : 'not_touched');
    } else {
        psychoJS.experiment.addData('acc_slider_value', 'no_slider');
    }
    
    // 5. Слайдер acc_spec_slider
    if (typeof acc_spec_slider !== 'undefined') {
        var specVal = acc_spec_slider.getRating();
        psychoJS.experiment.addData('acc_spec_slider_value', specVal !== null ? specVal : 'not_touched');
    } else {
        psychoJS.experiment.addData('acc_spec_slider_value', 'no_slider');
    }
    
    // 6. Служебная информация
    psychoJS.experiment.addData('block', 'train');
    psychoJS.experiment.addData('trial_num', train_loop.thisTrialN);
    psychoJS.experiment.addData('rep_num', train_loop.thisRepN);
    
    // 7. Переход на новую строку
    psychoJS.experiment.nextEntry();
    // the Routine "code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var maskMaxDurationReached;
var maskMaxDuration;
var maskComponents;
function maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    maskClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    maskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('mask.started', globalClock.getTime());
    maskMaxDuration = null
    // keep track of which components have finished
    maskComponents = [];
    maskComponents.push(text);
    
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mask' ---
    // get current time
    t = maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mask' ---
    for (const thisComponent of maskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mask.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (maskMaxDurationReached) {
        maskClock.add(maskMaxDuration);
    } else {
        maskClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ref_trainMaxDurationReached;
var trainDur;
var smallSize;
var bigSize;
var currentSize;
var stimStart;
var nextSwitch;
var ref_trainMaxDuration;
var ref_trainComponents;
function ref_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ref_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ref_trainClock.reset();
    routineTimer.reset();
    ref_trainMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_1
    trainDur = Number(train_duration);
    
    smallSize = 0.15;
    bigSize = 0.25;
    currentSize = smallSize;
    ref_train_stim.size = currentSize;
    
    stimStart = 0.5;
    nextSwitch = stimStart + 0.3 + Math.random() * 0.5;
    psychoJS.experiment.addData('ref_train.started', globalClock.getTime());
    ref_trainMaxDuration = null
    // keep track of which components have finished
    ref_trainComponents = [];
    ref_trainComponents.push(ref_train_stim);
    
    for (const thisComponent of ref_trainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ref_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ref_train' ---
    // get current time
    t = ref_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_1
    if (ref_train_stim.status === PsychoJS.Status.STARTED && t >= nextSwitch) {
        if (currentSize === smallSize) {
            currentSize = bigSize;
        } else {
            currentSize = smallSize;
        }
    
        ref_train_stim.size = currentSize;
        nextSwitch = t + 0.3 + Math.random() * 0.5;
    }
    
    // *ref_train_stim* updates
    if (t >= 0.5 && ref_train_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_train_stim.tStart = t;  // (not accounting for frame time here)
      ref_train_stim.frameNStart = frameN;  // exact frame index
      
      ref_train_stim.setAutoDraw(true);
    }
    
    
    // if ref_train_stim is active this frame...
    if (ref_train_stim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + (trainDur + 0.05) - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ref_train_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ref_train_stim.tStop = t;  // not accounting for scr refresh
      ref_train_stim.frameNStop = frameN;  // exact frame index
      // update status
      ref_train_stim.status = PsychoJS.Status.FINISHED;
      ref_train_stim.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ref_trainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ref_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ref_train' ---
    for (const thisComponent of ref_trainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ref_train.stopped', globalClock.getTime());
    // the Routine "ref_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_repordMaxDurationReached;
var _start_repord_key_allKeys;
var start_repordMaxDuration;
var start_repordComponents;
function start_repordRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_repord' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    start_repordClock.reset();
    routineTimer.reset();
    start_repordMaxDurationReached = false;
    // update component parameters for each repeat
    start_repord_key.keys = undefined;
    start_repord_key.rt = undefined;
    _start_repord_key_allKeys = [];
    psychoJS.experiment.addData('start_repord.started', globalClock.getTime());
    start_repordMaxDuration = null
    // keep track of which components have finished
    start_repordComponents = [];
    start_repordComponents.push(start_repord_key);
    
    for (const thisComponent of start_repordComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_repordRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_repord' ---
    // get current time
    t = start_repordClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_repord_key* updates
    if (t >= 0.0 && start_repord_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_repord_key.tStart = t;  // (not accounting for frame time here)
      start_repord_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_repord_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_repord_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_repord_key.clearEvents(); });
    }
    
    // if start_repord_key is active this frame...
    if (start_repord_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_repord_key.getKeys({keyList: 'space', waitRelease: false});
      _start_repord_key_allKeys = _start_repord_key_allKeys.concat(theseKeys);
      if (_start_repord_key_allKeys.length > 0) {
        start_repord_key.keys = _start_repord_key_allKeys[_start_repord_key_allKeys.length - 1].name;  // just the last key pressed
        start_repord_key.rt = _start_repord_key_allKeys[_start_repord_key_allKeys.length - 1].rt;
        start_repord_key.duration = _start_repord_key_allKeys[_start_repord_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_repordComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_repordRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_repord' ---
    for (const thisComponent of start_repordComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('start_repord.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_repord_key.corr, level);
    }
    psychoJS.experiment.addData('start_repord_key.keys', start_repord_key.keys);
    if (typeof start_repord_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_repord_key.rt', start_repord_key.rt);
        psychoJS.experiment.addData('start_repord_key.duration', start_repord_key.duration);
        routineTimer.reset();
        }
    
    start_repord_key.stop();
    // the Routine "start_repord" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stop_repord_trainMaxDurationReached;
var _stop_repord_key_allKeys;
var stop_repord_trainMaxDuration;
var stop_repord_trainComponents;
function stop_repord_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stop_repord_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stop_repord_trainClock.reset();
    routineTimer.reset();
    stop_repord_trainMaxDurationReached = false;
    // update component parameters for each repeat
    stop_repord_key.keys = undefined;
    stop_repord_key.rt = undefined;
    _stop_repord_key_allKeys = [];
    psychoJS.experiment.addData('stop_repord_train.started', globalClock.getTime());
    stop_repord_trainMaxDuration = null
    // keep track of which components have finished
    stop_repord_trainComponents = [];
    stop_repord_trainComponents.push(stop_repord_stim);
    stop_repord_trainComponents.push(stop_repord_key);
    
    for (const thisComponent of stop_repord_trainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stop_repord_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stop_repord_train' ---
    // get current time
    t = stop_repord_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stop_repord_stim* updates
    if (t >= 0.0 && stop_repord_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_repord_stim.tStart = t;  // (not accounting for frame time here)
      stop_repord_stim.frameNStart = frameN;  // exact frame index
      
      stop_repord_stim.setAutoDraw(true);
    }
    
    
    // if stop_repord_stim is active this frame...
    if (stop_repord_stim.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_repord_key* updates
    if (t >= 0.0 && stop_repord_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_repord_key.tStart = t;  // (not accounting for frame time here)
      stop_repord_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_repord_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_repord_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_repord_key.clearEvents(); });
    }
    
    // if stop_repord_key is active this frame...
    if (stop_repord_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_repord_key.getKeys({keyList: 'space', waitRelease: false});
      _stop_repord_key_allKeys = _stop_repord_key_allKeys.concat(theseKeys);
      if (_stop_repord_key_allKeys.length > 0) {
        stop_repord_key.keys = _stop_repord_key_allKeys[_stop_repord_key_allKeys.length - 1].name;  // just the last key pressed
        stop_repord_key.rt = _stop_repord_key_allKeys[_stop_repord_key_allKeys.length - 1].rt;
        stop_repord_key.duration = _stop_repord_key_allKeys[_stop_repord_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stop_repord_trainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stop_repord_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stop_repord_train' ---
    for (const thisComponent of stop_repord_trainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stop_repord_train.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_repord_key.corr, level);
    }
    psychoJS.experiment.addData('stop_repord_key.keys', stop_repord_key.keys);
    if (typeof stop_repord_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_repord_key.rt', stop_repord_key.rt);
        psychoJS.experiment.addData('stop_repord_key.duration', stop_repord_key.duration);
        routineTimer.reset();
        }
    
    stop_repord_key.stop();
    // the Routine "stop_repord_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var accuracyMaxDurationReached;
var accuracyMaxDuration;
var accuracyComponents;
function accuracyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'accuracy' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    accuracyClock.reset();
    routineTimer.reset();
    accuracyMaxDurationReached = false;
    // update component parameters for each repeat
    acc_slider.reset()
    // setup some python lists for storing info about the stop_slider_mouse
    // current position of the mouse:
    stop_slider_mouse.x = [];
    stop_slider_mouse.y = [];
    stop_slider_mouse.leftButton = [];
    stop_slider_mouse.midButton = [];
    stop_slider_mouse.rightButton = [];
    stop_slider_mouse.time = [];
    stop_slider_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('accuracy.started', globalClock.getTime());
    accuracyMaxDuration = null
    // keep track of which components have finished
    accuracyComponents = [];
    accuracyComponents.push(acc_text);
    accuracyComponents.push(acc_slider);
    accuracyComponents.push(stop_slider_mouse);
    accuracyComponents.push(acc_slider_t);
    accuracyComponents.push(acc_slider_tt);
    accuracyComponents.push(stop_slider_text);
    
    for (const thisComponent of accuracyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function accuracyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'accuracy' ---
    // get current time
    t = accuracyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *acc_text* updates
    if (t >= 0.0 && acc_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_text.tStart = t;  // (not accounting for frame time here)
      acc_text.frameNStart = frameN;  // exact frame index
      
      acc_text.setAutoDraw(true);
    }
    
    
    // if acc_text is active this frame...
    if (acc_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *acc_slider* updates
    if (t >= 0.0 && acc_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_slider.tStart = t;  // (not accounting for frame time here)
      acc_slider.frameNStart = frameN;  // exact frame index
      
      acc_slider.setAutoDraw(true);
    }
    
    
    // if acc_slider is active this frame...
    if (acc_slider.status === PsychoJS.Status.STARTED) {
    }
    
    // *stop_slider_mouse* updates
    if (t >= 0.0 && stop_slider_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_slider_mouse.tStart = t;  // (not accounting for frame time here)
      stop_slider_mouse.frameNStart = frameN;  // exact frame index
      
      stop_slider_mouse.status = PsychoJS.Status.STARTED;
      stop_slider_mouse.mouseClock.reset();
      prevButtonState = stop_slider_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if stop_slider_mouse is active this frame...
    if (stop_slider_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = stop_slider_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          stop_slider_mouse.clickableObjects = eval(stop_slider_text)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(stop_slider_mouse.clickableObjects)) {
              stop_slider_mouse.clickableObjects = [stop_slider_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of stop_slider_mouse.clickableObjects) {
              if (obj.contains(stop_slider_mouse)) {
                  gotValidClick = true;
                  stop_slider_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              stop_slider_mouse.clicked_name.push(null);
          }
          _mouseXYs = stop_slider_mouse.getPos();
          stop_slider_mouse.x.push(_mouseXYs[0]);
          stop_slider_mouse.y.push(_mouseXYs[1]);
          stop_slider_mouse.leftButton.push(_mouseButtons[0]);
          stop_slider_mouse.midButton.push(_mouseButtons[1]);
          stop_slider_mouse.rightButton.push(_mouseButtons[2]);
          stop_slider_mouse.time.push(stop_slider_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *acc_slider_t* updates
    if (t >= 0.0 && acc_slider_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_slider_t.tStart = t;  // (not accounting for frame time here)
      acc_slider_t.frameNStart = frameN;  // exact frame index
      
      acc_slider_t.setAutoDraw(true);
    }
    
    
    // if acc_slider_t is active this frame...
    if (acc_slider_t.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *acc_slider_tt* updates
    if (t >= 0.0 && acc_slider_tt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_slider_tt.tStart = t;  // (not accounting for frame time here)
      acc_slider_tt.frameNStart = frameN;  // exact frame index
      
      acc_slider_tt.setAutoDraw(true);
    }
    
    
    // if acc_slider_tt is active this frame...
    if (acc_slider_tt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_slider_text* updates
    if (t >= 0.0 && stop_slider_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_slider_text.tStart = t;  // (not accounting for frame time here)
      stop_slider_text.frameNStart = frameN;  // exact frame index
      
      stop_slider_text.setAutoDraw(true);
    }
    
    
    // if stop_slider_text is active this frame...
    if (stop_slider_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of accuracyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function accuracyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'accuracy' ---
    for (const thisComponent of accuracyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('accuracy.stopped', globalClock.getTime());
    psychoJS.experiment.addData('acc_slider.response', acc_slider.getRating());
    psychoJS.experiment.addData('acc_slider.rt', acc_slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('stop_slider_mouse.x', stop_slider_mouse.x);
    psychoJS.experiment.addData('stop_slider_mouse.y', stop_slider_mouse.y);
    psychoJS.experiment.addData('stop_slider_mouse.leftButton', stop_slider_mouse.leftButton);
    psychoJS.experiment.addData('stop_slider_mouse.midButton', stop_slider_mouse.midButton);
    psychoJS.experiment.addData('stop_slider_mouse.rightButton', stop_slider_mouse.rightButton);
    psychoJS.experiment.addData('stop_slider_mouse.time', stop_slider_mouse.time);
    psychoJS.experiment.addData('stop_slider_mouse.clicked_name', stop_slider_mouse.clicked_name);
    
    // the Routine "accuracy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var accuracy_specMaxDurationReached;
var accuracy_specMaxDuration;
var accuracy_specComponents;
function accuracy_specRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'accuracy_spec' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    accuracy_specClock.reset();
    routineTimer.reset();
    accuracy_specMaxDurationReached = false;
    // update component parameters for each repeat
    acc_spec_slider.reset()
    // setup some python lists for storing info about the stop_acc_spec_mouse
    // current position of the mouse:
    stop_acc_spec_mouse.x = [];
    stop_acc_spec_mouse.y = [];
    stop_acc_spec_mouse.leftButton = [];
    stop_acc_spec_mouse.midButton = [];
    stop_acc_spec_mouse.rightButton = [];
    stop_acc_spec_mouse.time = [];
    stop_acc_spec_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('accuracy_spec.started', globalClock.getTime());
    accuracy_specMaxDuration = null
    // keep track of which components have finished
    accuracy_specComponents = [];
    accuracy_specComponents.push(acc_spec_text);
    accuracy_specComponents.push(acc_spec_slider);
    accuracy_specComponents.push(stop_acc_spec_mouse);
    accuracy_specComponents.push(stop_acc_spec_text);
    
    for (const thisComponent of accuracy_specComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function accuracy_specRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'accuracy_spec' ---
    // get current time
    t = accuracy_specClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *acc_spec_text* updates
    if (t >= 0.0 && acc_spec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_spec_text.tStart = t;  // (not accounting for frame time here)
      acc_spec_text.frameNStart = frameN;  // exact frame index
      
      acc_spec_text.setAutoDraw(true);
    }
    
    
    // if acc_spec_text is active this frame...
    if (acc_spec_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *acc_spec_slider* updates
    if (t >= 0.0 && acc_spec_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      acc_spec_slider.tStart = t;  // (not accounting for frame time here)
      acc_spec_slider.frameNStart = frameN;  // exact frame index
      
      acc_spec_slider.setAutoDraw(true);
    }
    
    
    // if acc_spec_slider is active this frame...
    if (acc_spec_slider.status === PsychoJS.Status.STARTED) {
    }
    
    // *stop_acc_spec_mouse* updates
    if (t >= 0.0 && stop_acc_spec_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_acc_spec_mouse.tStart = t;  // (not accounting for frame time here)
      stop_acc_spec_mouse.frameNStart = frameN;  // exact frame index
      
      stop_acc_spec_mouse.status = PsychoJS.Status.STARTED;
      stop_acc_spec_mouse.mouseClock.reset();
      prevButtonState = stop_acc_spec_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if stop_acc_spec_mouse is active this frame...
    if (stop_acc_spec_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = stop_acc_spec_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          stop_acc_spec_mouse.clickableObjects = eval(stop_acc_spec_text)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(stop_acc_spec_mouse.clickableObjects)) {
              stop_acc_spec_mouse.clickableObjects = [stop_acc_spec_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of stop_acc_spec_mouse.clickableObjects) {
              if (obj.contains(stop_acc_spec_mouse)) {
                  gotValidClick = true;
                  stop_acc_spec_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              stop_acc_spec_mouse.clicked_name.push(null);
          }
          _mouseXYs = stop_acc_spec_mouse.getPos();
          stop_acc_spec_mouse.x.push(_mouseXYs[0]);
          stop_acc_spec_mouse.y.push(_mouseXYs[1]);
          stop_acc_spec_mouse.leftButton.push(_mouseButtons[0]);
          stop_acc_spec_mouse.midButton.push(_mouseButtons[1]);
          stop_acc_spec_mouse.rightButton.push(_mouseButtons[2]);
          stop_acc_spec_mouse.time.push(stop_acc_spec_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *stop_acc_spec_text* updates
    if (t >= 0.0 && stop_acc_spec_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_acc_spec_text.tStart = t;  // (not accounting for frame time here)
      stop_acc_spec_text.frameNStart = frameN;  // exact frame index
      
      stop_acc_spec_text.setAutoDraw(true);
    }
    
    
    // if stop_acc_spec_text is active this frame...
    if (stop_acc_spec_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of accuracy_specComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function accuracy_specRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'accuracy_spec' ---
    for (const thisComponent of accuracy_specComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('accuracy_spec.stopped', globalClock.getTime());
    psychoJS.experiment.addData('acc_spec_slider.response', acc_spec_slider.getRating());
    psychoJS.experiment.addData('acc_spec_slider.rt', acc_spec_slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('stop_acc_spec_mouse.x', stop_acc_spec_mouse.x);
    psychoJS.experiment.addData('stop_acc_spec_mouse.y', stop_acc_spec_mouse.y);
    psychoJS.experiment.addData('stop_acc_spec_mouse.leftButton', stop_acc_spec_mouse.leftButton);
    psychoJS.experiment.addData('stop_acc_spec_mouse.midButton', stop_acc_spec_mouse.midButton);
    psychoJS.experiment.addData('stop_acc_spec_mouse.rightButton', stop_acc_spec_mouse.rightButton);
    psychoJS.experiment.addData('stop_acc_spec_mouse.time', stop_acc_spec_mouse.time);
    psychoJS.experiment.addData('stop_acc_spec_mouse.clicked_name', stop_acc_spec_mouse.clicked_name);
    
    // the Routine "accuracy_spec" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_start_instrMaxDurationReached;
var exp_start_instrMaxDuration;
var exp_start_instrComponents;
function exp_start_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_start_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    exp_start_instrClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    exp_start_instrMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp_start_instr.started', globalClock.getTime());
    exp_start_instrMaxDuration = null
    // keep track of which components have finished
    exp_start_instrComponents = [];
    exp_start_instrComponents.push(start_instr_text);
    
    for (const thisComponent of exp_start_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_start_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_start_instr' ---
    // get current time
    t = exp_start_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_instr_text* updates
    if (t >= 0.0 && start_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_instr_text.tStart = t;  // (not accounting for frame time here)
      start_instr_text.frameNStart = frameN;  // exact frame index
      
      start_instr_text.setAutoDraw(true);
    }
    
    
    // if start_instr_text is active this frame...
    if (start_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (start_instr_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      start_instr_text.tStop = t;  // not accounting for scr refresh
      start_instr_text.frameNStop = frameN;  // exact frame index
      // update status
      start_instr_text.status = PsychoJS.Status.FINISHED;
      start_instr_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_start_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_start_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_start_instr' ---
    for (const thisComponent of exp_start_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_start_instr.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (exp_start_instrMaxDurationReached) {
        exp_start_instrClock.add(exp_start_instrMaxDuration);
    } else {
        exp_start_instrClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var block_instrMaxDurationReached;
var block_instrMaxDuration;
var block_instrComponents;
function block_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    block_instrClock.reset();
    routineTimer.reset();
    block_instrMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the block_instr_mouse
    // current position of the mouse:
    block_instr_mouse.x = [];
    block_instr_mouse.y = [];
    block_instr_mouse.leftButton = [];
    block_instr_mouse.midButton = [];
    block_instr_mouse.rightButton = [];
    block_instr_mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('block_instr.started', globalClock.getTime());
    block_instrMaxDuration = null
    // keep track of which components have finished
    block_instrComponents = [];
    block_instrComponents.push(block_instr_text);
    block_instrComponents.push(block_instr_mouse);
    
    for (const thisComponent of block_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function block_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_instr' ---
    // get current time
    t = block_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_instr_text* updates
    if (t >= 0.0 && block_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_instr_text.tStart = t;  // (not accounting for frame time here)
      block_instr_text.frameNStart = frameN;  // exact frame index
      
      block_instr_text.setAutoDraw(true);
    }
    
    
    // if block_instr_text is active this frame...
    if (block_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    // *block_instr_mouse* updates
    if (t >= 0.0 && block_instr_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_instr_mouse.tStart = t;  // (not accounting for frame time here)
      block_instr_mouse.frameNStart = frameN;  // exact frame index
      
      block_instr_mouse.status = PsychoJS.Status.STARTED;
      block_instr_mouse.mouseClock.reset();
      prevButtonState = block_instr_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if block_instr_mouse is active this frame...
    if (block_instr_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = block_instr_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = block_instr_mouse.getPos();
          block_instr_mouse.x.push(_mouseXYs[0]);
          block_instr_mouse.y.push(_mouseXYs[1]);
          block_instr_mouse.leftButton.push(_mouseButtons[0]);
          block_instr_mouse.midButton.push(_mouseButtons[1]);
          block_instr_mouse.rightButton.push(_mouseButtons[2]);
          block_instr_mouse.time.push(block_instr_mouse.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_instr' ---
    for (const thisComponent of block_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('block_instr.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('block_instr_mouse.x', block_instr_mouse.x);
    psychoJS.experiment.addData('block_instr_mouse.y', block_instr_mouse.y);
    psychoJS.experiment.addData('block_instr_mouse.leftButton', block_instr_mouse.leftButton);
    psychoJS.experiment.addData('block_instr_mouse.midButton', block_instr_mouse.midButton);
    psychoJS.experiment.addData('block_instr_mouse.rightButton', block_instr_mouse.rightButton);
    psychoJS.experiment.addData('block_instr_mouse.time', block_instr_mouse.time);
    
    // the Routine "block_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var code_5MaxDurationReached;
var code_5MaxDuration;
var code_5Components;
function code_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'code_5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    code_5Clock.reset();
    routineTimer.reset();
    code_5MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('code_5.started', globalClock.getTime());
    code_5MaxDuration = null
    // keep track of which components have finished
    code_5Components = [];
    
    for (const thisComponent of code_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function code_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'code_5' ---
    // get current time
    t = code_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of code_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function code_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'code_5' ---
    for (const thisComponent of code_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('code_5.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    // ==========================================
    // БЛОК control - JavaScript (ИСПРАВЛЕННЫЙ)
    // ==========================================
    
    // Вспомогательная функция для безопасного получения данных с клавиатуры
    function getKeyData(kbComponent) {
        if (typeof kbComponent === 'undefined' || !kbComponent.keys) {
            return { key: 'none', rt: 'none' };
        }
        
        // Обработка keys (может быть строкой или массивом)
        var key;
        if (Array.isArray(kbComponent.keys)) {
            key = kbComponent.keys[0];
        } else {
            key = kbComponent.keys;
        }
        
        // Обработка rt (может быть числом или массивом)
        var rt;
        if (Array.isArray(kbComponent.rt)) {
            rt = kbComponent.rt[0];
        } else {
            rt = kbComponent.rt;
        }
        
        return { key: key, rt: rt };
    }
    
    // 1. Стимул ref_stim
    if (typeof ref_stim !== 'undefined') {
        psychoJS.experiment.addData('ref_stim_value', 'presented');
    } else {
        psychoJS.experiment.addData('ref_stim_value', 'missing');
    }
    
    // 2. Клавиша start_repord_key_cntrl
    var startData = getKeyData(start_repord_key_cntrl);
    psychoJS.experiment.addData('start_key', startData.key);
    psychoJS.experiment.addData('start_rt', startData.rt);
    
    // 3. Клавиша stop_repord_key_cntrl
    var stopData = getKeyData(stop_repord_key_cntrl);
    psychoJS.experiment.addData('stop_key', stopData.key);
    psychoJS.experiment.addData('stop_rt', stopData.rt);
    
    // 4. Слайдер acc_slider
    if (typeof acc_slider !== 'undefined') {
        var sliderVal = acc_slider.getRating();
        psychoJS.experiment.addData('acc_slider_value', sliderVal !== null ? sliderVal : 'not_touched');
    } else {
        psychoJS.experiment.addData('acc_slider_value', 'no_slider');
    }
    
    // 5. Слайдер acc_spec_slider
    if (typeof acc_spec_slider !== 'undefined') {
        var specVal = acc_spec_slider.getRating();
        psychoJS.experiment.addData('acc_spec_slider_value', specVal !== null ? specVal : 'not_touched');
    } else {
        psychoJS.experiment.addData('acc_spec_slider_value', 'no_slider');
    }
    
    // 6. Служебная информация
    psychoJS.experiment.addData('block', 'control');
    psychoJS.experiment.addData('trial_num', control.thisTrialN);
    psychoJS.experiment.addData('rep_num', control.thisRepN);
    
    // 7. Переход на новую строку
    psychoJS.experiment.nextEntry();
    // the Routine "code_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var refMaxDurationReached;
var refDur;
var refMaxDuration;
var refComponents;
function refRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ref' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    refClock.reset();
    routineTimer.reset();
    refMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    refDur = Number(ref_duration);
    
    smallSize = 0.15;
    bigSize = 0.25;
    currentSize = smallSize;
    ref_stim.size = currentSize;
    
    stimStart = 0;
    nextSwitch = stimStart + 0.3 + Math.random() * 0.5;
    psychoJS.experiment.addData('ref.started', globalClock.getTime());
    refMaxDuration = null
    // keep track of which components have finished
    refComponents = [];
    refComponents.push(ref_stim);
    
    for (const thisComponent of refComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function refRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ref' ---
    // get current time
    t = refClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    if (ref_stim.status === PsychoJS.Status.STARTED && t >= nextSwitch) {
        if (currentSize === smallSize) {
            currentSize = bigSize;
        } else {
            currentSize = smallSize;
        }
    
        ref_stim.size = currentSize;
        nextSwitch = t + 0.3 + Math.random() * 0.5;
    }
    
    // *ref_stim* updates
    if (t >= 0.0 && ref_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_stim.tStart = t;  // (not accounting for frame time here)
      ref_stim.frameNStart = frameN;  // exact frame index
      
      ref_stim.setAutoDraw(true);
    }
    
    
    // if ref_stim is active this frame...
    if (ref_stim.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + ref_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ref_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ref_stim.tStop = t;  // not accounting for scr refresh
      ref_stim.frameNStop = frameN;  // exact frame index
      // update status
      ref_stim.status = PsychoJS.Status.FINISHED;
      ref_stim.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of refComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function refRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ref' ---
    for (const thisComponent of refComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ref.stopped', globalClock.getTime());
    // the Routine "ref" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_repord_2MaxDurationReached;
var _start_repord_key_cntrl_allKeys;
var start_repord_2MaxDuration;
var start_repord_2Components;
function start_repord_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_repord_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    start_repord_2Clock.reset();
    routineTimer.reset();
    start_repord_2MaxDurationReached = false;
    // update component parameters for each repeat
    start_repord_key_cntrl.keys = undefined;
    start_repord_key_cntrl.rt = undefined;
    _start_repord_key_cntrl_allKeys = [];
    psychoJS.experiment.addData('start_repord_2.started', globalClock.getTime());
    start_repord_2MaxDuration = null
    // keep track of which components have finished
    start_repord_2Components = [];
    start_repord_2Components.push(start_repord_key_cntrl);
    
    for (const thisComponent of start_repord_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_repord_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_repord_2' ---
    // get current time
    t = start_repord_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_repord_key_cntrl* updates
    if (t >= 0.0 && start_repord_key_cntrl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_repord_key_cntrl.tStart = t;  // (not accounting for frame time here)
      start_repord_key_cntrl.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_repord_key_cntrl.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_repord_key_cntrl.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_repord_key_cntrl.clearEvents(); });
    }
    
    // if start_repord_key_cntrl is active this frame...
    if (start_repord_key_cntrl.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_repord_key_cntrl.getKeys({keyList: 'space', waitRelease: false});
      _start_repord_key_cntrl_allKeys = _start_repord_key_cntrl_allKeys.concat(theseKeys);
      if (_start_repord_key_cntrl_allKeys.length > 0) {
        start_repord_key_cntrl.keys = _start_repord_key_cntrl_allKeys[_start_repord_key_cntrl_allKeys.length - 1].name;  // just the last key pressed
        start_repord_key_cntrl.rt = _start_repord_key_cntrl_allKeys[_start_repord_key_cntrl_allKeys.length - 1].rt;
        start_repord_key_cntrl.duration = _start_repord_key_cntrl_allKeys[_start_repord_key_cntrl_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_repord_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_repord_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_repord_2' ---
    for (const thisComponent of start_repord_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('start_repord_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_repord_key_cntrl.corr, level);
    }
    psychoJS.experiment.addData('start_repord_key_cntrl.keys', start_repord_key_cntrl.keys);
    if (typeof start_repord_key_cntrl.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_repord_key_cntrl.rt', start_repord_key_cntrl.rt);
        psychoJS.experiment.addData('start_repord_key_cntrl.duration', start_repord_key_cntrl.duration);
        routineTimer.reset();
        }
    
    start_repord_key_cntrl.stop();
    // the Routine "start_repord_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stop_repordMaxDurationReached;
var _stop_repord_key_cntrl_allKeys;
var stop_repordMaxDuration;
var stop_repordComponents;
function stop_repordRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stop_repord' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stop_repordClock.reset();
    routineTimer.reset();
    stop_repordMaxDurationReached = false;
    // update component parameters for each repeat
    stop_repord_key_cntrl.keys = undefined;
    stop_repord_key_cntrl.rt = undefined;
    _stop_repord_key_cntrl_allKeys = [];
    psychoJS.experiment.addData('stop_repord.started', globalClock.getTime());
    stop_repordMaxDuration = null
    // keep track of which components have finished
    stop_repordComponents = [];
    stop_repordComponents.push(stop_repord_stim_cntrl);
    stop_repordComponents.push(stop_repord_key_cntrl);
    
    for (const thisComponent of stop_repordComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stop_repordRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stop_repord' ---
    // get current time
    t = stop_repordClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stop_repord_stim_cntrl* updates
    if (t >= 0.0 && stop_repord_stim_cntrl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_repord_stim_cntrl.tStart = t;  // (not accounting for frame time here)
      stop_repord_stim_cntrl.frameNStart = frameN;  // exact frame index
      
      stop_repord_stim_cntrl.setAutoDraw(true);
    }
    
    
    // if stop_repord_stim_cntrl is active this frame...
    if (stop_repord_stim_cntrl.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_repord_key_cntrl* updates
    if (t >= 0.0 && stop_repord_key_cntrl.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_repord_key_cntrl.tStart = t;  // (not accounting for frame time here)
      stop_repord_key_cntrl.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_repord_key_cntrl.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_repord_key_cntrl.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_repord_key_cntrl.clearEvents(); });
    }
    
    // if stop_repord_key_cntrl is active this frame...
    if (stop_repord_key_cntrl.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_repord_key_cntrl.getKeys({keyList: 'space', waitRelease: false});
      _stop_repord_key_cntrl_allKeys = _stop_repord_key_cntrl_allKeys.concat(theseKeys);
      if (_stop_repord_key_cntrl_allKeys.length > 0) {
        stop_repord_key_cntrl.keys = _stop_repord_key_cntrl_allKeys[_stop_repord_key_cntrl_allKeys.length - 1].name;  // just the last key pressed
        stop_repord_key_cntrl.rt = _stop_repord_key_cntrl_allKeys[_stop_repord_key_cntrl_allKeys.length - 1].rt;
        stop_repord_key_cntrl.duration = _stop_repord_key_cntrl_allKeys[_stop_repord_key_cntrl_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stop_repordComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stop_repordRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stop_repord' ---
    for (const thisComponent of stop_repordComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stop_repord.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_repord_key_cntrl.corr, level);
    }
    psychoJS.experiment.addData('stop_repord_key_cntrl.keys', stop_repord_key_cntrl.keys);
    if (typeof stop_repord_key_cntrl.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_repord_key_cntrl.rt', stop_repord_key_cntrl.rt);
        psychoJS.experiment.addData('stop_repord_key_cntrl.duration', stop_repord_key_cntrl.duration);
        routineTimer.reset();
        }
    
    stop_repord_key_cntrl.stop();
    // the Routine "stop_repord" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var byeMaxDurationReached;
var byeMaxDuration;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    byeClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    byeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('bye.started', globalClock.getTime());
    byeMaxDuration = null
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(thanks);
    
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }
    
    
    // if thanks is active this frame...
    if (thanks.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      thanks.tStop = t;  // not accounting for scr refresh
      thanks.frameNStop = frameN;  // exact frame index
      // update status
      thanks.status = PsychoJS.Status.FINISHED;
      thanks.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    for (const thisComponent of byeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('bye.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (byeMaxDurationReached) {
        byeClock.add(byeMaxDuration);
    } else {
        byeClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var data_2MaxDurationReached;
var data_2MaxDuration;
var data_2Components;
function data_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'data_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    data_2Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    data_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Отключаем стандартное сохранение
    psychoJS._saveResults = 0;
    
    // Формируем имя файла
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Получаем все данные 
    let dataObj = psychoJS._experiment._trialsData;
    
    // Составляем полный список компонентов
    let allKeys = [];
    dataObj.forEach(trial => {
        Object.keys(trial).forEach(key => {
            if (!allKeys.includes(key)) {
                allKeys.push(key);
            }
        });
    });
    
    // Формируем CSV с заголовками
    let csv = allKeys.join(',') + '\n';
    
    dataObj.forEach(trial => {
        let row = allKeys.map(key => {
            let val = trial[key];
            // если значение undefined, ставим пустую строку
            return val !== undefined ? "${val}" : '';
        }).join(',');
        csv += row + '\n';
    });
    
    // Отправляем на OSF через DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'Ur8G3pAuji5k', // меняем на свой ID
            filename: filename,
            data: csv,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved:', data);
        quitPsychoJS();
    })
    .catch(err => {
        console.error('Error saving data:', err);
        quitPsychoJS();
    });
    psychoJS.experiment.addData('data_2.started', globalClock.getTime());
    data_2MaxDuration = null
    // keep track of which components have finished
    data_2Components = [];
    data_2Components.push(text_2);
    
    for (const thisComponent of data_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function data_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'data_2' ---
    // get current time
    t = data_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_2.tStop = t;  // not accounting for scr refresh
      text_2.frameNStop = frameN;  // exact frame index
      // update status
      text_2.status = PsychoJS.Status.FINISHED;
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of data_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function data_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'data_2' ---
    for (const thisComponent of data_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('data_2.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (data_2MaxDurationReached) {
        data_2Clock.add(data_2MaxDuration);
    } else {
        data_2Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
