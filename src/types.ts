import type { MenuItem, MenuItemConstructorOptions } from 'electron';


export interface SegmentBase {
  start?: number | undefined,
  end?: number | undefined,
}

export interface SegmentColorIndex {
  segColorIndex: number,
}

export interface ApparentSegmentBase extends SegmentColorIndex {
  start: number,
  end: number,
}


export type SegmentTags = Record<string, unknown>;

export type EditingSegmentTags = Record<string, SegmentTags>

export interface StateSegment extends SegmentBase, SegmentColorIndex {
  name: string;
  segId: string;
  tags?: SegmentTags | undefined;
}

export interface Segment extends SegmentBase {
  name?: string | undefined,
}

export interface ApparentCutSegment extends ApparentSegmentBase {
  name: string;
  segId: string,
  tags?: SegmentTags | undefined;
}

export interface SegmentToExport {
  start: number,
  end: number,
  name?: string | undefined;
  segId?: string | undefined;
  tags?: SegmentTags | undefined;
}

export interface InverseCutSegment {
  start: number,
  end: number,
  segId: string;
}


export type PlaybackMode = 'loop-segment-start-end' | 'loop-segment' | 'play-segment-once' | 'loop-selected-segments';

export type Html5ifyMode = 'fastest' | 'fast-audio-remux' | 'fast-audio' | 'fast' | 'slow' | 'slow-audio' | 'slowest';

export type EdlFileType = 'csv' | 'csv-frames' | 'xmeml' | 'fcpxml' | 'dv-analyzer-summary-txt' | 'cue' | 'pbf' | 'mplayer' | 'srt' | 'llc';

export type EdlImportType = 'youtube' | EdlFileType;

export type EdlExportType = 'csv' | 'tsv-human' | 'csv-human' | 'csv-frames' | 'srt' | 'llc';

export type TunerType = 'wheelSensitivity' | 'keyboardNormalSeekSpeed' | 'keyboardSeekAccFactor';

export interface Waveform {
  from: number,
  to: number,
  url: string,
}

export type FfmpegCommandLog = { command: string, time: Date }[];

export interface Thumbnail {
  time: number
  url: string
}

// todo types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FfprobeStream = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FfprobeFormat = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FfprobeChapter = any;

export type FormatTimecode = (a: { seconds: number, shorten?: boolean | undefined, fileNameFriendly?: boolean | undefined }) => string;

export type GetFrameCount = (sec: number) => number | undefined;

export type UpdateSegAtIndex = (index: number, newProps: Partial<StateSegment>) => void;

export type ContextMenuTemplate = (MenuItemConstructorOptions | MenuItem)[];