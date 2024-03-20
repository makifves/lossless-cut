export type KeyboardAction = 'addSegment' | 'togglePlayResetSpeed' | 'togglePlayNoResetSpeed' | 'reducePlaybackRate' | 'reducePlaybackRateMore' | 'increasePlaybackRate' | 'increasePlaybackRateMore' | 'timelineToggleComfortZoom' | 'seekPreviousFrame' | 'seekNextFrame' | 'captureSnapshot' | 'setCutStart' | 'setCutEnd' | 'removeCurrentSegment' | 'cleanupFilesDialog' | 'splitCurrentSegment' | 'increaseRotation' | 'goToTimecode' | 'seekBackwards' | 'seekBackwardsPercent' | 'seekBackwardsPercent' | 'seekBackwardsKeyframe' | 'jumpCutStart' | 'seekForwards' | 'seekForwardsPercent' | 'seekForwardsPercent' | 'seekForwardsKeyframe' | 'jumpCutEnd' | 'jumpTimelineStart' | 'jumpTimelineEnd' | 'jumpFirstSegment' | 'jumpPrevSegment' | 'timelineZoomIn' | 'timelineZoomIn' | 'batchPreviousFile' | 'jumpLastSegment' | 'jumpNextSegment' | 'timelineZoomOut' | 'timelineZoomOut' | 'batchNextFile' | 'batchOpenSelectedFile' | 'batchOpenPreviousFile' | 'batchOpenNextFile' | 'undo' | 'undo' | 'redo' | 'redo' | 'copySegmentsToClipboard' | 'copySegmentsToClipboard' | 'toggleFullscreenVideo' | 'labelCurrentSegment' | 'export' | 'toggleKeyboardShortcuts' | 'closeActiveScreen' | 'increaseVolume' | 'decreaseVolume' | 'detectBlackScenes' | 'detectSilentScenes' | 'detectSceneChanges' | 'toggleLastCommands' | 'play' | 'pause' | 'reloadFile' | 'html5ify' | 'togglePlayOnlyCurrentSegment' | 'toggleLoopOnlyCurrentSegment' | 'toggleLoopStartEndOnlyCurrentSegment' | 'toggleLoopSelectedSegments' | 'editCurrentSegmentTags' | 'duplicateCurrentSegment' | 'reorderSegsByStartTime' | 'invertAllSegments' | 'fillSegmentsGaps' | 'shiftAllSegmentTimes' | 'alignSegmentTimesToKeyframes' | 'createSegmentsFromKeyframes' | 'createFixedDurationSegments' | 'createNumSegments' | 'createRandomSegments' | 'shuffleSegments' | 'combineOverlappingSegments' | 'combineSelectedSegments' | 'clearSegments' | 'toggleSegmentsList' | 'selectOnlyCurrentSegment' | 'deselectAllSegments' | 'selectAllSegments' | 'toggleCurrentSegmentSelected' | 'invertSelectedSegments' | 'removeSelectedSegments' | 'toggleStreamsSelector' | 'extractAllStreams' | 'showStreamsSelector' | 'showIncludeExternalStreamsDialog' | 'captureSnapshotAsCoverArt' | 'extractCurrentSegmentFramesAsImages' | 'extractSelectedSegmentsFramesAsImages' | 'convertFormatBatch' | 'convertFormatCurrentFile' | 'fixInvalidDuration' | 'closeBatch' | 'concatBatch' | 'toggleKeyframeCutMode' | 'toggleCaptureFormat' | 'toggleStripAudio' | 'toggleStripThumbnail' | 'setStartTimeOffset' | 'toggleWaveformMode' | 'toggleShowThumbnails' | 'toggleShowKeyframes' | 'toggleSettings' | 'openSendReportDialog' | 'openFilesDialog' | 'exportYouTube' | 'closeCurrentFile' | 'quit';

export interface KeyBinding {
  keys: string,
  action: KeyboardAction,
}

export type CaptureFormat = 'jpeg' | 'png' | 'webp';

// https://www.electronjs.org/docs/api/locales
// See i18n.js
export const langNames = {
  en: 'English',
  cs: 'Čeština',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  nl: 'Nederlands',
  nb: 'Norsk (bokmål)',
  nn: 'Norsk (nynorsk)',
  pl: 'Polski',
  pt: 'Português',
  pt_BR: 'Português do Brasil',
  sl: 'Slovenščina',
  fi: 'Suomi',
  ru: 'Русский',
  // sr: 'Cрпски',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  ja: '日本語',
  zh: '中文',
  zh_Hant: '繁體中文',
  zh_Hans: '简体中文',
  ko: '한국어',
};

export type LanguageKey = keyof typeof langNames;

export type TimecodeFormat = 'timecodeWithDecimalFraction' | 'frameCount' | 'timecodeWithFramesFraction';

export type AvoidNegativeTs = 'make_zero' | 'auto' | 'make_non_negative' | 'disabled';

export interface Config {
  captureFormat: CaptureFormat,
  customOutDir: string | undefined,
  keyframeCut: boolean,
  autoMerge: boolean,
  autoDeleteMergedSegments: boolean,
  segmentsToChaptersOnly: boolean,
  enableSmartCut: boolean,
  timecodeFormat: TimecodeFormat,
  invertCutSegments: boolean,
  autoExportExtraStreams: boolean,
  exportConfirmEnabled: boolean,
  askBeforeClose: boolean,
  enableAskForImportChapters: boolean,
  enableAskForFileOpenAction: boolean,
  playbackVolume: number,
  autoSaveProjectFile: boolean,
  wheelSensitivity: number,
  language: LanguageKey | undefined,
  ffmpegExperimental: boolean,
  preserveMovData: boolean,
  movFastStart: boolean,
  avoidNegativeTs: AvoidNegativeTs,
  hideNotifications: 'all' | undefined,
  autoLoadTimecode: boolean,
  segmentsToChapters: boolean,
  preserveMetadataOnMerge: boolean,
  simpleMode: boolean,
  outSegTemplate: string | undefined,
  keyboardSeekAccFactor: number,
  keyboardNormalSeekSpeed: number,
  treatInputFileModifiedTimeAsStart: boolean,
  treatOutputFileModifiedTimeAsStart: boolean | undefined | null,
  outFormatLocked: string | undefined,
  safeOutputFileName: boolean,
  windowBounds: { x: number, y: number, width: number, height: number } | undefined,
  enableAutoHtml5ify: boolean,
  keyBindings: KeyBinding[],
  customFfPath: string | undefined,
  storeProjectInWorkingDir: boolean,
  enableOverwriteOutput: boolean,
  mouseWheelZoomModifierKey: string,
  captureFrameMethod: 'videotag' | 'ffmpeg',
  captureFrameQuality: number,
  captureFrameFileNameFormat: 'timestamp' | 'index',
  enableNativeHevc: boolean,
  enableUpdateCheck: boolean,
  cleanupChoices: {
    trashTmpFiles: boolean, askForCleanup: boolean, closeFile: boolean, cleanupAfterExport?: boolean | undefined,
  },
  allowMultipleInstances: boolean,
  darkMode: boolean,
  preferStrongColors: boolean,
  outputFileNameMinZeroPadding: number,
  cutFromAdjustmentFrames: number,
  invertTimelineScroll: boolean | undefined,
}

export type StoreGetConfig = <T extends keyof Config>(key: T) => Config[T];
export type StoreSetConfig = <T extends keyof Config>(key: T, value: Config[T]) => void;
export type StoreResetConfig = <T extends keyof Config>(key: T) => void;

export interface Waveform {
  buffer: Buffer,
}
