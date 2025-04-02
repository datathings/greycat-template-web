// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
declare namespace gc {
  namespace project {
    class Root extends gc.sdk.GCObject {
      static readonly _type = 'project::Root';
    }

    class Foo extends gc.sdk.GCObject {
      static readonly _type = 'project::Foo';
    }

  }

  namespace example {
    class add$args extends gc.sdk.GCObject {
      static readonly _type = 'example::add$args';
      a: number | bigint;
      b: number | bigint;
      constructor(a: number | bigint, b: number | bigint);
      static createFrom(fields: {a: number | bigint, b: number | bigint}): add$args;
    }

    function add(a: number | bigint, b: number | bigint, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<number | bigint>;
  }

  namespace sdk {
    interface GreyCat {
        call(method: 'example::add', args: [number | bigint, number | bigint], signal?: globalThis.AbortSignal): Promise<number | bigint>;
        spawn(method: 'example::add', args: [number | bigint, number | bigint], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'example::add', args: [number | bigint, number | bigint], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<number | bigint>;
    }
  }

  export import ErrorCode = gc.core.ErrorCode;
  export import t4 = gc.core.t4;
  export import nodeTimeCursor = gc.core.nodeTimeCursor;
  export import Table = gc.core.Table;
  export import nodeGeo = gc.core.nodeGeo;
  export import t3 = gc.core.t3;
  export import nodeIndex = gc.core.nodeIndex;
  export import GeoCircle = gc.core.GeoCircle;
  export import node = gc.core.node;
  export import DurationUnit = gc.core.DurationUnit;
  export import TimeZone = gc.core.TimeZone;
  export import TableColumnMapping = gc.core.TableColumnMapping;
  export import TensorType = gc.core.TensorType;
  export import Tuple = gc.core.Tuple;
  export import t2 = gc.core.t2;
  export import time = gc.core.time;
  export import bool = gc.core.bool;
  export import String = gc.core.String;
  export import GeoBox = gc.core.GeoBox;
  export import t4f = gc.core.t4f;
  export import ErrorFrame = gc.core.ErrorFrame;
  export import field = gc.core.field;
  export import CalendarUnit = gc.core.CalendarUnit;
  export import Buffer = gc.core.Buffer;
  export import Array = gc.core.Array;
  export import nodeList = gc.core.nodeList;
  export import GeoPoly = gc.core.GeoPoly;
  export import FloatPrecision = gc.core.FloatPrecision;
  export import char = gc.core.char;
  export import nodeTime = gc.core.nodeTime;
  export import float = gc.core.float;
  export import int = gc.core.int;
  export import t2f = gc.core.t2f;
  export import Tensor = gc.core.Tensor;
  export import duration = gc.core.duration;
  export import Date = gc.core.Date;
  export import SortOrder = gc.core.SortOrder;
  export import NodeInfo = gc.core.NodeInfo;
  export import function_ = gc.core.function_;
  export import MathConstants = gc.core.MathConstants;
  export import t3f = gc.core.t3f;
  export import str = gc.core.str;
  export import null_ = gc.core.null_;
  export import type = gc.core.type;
  export import SamplingMode = gc.core.SamplingMode;
  export import geo = gc.core.geo;
  export import Error = gc.core.Error;
  export import Map = gc.core.Map;
  export import SecurityEntity = gc.runtime.SecurityEntity;
  export import PeriodicTask = gc.runtime.PeriodicTask;
  export import Task = gc.runtime.Task;
  export import Log = gc.runtime.Log;
  export import SecurityFields = gc.runtime.SecurityFields;
  export import CallPerf = gc.runtime.CallPerf;
  export import RuntimeInfo = gc.runtime.RuntimeInfo;
  export import System = gc.runtime.System;
  export import LogLevel = gc.runtime.LogLevel;
  export import OpenIDConnect = gc.runtime.OpenIDConnect;
  export import User = gc.runtime.User;
  export import UserGroupPolicyType = gc.runtime.UserGroupPolicyType;
  export import Runtime = gc.runtime.Runtime;
  export import Job = gc.runtime.Job;
  export import License = gc.runtime.License;
  export import UserGroupPolicy = gc.runtime.UserGroupPolicy;
  export import TaskStatus = gc.runtime.TaskStatus;
  export import LicenseType = gc.runtime.LicenseType;
  export import SecurityPolicy = gc.runtime.SecurityPolicy;
  export import UserGroup = gc.runtime.UserGroup;
  export import FileWalker = gc.io.FileWalker;
  export import Json = gc.io.Json;
  export import Reader = gc.io.Reader;
  export import GcbReader = gc.io.GcbReader;
  export import CsvColumnStatistics = gc.io.CsvColumnStatistics;
  export import File = gc.io.File;
  export import JsonReader = gc.io.JsonReader;
  export import CsvFormat = gc.io.CsvFormat;
  export import CsvSharding = gc.io.CsvSharding;
  export import Email = gc.io.Email;
  export import Csv = gc.io.Csv;
  export import CsvAnalysisConfig = gc.io.CsvAnalysisConfig;
  export import GcbWriter = gc.io.GcbWriter;
  export import SmtpAuth = gc.io.SmtpAuth;
  export import Url = gc.io.Url;
  export import Writer = gc.io.Writer;
  export import SmtpMode = gc.io.SmtpMode;
  export import TextWriter = gc.io.TextWriter;
  export import Smtp = gc.io.Smtp;
  export import CsvStatistics = gc.io.CsvStatistics;
  export import HttpHeader = gc.io.HttpHeader;
  export import Http = gc.io.Http;
  export import CsvWriter = gc.io.CsvWriter;
  export import JsonWriter = gc.io.JsonWriter;
  export import TextReader = gc.io.TextReader;
  export import CsvReader = gc.io.CsvReader;
  export import Random = gc.util.Random;
  export import LogQuantizer = gc.util.LogQuantizer;
  export import Stack = gc.util.Stack;
  export import Plot = gc.util.Plot;
  export import GaussianProfileSlot = gc.util.GaussianProfileSlot;
  export import HistogramStats = gc.util.HistogramStats;
  export import TimeWindow = gc.util.TimeWindow;
  export import GaussianProfile = gc.util.GaussianProfile;
  export import QuantizerSlotBound = gc.util.QuantizerSlotBound;
  export import ProgressTracker = gc.util.ProgressTracker;
  export import Histogram = gc.util.Histogram;
  export import SlidingWindow = gc.util.SlidingWindow;
  export import Assert = gc.util.Assert;
  export import Crypto = gc.util.Crypto;
  export import LinearQuantizer = gc.util.LinearQuantizer;
  export import Gaussian = gc.util.Gaussian;
  export import CustomQuantizer = gc.util.CustomQuantizer;
  export import Quantizer = gc.util.Quantizer;
  export import MultiQuantizer = gc.util.MultiQuantizer;
  export import Queue = gc.util.Queue;
  export import Foo = gc.project.Foo;
  export import add = gc.example.add;
}
